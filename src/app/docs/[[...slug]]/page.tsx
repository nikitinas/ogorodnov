import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  getAllDocs,
  getDocContent,
  getDocMetadata,
  getSiblingDocs,
  type DocItem,
} from "@/lib/docs";
import DocsSidebar from "../_components/docs-sidebar";
import type { DocsNavItem } from "../_components/types";

type DocPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

function mapDocsToNavItems(items: DocItem[]): DocsNavItem[] {
  return items.map((item) => {
    if (item.isDirectory) {
      const children = item.children
        ? mapDocsToNavItems(item.children.filter((child) => !child.isIndexPage))
        : undefined;

      return {
        title: item.title,
        slug: item.slug,
        isDirectory: true,
        russianTitle: item.russianTitle,
        href: item.indexPage?.slug,
        hrefTitle: item.indexPage?.title ?? item.title,
        hrefRussianTitle: item.indexPage?.russianTitle ?? item.russianTitle,
        children,
      };
    }

    return {
      title: item.title,
      slug: item.slug,
      isDirectory: false,
      russianTitle: item.russianTitle,
      href: item.slug,
    };
  });
}

export async function generateStaticParams() {
  const allDocs = getAllDocs();

  function extractSlugs(items: DocItem[]): string[] {
    const slugs: string[] = [];
    for (const item of items) {
      if (item.isDirectory) {
        if (item.indexPage) {
          slugs.push(item.indexPage.slug);
        }
        if (item.children) {
          slugs.push(...extractSlugs(item.children));
        }
      } else {
        slugs.push(item.slug);
      }
    }
    return slugs;
  }

  const slugs = Array.from(new Set(extractSlugs(allDocs)));
  return [
    { slug: [] },
    ...slugs.map((slug) => ({
      slug: slug.split("/"),
    })),
  ];
}

