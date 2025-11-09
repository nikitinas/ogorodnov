import fs from "fs";
import path from "path";

export interface DocItem {
  title: string;
  slug: string; // URL-friendly slug (encoded)
  path: string; // Actual file system path or directory path
  isDirectory: boolean;
  children?: DocItem[];
  russianTitle?: string;
  description?: string;
  filePath?: string; // Full file system path for reading
  isIndexPage?: boolean;
  indexPage?: DirectoryIndexPage;
}

type DirectoryIndexPage = {
  slug: string;
  title: string;
  russianTitle?: string;
  filePath: string;
  relativePath: string;
  sourceSlug: string;
  sourceTitle: string;
  sourceRussianTitle?: string;
};

const INDEX_PAGE_PRIORITY = [
  "index",
  "_index",
  "readme",
  "overview",
  "intro",
  "general",
  "summary",
  "about",
] as const;

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

const sortDocs = (a: DocItem, b: DocItem): number => {
  if (a.isDirectory !== b.isDirectory) {
    return a.isDirectory ? -1 : 1;
  }
  return a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: "base" });
};

function createDocFile(fullPath: string, relativePath: string): DocItem {
  const title = path.basename(relativePath, ".md");
  const slug = relativePath.replace(/\.md$/, "");

  return {
    title,
    slug,
    path: relativePath,
    isDirectory: false,
    filePath: fullPath,
    russianTitle: getRussianTitle(title),
  };
}

function buildDirectoryItem(fullPath: string, relativePath: string, dirName: string): DocItem {
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });
  const directoryChildren: DocItem[] = [];
  const docChildren: DocItem[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;

    const entryFullPath = path.join(fullPath, entry.name);
    const entryRelativePath = relativePath ? `${relativePath}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      directoryChildren.push(buildDirectoryItem(entryFullPath, entryRelativePath, entry.name));
      continue;
    }

    if (entry.name.endsWith(".md")) {
      docChildren.push(createDocFile(entryFullPath, entryRelativePath));
    }
  }

  directoryChildren.sort(sortDocs);
  docChildren.sort(sortDocs);

  let indexPage: DirectoryIndexPage | undefined;

  if (relativePath) {
    const priorityMatch = INDEX_PAGE_PRIORITY.find((candidate) =>
      docChildren.some((doc) => doc.title.toLowerCase() === candidate.toLowerCase()),
    );

    const indexSource =
      (priorityMatch &&
        docChildren.find((doc) => doc.title.toLowerCase() === priorityMatch.toLowerCase())) ||
      docChildren[0];

    if (indexSource && indexSource.filePath) {
      indexSource.isIndexPage = true;
      indexPage = {
        slug: relativePath,
        title: getRussianTitle(dirName),
        russianTitle: getRussianTitle(dirName),
        filePath: indexSource.filePath,
        relativePath: indexSource.path,
        sourceSlug: indexSource.slug,
        sourceTitle: indexSource.title,
        sourceRussianTitle: indexSource.russianTitle,
      };
    }
  }

  const combinedChildren = [...directoryChildren, ...docChildren];
  combinedChildren.sort(sortDocs);

  const directoryItem: DocItem = {
    title: dirName,
    slug: relativePath,
    path: relativePath,
    isDirectory: true,
    children: combinedChildren.length ? combinedChildren : undefined,
    russianTitle: getRussianTitle(dirName),
  };

  if (indexPage) {
    directoryItem.indexPage = indexPage;
  }

  return directoryItem;
}

function buildTree(dirPath: string, basePath: string = ""): DocItem[] {
  const items: DocItem[] = [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;

    const fullPath = path.join(dirPath, entry.name);
    const relativePath = basePath ? `${basePath}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      items.push(buildDirectoryItem(fullPath, relativePath, entry.name));
    } else if (entry.name.endsWith(".md")) {
      items.push(createDocFile(fullPath, relativePath));
    }
  }

  return items.sort(sortDocs);
}

export function getAllDocs(): DocItem[] {
  return buildTree(docsDir);
}

const normalizeSlugValue = (value: string): string => {
  try {
    return decodeURIComponent(value).toLowerCase();
  } catch {
    return value.toLowerCase();
  }
};

