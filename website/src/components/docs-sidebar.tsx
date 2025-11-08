import Link from "next/link";
import type { DocNode } from "@/lib/docs";
import { cn } from "@/lib/utils";

type SidebarProps = {
  tree: DocNode[];
  activeSlug: string[];
};

const isSameSlug = (a: string[], b: string[]) =>
  a.length === b.length && a.every((segment, index) => b[index] === segment);

const isAncestor = (ancestor: string[], target: string[]) =>
  ancestor.length > 0 &&
  ancestor.length <= target.length &&
  ancestor.every((segment, index) => target[index] === segment);

type SidebarItemProps = {
  node: DocNode;
  activeSlug: string[];
  depth?: number;
};

const SidebarItem = ({ node, activeSlug, depth = 0 }: SidebarItemProps) => {
  const slugKey = node.slug.join("/");
  const current = isSameSlug(node.slug, activeSlug);
  const ancestorActive =
    node.type === "folder" && isAncestor(node.slug, activeSlug);

  return (
    <li key={slugKey} className="py-1">
      <div
        className={cn(
          "rounded-md px-2 py-1 text-sm transition-colors",
          node.type === "folder" ? "font-semibold text-zinc-800" : "font-medium",
          current
            ? "bg-zinc-900 text-white"
            : ancestorActive
              ? "bg-zinc-100 text-zinc-800"
              : "text-zinc-600 hover:bg-zinc-100",
        )}
        style={{ paddingLeft: depth * 12 + 8 }}
      >
        {node.type === "doc" ? (
          <Link
            href={`/${node.slug.join("/")}`}
            className={cn(
              "block w-full",
              current ? "text-white" : "hover:text-zinc-900",
            )}
          >
            {node.title}
          </Link>
        ) : (
          <span>{node.title}</span>
        )}
      </div>
      {node.type === "folder" && node.children.length > 0 && (
        <ul className="mt-1 space-y-1">
          {node.children.map((child) => (
            <SidebarItem
              key={child.slug.join("/")}
              node={child}
              activeSlug={activeSlug}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export const DocsSidebar = ({ tree, activeSlug }: SidebarProps) => (
  <nav className="w-full">
    <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
      Навигация
    </h2>
    <ul className="space-y-1">
      {tree.map((node) => (
        <SidebarItem
          key={node.slug.join("/")}
          node={node}
          activeSlug={activeSlug}
          depth={0}
        />
      ))}
    </ul>
  </nav>
);

