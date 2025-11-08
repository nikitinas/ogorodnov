import Link from "next/link";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  title: string;
  slug: string[];
  type: "folder" | "doc";
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <nav aria-label="Навигационные хлебные крошки">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
        <li>
          <Link href="/" className={cn("transition-colors hover:text-zinc-800")}>
            Главная
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const href = `/${item.slug.join("/")}`;

          return (
            <li key={item.slug.join("/")}>
              <span className="mx-1 text-zinc-400">/</span>
              {isLast ? (
                <span className="text-zinc-800">{item.title}</span>
              ) : (
                <Link
                  href={href}
                  className={cn("transition-colors hover:text-zinc-800")}
                >
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