export async function generateMetadata({ params }: DocPageProps) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return {
      title: "Документация проекта",
      description: "Внутренняя документация по дизайну и структуре сайта методики Огороднова",
    };
  }

  const docSlug = slug.join("/");
  const metadata = getDocMetadata(docSlug);

  if (!metadata) {
    return {
      title: "Документ не найден",
    };
  }

  return {
    title: `${metadata.title} — Документация`,
    description: `Документация: ${metadata.title}`,
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;

  const allDocs = getAllDocs();
  const navItems = mapDocsToNavItems(allDocs);

  // Handle index page (no slug)
  if (!slug || slug.length === 0) {
    return (
      <div className="section py-12">
        <div className="section-inner">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <DocsSidebar items={navItems} />
            <div className="min-w-0">
              <div className="mb-8 space-y-4">
                <h1 className="font-serif text-4xl font-bold text-brand-navy md:text-5xl">
                  Документация проекта
                </h1>
                <p className="text-lg leading-relaxed text-brand-ash">
                  Внутренняя документация по дизайну, структуре и разработке сайта методики Огороднова.
                  Здесь собраны все материалы по проектированию, целевым аудиториям, методике и приложениям.
                </p>
              </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {allDocs.map((section) => {
                    const childDocs =
                      section.children?.filter((item) => !item.isDirectory && !item.isIndexPage) ?? [];

                    return (
                      <div
                        key={section.slug}
                        className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
                      >
                        <h2 className="mb-4 font-serif text-2xl font-semibold text-brand-navy">
                          {section.russianTitle || section.title}
                        </h2>
                        {childDocs.length > 0 && (
                          <ul className="space-y-2">
                            {childDocs.slice(0, 5).map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={`/docs/${item.slug}`}
                                  className="text-brand-ash transition-colors hover:text-brand-navy"
                                >
                                  {item.russianTitle || item.title}
                                </Link>
                              </li>
                            ))}
                            {childDocs.length > 5 && (
                              <li>
                                <Link
                                  href={`/docs/${section.slug}`}
                                  className="text-sm text-brand-indigo hover:underline"
                                >
                                  и еще {childDocs.length - 5}...
                                </Link>
                              </li>
                            )}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>

              <div className="mt-8 rounded-lg border border-neutral-200 bg-brand-sand/30 p-6">
                <h3 className="mb-3 font-serif text-xl font-semibold text-brand-navy">
                  Навигация
                </h3>
                <p className="text-brand-ash">
                  Используйте боковое меню слева для навигации по разделам документации. Каждый раздел
                  содержит подробные материалы по соответствующей теме.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle document pages
  const docSlug = slug.join("/");
  const content = getDocContent(docSlug);
  const metadata = getDocMetadata(docSlug);

  if (!content || !metadata) {
    notFound();
  }

  const siblings = getSiblingDocs(docSlug);

  // Build breadcrumb
  const pathParts = docSlug.split("/");
  const breadcrumbs = pathParts.map((part, index) => {
    const path = pathParts.slice(0, index + 1).join("/");
    return {
      label: part,
      path,
    };
  });

  const findDocTitle = (slugToFind: string, fallback: string): string => {
    const search = (items: DocItem[]): string | null => {
      for (const item of items) {
        if (item.isDirectory) {
          if (item.slug === slugToFind) {
            return item.russianTitle || item.title;
          }
          if (item.indexPage) {
            if (item.indexPage.slug === slugToFind || item.indexPage.sourceSlug === slugToFind) {
              return item.indexPage.russianTitle || item.russianTitle || item.title;
            }
          }
          if (item.children) {
            const found = search(item.children);
            if (found) return found;
          }
        } else if (item.slug === slugToFind) {
          return item.russianTitle || item.title;
        }
      }
      return null;
    };

    return search(allDocs) ?? fallback;
  };

  return (
    <div className="section py-12">
      <div className="section-inner">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          <DocsSidebar items={navItems} currentSlug={docSlug} />

          <div className="min-w-0">
            {/* Breadcrumb */}
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-brand-ash">
              <Link
                href="/docs"
                className="rounded-full px-3 py-1 transition-colors hover:bg-neutral-100 hover:text-brand-navy"
              >
                Главная
              </Link>
              {breadcrumbs.map((crumb, index) => {
                const label = findDocTitle(crumb.path, crumb.label);

                return (
                  <span key={index} className="flex items-center gap-2">
                    <span className="text-neutral-300">/</span>
                    {index === breadcrumbs.length - 1 ? (
                      <span className="font-medium text-brand-navy">{label}</span>
                    ) : (
                      <Link
                        href={`/docs/${crumb.path}`}
                        className="rounded-full px-3 py-1 transition-colors hover:bg-neutral-100 hover:text-brand-navy"
                      >
                        {label}
                      </Link>
                    )}
                  </span>
                );
              })}
            </nav>

            {/* Document content */}
            <article className="rounded-lg border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="prose prose-lg prose-slate max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="font-serif text-4xl font-bold text-brand-navy mb-6 mt-0 first:mt-0">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="font-serif text-3xl font-semibold text-brand-navy mb-4 mt-8 first:mt-0">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="font-serif text-2xl font-semibold text-brand-navy mb-3 mt-6 first:mt-0">
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="font-serif text-xl font-semibold text-brand-navy mb-2 mt-4 first:mt-0">
                        {children}
                      </h4>
                    ),
                    p: ({ children }) => (
                      <p className="text-brand-slate leading-7 mb-4 text-base">
                        {children}
                      </p>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="text-brand-navy font-medium no-underline hover:underline transition-colors"
                      >
                        {children}
                      </a>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-brand-navy font-semibold">{children}</strong>
                    ),
                    em: ({ children }) => (
                      <em className="text-brand-ash italic">{children}</em>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-outside text-brand-slate my-4 ml-6 space-y-2 marker:text-brand-navy">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-outside text-brand-slate my-4 ml-6 space-y-2 marker:text-brand-navy marker:font-semibold">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-brand-slate my-2 leading-7 pl-2">{children}</li>
                    ),
                    code: ({ className, children, ...props }: any) => {
                      const isInline = !className;
                      return isInline ? (
                        <code
                          className="bg-neutral-100 text-brand-navy px-1.5 py-0.5 rounded text-sm font-mono font-medium"
                          {...props}
                        >
                          {children}
                        </code>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                    pre: ({ children }: any) => (
                      <pre className="bg-neutral-900 text-neutral-100 rounded-lg p-4 overflow-x-auto my-4 text-sm">
                        {children}
                      </pre>
                    ),
                    blockquote: ({ children }: any) => (
                      <blockquote className="border-l-4 border-brand-navy/30 pl-4 italic text-brand-ash my-4 bg-neutral-50/50 py-2 rounded-r">
                        {children}
                      </blockquote>
                    ),
                    hr: () => <hr className="border-neutral-200 my-8" />,
                    table: ({ children }: any) => (
                      <div className="overflow-x-auto my-4">
                        <table className="border-collapse w-full min-w-full">{children}</table>
                      </div>
                    ),
                    thead: ({ children }: any) => (
                      <thead className="bg-neutral-50">{children}</thead>
                    ),
                    tbody: ({ children }: any) => <tbody>{children}</tbody>,
                    th: ({ children }: any) => (
                      <th className="border border-neutral-300 bg-neutral-50 p-2 text-left font-semibold text-brand-navy">
                        {children}
                      </th>
                    ),
                    td: ({ children }: any) => (
                      <td className="border border-neutral-300 p-2 text-brand-slate">
                        {children}
                      </td>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </article>

            {/* Navigation between documents */}
            {(siblings.prev || siblings.next) && (
              <div className="mt-8 grid gap-4 border-t border-neutral-200 pt-8 md:grid-cols-2">
                {siblings.prev && (
                  <Link
                    href={`/docs/${siblings.prev.slug}`}
                    className="group rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-brand-navy hover:bg-brand-sand/20"
                  >
                    <div className="mb-1 text-xs font-medium uppercase tracking-wide text-brand-ash">
                      ← Предыдущий
                    </div>
                    <div className="font-medium text-brand-navy">
                      {siblings.prev.russianTitle || siblings.prev.title}
                    </div>
                  </Link>
                )}
                {siblings.next && (
                  <Link
                    href={`/docs/${siblings.next.slug}`}
                    className="group ml-auto rounded-lg border border-neutral-200 bg-white p-4 text-right transition-colors hover:border-brand-navy hover:bg-brand-sand/20"
                  >
                    <div className="mb-1 text-xs font-medium uppercase tracking-wide text-brand-ash">
                      Следующий →
                    </div>
                    <div className="font-medium text-brand-navy">
                      {siblings.next.russianTitle || siblings.next.title}
                    </div>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