function createIndexDocFromDirectory(directory: DocItem): DocItem | null {
  const index = directory.indexPage;
  if (!index) {
    return null;
  }

  return {
    title: index.title,
    slug: index.slug,
    path: index.relativePath,
    isDirectory: false,
    filePath: index.filePath,
    russianTitle: index.russianTitle ?? directory.russianTitle ?? index.title,
  };
}

export function getDocContent(slug: string): string | null {
  try {
    const doc = getDocBySlug(slug);
    if (doc?.filePath && fs.existsSync(doc.filePath)) {
      return fs.readFileSync(doc.filePath, "utf-8");
    }

    let decodedSlug = slug;
    try {
      decodedSlug = decodeURIComponent(slug);
    } catch {
      decodedSlug = slug;
    }

    const directPath = path.join(docsDir, `${decodedSlug}.md`);
    if (fs.existsSync(directPath)) {
      return fs.readFileSync(directPath, "utf-8");
    }

    if (decodedSlug !== slug) {
      const fallbackPath = path.join(docsDir, `${slug}.md`);
      if (fs.existsSync(fallbackPath)) {
        return fs.readFileSync(fallbackPath, "utf-8");
      }
    }

    const foundPath = searchAllDocsForPath(getAllDocs(), slug);
    if (foundPath && fs.existsSync(foundPath)) {
      return fs.readFileSync(foundPath, "utf-8");
    }

    return null;
  } catch (error) {
    console.error(`Error reading doc ${slug}:`, error);
    return null;
  }
}

function searchAllDocsForPath(items: DocItem[], targetSlug: string): string | null {
  const targetNormalized = normalizeSlugValue(targetSlug);

  for (const item of items) {
    if (item.isDirectory) {
      if (item.indexPage) {
        const index = item.indexPage;
        const normalizedIndexSlug = normalizeSlugValue(index.slug);
        const normalizedSourceSlug = normalizeSlugValue(index.sourceSlug);

        if (
          normalizedIndexSlug === targetNormalized ||
          index.slug === targetSlug ||
          normalizedSourceSlug === targetNormalized ||
          index.sourceSlug === targetSlug
        ) {
          return index.filePath;
        }
      }

      if (item.children) {
        const foundChildPath = searchAllDocsForPath(item.children, targetSlug);
        if (foundChildPath) {
          return foundChildPath;
        }
      }
    } else if (item.filePath) {
      const normalizedItemSlug = normalizeSlugValue(item.slug);
      if (normalizedItemSlug === targetNormalized || item.slug === targetSlug) {
        return item.filePath;
      }
    }
  }

  return null;
}

export function getDocMetadata(slug: string): { title: string; slug: string } | null {
  const content = getDocContent(slug);
  if (!content) return null;

  // Extract title from first heading or filename
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const filename = slug.split("/").pop() || "";
  const title = titleMatch ? titleMatch[1] : getRussianTitle(filename);

  return {
    title: title.trim(),
    slug,
  };
}

export function getDocBySlug(slug: string): DocItem | null {
  const normalizedSlug = normalizeSlugValue(slug);

  function findDoc(items: DocItem[]): DocItem | null {
    for (const item of items) {
      if (item.isDirectory) {
        const indexDoc = createIndexDocFromDirectory(item);
        if (indexDoc) {
          const normalizedIndexSlug = normalizeSlugValue(indexDoc.slug);
          if (normalizedIndexSlug === normalizedSlug || indexDoc.slug === slug) {
            return indexDoc;
          }
        }

        if (item.children) {
          const foundChild = findDoc(item.children);
          if (foundChild) {
            return foundChild;
          }
        }
      } else {
        const normalizedItemSlug = normalizeSlugValue(item.slug);
        if (normalizedItemSlug === normalizedSlug || item.slug === slug) {
          return item;
        }
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
      if (item.isDirectory) {
        const indexDoc = createIndexDocFromDirectory(item);
        if (indexDoc) {
          result.push(indexDoc);
        }
        if (item.children) {
          result.push(...flattenDocs(item.children));
        }
      } else if (!item.isIndexPage) {
        result.push(item);
      }
    }

    return result;
  }

  const allDocs = flattenDocs(getAllDocs());
  const currentIndex = allDocs.findIndex((doc) => doc.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? allDocs[currentIndex - 1] : null,
    next: currentIndex >= 0 && currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null,
  };
}

