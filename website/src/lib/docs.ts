import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";

const DOCS_ROOT = path.join(process.cwd(), "..", "docs");

export type DocNode =
  | {
      title: string;
      slug: string[];
      relativePath: string;
      type: "folder";
      children: DocNode[];
    }
  | {
      title: string;
      slug: string[];
      relativePath: string;
      type: "doc";
    };

const collator = new Intl.Collator("ru", { numeric: true, sensitivity: "base" });

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/\.[^/.]+$/, "")
    .replace(/[\s_.]+/g, "-")
    .replace(/[^a-z0-9-\u0400-\u04FF]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const formatTitle = (name: string) => {
  const withoutExt = name.replace(/\.[^/.]+$/, "");
  const pretty = withoutExt.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();

  if (!pretty) {
    return name;
  }

  return pretty
    .split(" ")
    .map((word) => {
      const trimmed = word.trim();
      if (!trimmed) {
        return "";
      }

      const firstAlphaIndex = trimmed.search(/[A-Za-zА-Яа-яЁё]/);
      if (firstAlphaIndex === -1) {
        return trimmed;
      }

      return (
        trimmed.slice(0, firstAlphaIndex) +
        trimmed.charAt(firstAlphaIndex).toUpperCase() +
        trimmed.slice(firstAlphaIndex + 1)
      );
    })
    .join(" ");
};

async function readDirectory(
  dirPath: string,
  parentSlug: string[],
): Promise<DocNode[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  const sorted = entries.sort((a, b) => collator.compare(a.name, b.name));
  const nodes: DocNode[] = [];

  for (const entry of sorted) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const absolutePath = path.join(dirPath, entry.name);
    const relativePath = path.relative(DOCS_ROOT, absolutePath);

    if (entry.isDirectory()) {
      const slug = [...parentSlug, slugify(entry.name)];
      const children = await readDirectory(absolutePath, slug);

      if (children.length === 0) {
        continue;
      }

      nodes.push({
        title: formatTitle(entry.name),
        slug,
        relativePath,
        type: "folder",
        children,
      });

      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (ext !== ".md") {
      continue;
    }

    const slug = [...parentSlug, slugify(entry.name)];

    nodes.push({
      title: formatTitle(entry.name),
      slug,
      relativePath,
      type: "doc",
    });
  }

  return nodes;
}

const getDocsTreeInternal = cache(async (): Promise<DocNode[]> => {
  try {
    await fs.access(DOCS_ROOT);
  } catch {
    console.warn(`[docs] docs directory not found at ${DOCS_ROOT}`);
    return [];
  }

  return readDirectory(DOCS_ROOT, []);
});

export const getDocsTree = getDocsTreeInternal;

const flattenDocs = (nodes: DocNode[]): DocNode[] =>
  nodes.flatMap((node) =>
    node.type === "doc" ? [node] : [node, ...flattenDocs(node.children)],
  );

const findNode = (slug: string[], nodes: DocNode[]): DocNode | null => {
  for (const node of nodes) {
    if (node.slug.join("/") === slug.join("/")) {
      return node;
    }

    if (node.type === "folder") {
      const found = findNode(slug, node.children);
      if (found) {
        return found;
      }
    }
  }

  return null;
};

export const getBreadcrumbs = cache(async (slug: string[]) => {
  const tree = await getDocsTree();
  const breadcrumbs: DocNode[] = [];

  for (let index = 0; index < slug.length; index += 1) {
    const partial = slug.slice(0, index + 1);
    const node = findNode(partial, tree);

    if (!node) {
      break;
    }

    breadcrumbs.push(node);
  }

  return breadcrumbs.map((node) => ({
    title: node.title,
    slug: node.slug,
    type: node.type,
  }));
});

export const getDocBySlug = cache(async (slug: string[]) => {
  if (!slug || slug.length === 0) {
    return null;
  }

  const tree = await getDocsTree();
  const node = findNode(slug, tree);

  if (!node || node.type !== "doc") {
    return null;
  }

  const absolutePath = path.join(DOCS_ROOT, node.relativePath);
  const content = await fs.readFile(absolutePath, "utf8");

  return {
    ...node,
    content,
  };
});

export const getAllDocSlugs = cache(async () => {
  const tree = await getDocsTree();
  const nodes = flattenDocs(tree);
  return nodes
    .filter((node) => node.type === "doc")
    .map((node) => node.slug);
});

