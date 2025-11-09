"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DocsNavItem } from "./types";

type DocsSidebarProps = {
  items: DocsNavItem[];
  currentSlug?: string;
};

export default function DocsSidebar({ items, currentSlug }: DocsSidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const handleToggle = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const handleNavigate = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsMobileOpen(false);
    }
  };

  const renderNavItem = (item: DocsNavItem, level: number = 0): ReactNode => {
    const displayTitle = item.russianTitle || item.title;

    if (item.isDirectory) {
      return (
        <div key={item.slug} className={level > 0 ? "ml-4 mt-2" : ""}>
          <div className="mb-1 font-serif text-sm font-semibold text-brand-navy">{displayTitle}</div>
          {item.children && (
            <ul className="space-y-1 border-l-2 border-neutral-200 pl-3">
              {item.children.map((child) => (
                <li key={child.slug}>{renderNavItem(child, level + 1)}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    const isActive = currentSlug === item.slug;

    return (
      <Link
        key={item.slug}
        href={`/docs/${item.slug}`}
        onClick={handleNavigate}
        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
          isActive
            ? "bg-brand-navy text-white font-medium"
            : "text-brand-ash hover:bg-neutral-100 hover:text-brand-navy"
        }`}
      >
        {displayTitle}
      </Link>
    );
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleToggle}
        className="flex w-full items-center justify-between rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-brand-navy transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-brand-navy/30 lg:hidden"
        aria-expanded={isMobileOpen}
        aria-controls="docs-sidebar-nav"
      >
        <span>{isMobileOpen ? "Скрыть оглавление" : "Оглавление"}</span>
        <span className="ml-3 text-xs uppercase tracking-wide text-brand-ash">
          {isMobileOpen ? "закрыть" : "открыть"}
        </span>
      </button>

      <aside
        id="docs-sidebar-nav"
        className={`${isMobileOpen ? "mt-4 block" : "hidden"} lg:mt-0 lg:block lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto`}
      >
        <nav className="space-y-4 lg:pr-4">
          <Link
            href="/docs"
            onClick={handleNavigate}
            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              !currentSlug
                ? "bg-brand-navy text-white"
                : "text-brand-ash hover:bg-neutral-100 hover:text-brand-navy"
            }`}
          >
            Главная
          </Link>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.slug}>{renderNavItem(item)}</div>
            ))}
          </div>
        </nav>
      </aside>
    </div>
  );
}
