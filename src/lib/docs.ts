import fs from "fs";
import path from "path";

export interface DocItem {
  title: string;
  slug: string; // URL-friendly slug (encoded)
  path: string; // Actual file system path
  isDirectory: boolean;
  children?: DocItem[];
  russianTitle?: string;
  description?: string;
  filePath?: string; // Full file system path for reading
}

// Russian translations for categories and documents
const russianLabels: Record<string, string> = {
  apps: "Приложения",
  method: "Методика",
  school: "Школа",
  courses: "Курсы",
  website: "Сайт",
  target: "Целевые аудитории",
  sources: "Источники",
  "1. algorithm": "Алгоритм",
  "2. rythm": "Ритм",
  "3. hand-vocal": "Ладо-жесты",
  general: "Общее",
  intro: "Введение",
  overview: "Обзор",
  "design-concept": "Концепция дизайна",
  domain: "Домен",
  structure: "Структура",
  "1. parents-and-children": "Родители и дети",
  "2. musicians": "Музыканты",
  "3. music-teachers": "Музыкальные педагоги",
  "4. leaders-and-managers": "Руководители и менеджеры",
  "5. wellness": "Велнес",
  "6. therapists-and-helpers": "Терапевты и помощники",
  "7. artists": "Артисты",
  summary: "Резюме",
  "pdf-guide": "Руководство по PDF",
  "pure-intonation": "Чистая интонация",
  "source-confident": "Источник уверенности",
  "voice-alphabet": "Голосовой алфавит",
  "voice-for-negotiations": "Голос для переговоров",
  "voice-yoga": "Голосовая йога",
};

function getRussianTitle(key: string): string {
  return russianLabels[key] || key.replace(/^\d+\.\s*/, "").replace(/-/g, " ");
}

const docsDir = path.join(process.cwd(), "docs");

export function getAllDocs(): DocItem[] {
  function buildTree(dirPath: string, basePath: string = ""): DocItem[] {
    const items: DocItem[] = [];
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      // Skip hidden files and non-markdown files (except directories)
      if (entry.name.startsWith(".")) continue;
      
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name;

      if (entry.isDirectory()) {
        const children = buildTree(fullPath, relativePath);
        items.push({
          title: entry.name,
          slug: relativePath,
          path: relativePath,
          isDirectory: true,
          children,
          russianTitle: getRussianTitle(entry.name),
        });
      } else if (entry.name.endsWith(".md")) {
        const title = entry.name.replace(/\.md$/, "");
        // Create URL-friendly slug by encoding the path
        const slugPath = relativePath.replace(/\.md$/, "");
        // Store the actual file path for reading
        items.push({
          title,
          slug: slugPath, // This will be URL-encoded when used in URLs
          path: relativePath,
          filePath: fullPath, // Store actual file system path
          isDirectory: false,
          russianTitle: getRussianTitle(title),
        });
      }
    }

    return items.sort((a, b) => {
      // Directories first, then files
      if (a.isDirectory !== b.isDirectory) {
        return a.isDirectory ? -1 : 1;
      }
      return a.title.localeCompare(b.title);
    });
  }

  return buildTree(docsDir);
}

export function getDocContent(slug: string): string | null {
  try {
    // First, try to find the doc by slug to get the actual file path
    const doc = getDocBySlug(slug);
    if (doc && doc.filePath && fs.existsSync(doc.filePath)) {
      return fs.readFileSync(doc.filePath, "utf-8");
    }

    // Fallback: try to construct path from slug
    // Decode URL-encoded characters if needed
    let decodedSlug = slug;
    try {
      decodedSlug = decodeURIComponent(slug);
    } catch {
      // If decoding fails, use original
      decodedSlug = slug;
    }
    
    // Try with decoded slug first
    const filePath = path.join(docsDir, `${decodedSlug}.md`);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }

    // Try with original slug (in case it wasn't encoded)
    if (decodedSlug !== slug) {
      const filePath2 = path.join(docsDir, `${slug}.md`);
      if (fs.existsSync(filePath2)) {
        return fs.readFileSync(filePath2, "utf-8");
      }
    }

    // Last resort: search all docs to find matching file
    function searchAllDocs(items: DocItem[], targetSlug: string): string | null {
      for (const item of items) {
        if (!item.isDirectory && item.filePath) {
          // Compare normalized paths
          const normalize = (s: string) => {
            try {
              return decodeURIComponent(s).toLowerCase();
            } catch {
              return s.toLowerCase();
            }
          };
          
          const itemPath = item.slug.toLowerCase();
          const targetPath = normalize(targetSlug);
          
          if (normalize(itemPath) === targetPath || item.slug === targetSlug) {
            if (fs.existsSync(item.filePath)) {
              return item.filePath;
            }
          }
        }
        if (item.children) {
          const found = searchAllDocs(item.children, targetSlug);
          if (found) return found;
        }
      }
      return null;
    }
    
    const foundPath = searchAllDocs(getAllDocs(), slug);
    if (foundPath && fs.existsSync(foundPath)) {
      return fs.readFileSync(foundPath, "utf-8");
    }

    return null;
  } catch (error) {
    console.error(`Error reading doc ${slug}:`, error);
    return null;
  }
}

export function getDocMetadata(slug: string): { title: string; slug: string } | null {
  const content = getDocContent(slug);
  if (!content) return null;

  // Extract title from first heading or filename
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const filename = slug.split("/").pop() || "";
  const title = titleMatch
    ? titleMatch[1]
    : getRussianTitle(filename);

  return {
    title: title.trim(),
    slug,
  };
}

export function getDocBySlug(slug: string): DocItem | null {
  // Normalize slug for comparison (decode URL encoding)
  const normalize = (s: string): string => {
    try {
      return decodeURIComponent(s);
    } catch {
      return s;
    }
  };
  
  const normalizedSlug = normalize(slug);
  
  function findDoc(items: DocItem[]): DocItem | null {
    for (const item of items) {
      if (!item.isDirectory) {
        // Compare normalized slugs
        const normalizedItemSlug = normalize(item.slug);
        if (normalizedItemSlug === normalizedSlug || item.slug === slug) {
          return item;
        }
      }
      
      if (item.children) {
        const found = findDoc(item.children);
        if (found) return found;
      }
    }
    return null;
  }

  return findDoc(getAllDocs());
}

export function getSiblingDocs(currentSlug: string): { prev: DocItem | null; next: DocItem | null } {
  function flattenDocs(items: DocItem[]): DocItem[] {
    const result: DocItem[] = [];
    for (const item of items) {
      if (!item.isDirectory) {
        result.push(item);
      }
      if (item.children) {
        result.push(...flattenDocs(item.children));
      }
    }
    return result;
  }

  const allDocs = flattenDocs(getAllDocs());
  const currentIndex = allDocs.findIndex((doc) => doc.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? allDocs[currentIndex - 1] : null,
    next: currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null,
  };
}

