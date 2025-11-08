import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getAllDocSlugs, getBreadcrumbs, getDocBySlug } from "@/lib/docs";

type DocPageProps = {
  params: {
    slug: string[];
  };
};

export async function generateStaticParams() {
  const slugs = await getAllDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DocPageProps) {
  const doc = await getDocBySlug(params.slug);

  if (!doc) {
    return {
      title: "Документ не найден",
    };
  }

  const titleSegments = [doc.title, "Методика Огороднова"];
  return {
    title: titleSegments.filter(Boolean).join(" — "),
    description: `${doc.title} — материалы по методике Д. Е. Огороднова`,
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocBySlug(params.slug);

  if (!doc) {
    notFound();
  }

  const breadcrumbs = await getBreadcrumbs(params.slug);

  return (
    <div className="space-y-6">
      <Breadcrumbs items={breadcrumbs} />
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
          Документ
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          {doc.title}
        </h1>
      </header>
      <article className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc.content}</ReactMarkdown>
      </article>
    </div>
  );
}

