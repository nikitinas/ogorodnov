import Link from "next/link";
import type { ReactNode } from "react";
import { getDocsTree } from "@/lib/docs";
import { DocsSidebar } from "@/components/docs-sidebar";

type SiteLayoutProps = {
  children: ReactNode;
  params: {
    slug?: string[];
  };
};

export default async function SiteLayout({ children, params }: SiteLayoutProps) {
  const tree = await getDocsTree();
  const activeSlug = params?.slug ?? [];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 lg:flex-row lg:gap-10">
        <aside className="lg:w-72 lg:self-start lg:sticky lg:top-10">
          <Link href="/" className="block">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
                Методика Огороднова
              </p>
              <h1 className="text-2xl font-black tracking-tight text-zinc-900">
                Цифровой Портал Документации
              </h1>
            </div>
          </Link>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm lg:max-h-[80vh] lg:overflow-y-auto">
            <DocsSidebar tree={tree} activeSlug={activeSlug} />
          </div>
        </aside>
        <main className="flex-1">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

