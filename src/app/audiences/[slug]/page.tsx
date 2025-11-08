import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { audiences } from "@/data/audiences";

type AudiencePageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return audiences.map((audience) => ({ slug: audience.slug }));
}

export async function generateMetadata({
  params,
}: AudiencePageProps): Promise<Metadata> {
  const audience = audiences.find((item) => item.slug === params.slug);

  if (!audience) {
    return {};
  }

  return {
    title: audience.name,
    description: audience.description,
  };
}

export default function AudiencePage({ params }: AudiencePageProps) {
  const { slug } = params;
  const audience = audiences.find((item) => item.slug === slug);

  if (!audience) {
    notFound();
  }

  return (
    <>
      <section className="section pb-0 pt-16">
        <div className="section-inner space-y-10">
          <Link
            href="/#audiences"
            className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-ash transition hover:border-brand-navy/40 hover:text-brand-navy"
          >
            ← Назад ко всем сегментам
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-4 py-2 text-xs uppercase tracking-[0.32em] text-brand-ash">
                {audience.heroLabel}
              </span>
              <h1 className="text-4xl leading-tight text-brand-navy md:text-5xl">
                {audience.headline}
              </h1>
              <p className="text-lg leading-8 text-brand-ash">
                {audience.subheadline}
              </p>
              <p className="text-base leading-7 text-brand-slate">
                {audience.description}
              </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href={audience.primaryCta.href}
                    className="btn btn-primary px-7 py-3"
                  >
                    {audience.primaryCta.label}
                  </Link>
                  <Link
                    href="/interactive-lab"
                    className="btn btn-outline px-7 py-3"
                  >
                    Попробовать интерактивы
                  </Link>
              </div>
              {audience.primaryCta.description ? (
                <p className="text-sm text-brand-ash">
                  {audience.primaryCta.description}
                </p>
              ) : null}
            </div>
            <div className="h-full rounded-3xl border border-dashed border-brand-navy/30 bg-white/90 p-8 shadow-soft">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-ash">
                Как мы работаем с вами
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-ash">
                {audience.tone}
              </p>
              <div className="mt-6 space-y-4 text-sm text-brand-slate">
                {audience.insights.slice(0, 2).map((insight) => (
                  <div
                    key={insight.title}
                    className="rounded-2xl bg-neutral-50 p-4"
                  >
                    <h3 className="font-semibold text-brand-navy">
                      {insight.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-ash">
                      {insight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner space-y-8">
          <h2 className="text-3xl text-brand-navy md:text-4xl">
            Проблемы, которые вы решаете
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {audience.problems.map((item) => (
              <div
                key={item.issue}
                className="flex h-full flex-col rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-ash">
                  Запрос
                </h3>
                <p className="mt-3 text-base font-semibold text-brand-navy">
                  {item.issue}
                </p>
                <div className="mt-4 rounded-2xl bg-brand-sand/80 p-4">
                  <h4 className="text-xs uppercase tracking-[0.3em] text-brand-ash">
                    Решение методики
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-brand-slate">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="section-inner space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl text-brand-navy md:text-4xl">
                Что вы получаете
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-brand-ash">
                Конкретные инструменты и программы, которые вы можете внедрить
                сразу после консультации или диагностики.
              </p>
            </div>
              <Link
                href="/interactive-lab"
                className="btn btn-outline px-6 py-2"
              >
              Смотреть интерактивы
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {audience.insights.map((insight) => (
              <div
                key={insight.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft"
              >
                <h3 className="text-xl text-brand-navy">{insight.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner space-y-8">
          <h2 className="text-3xl text-brand-navy md:text-4xl">
            Форматы работы
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {audience.programs.map((program) => (
              <div
                key={program.title}
                className="flex h-full flex-col rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl text-brand-navy">{program.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-sand/70">
        <div className="section-inner space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl text-brand-navy md:text-4xl">
                Истории успеха
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-brand-ash">
                Реальные кейсы учеников и клиентов, которые проходили наш путь.
              </p>
            </div>
              <Link href="/blog" className="btn btn-outline px-6 py-2">
              Больше кейсов в блоге
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {audience.stories.map((story) => (
              <div
                key={story.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft"
              >
                <span className="text-xs uppercase tracking-[0.32em] text-brand-ash">
                  {story.hero}
                </span>
                <h3 className="mt-4 text-xl text-brand-navy">{story.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {story.summary}
                </p>
                <blockquote className="mt-4 rounded-2xl border-l-4 border-brand-coral bg-brand-sand/60 p-4 text-sm italic text-brand-slate">
                  {story.quote}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pb-20">
        <div className="section-inner rounded-3xl bg-brand-navy px-10 py-14 text-white shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-[2.4rem] lg:leading-[1.15]">
                Готовы настроить свой голос?
              </h2>
              <p className="text-sm leading-7 text-white/80">
                Мы подберём упражнения, материалы и формат занятий,
                соответствующие вашим целям. Запишитесь на бесплатную
                диагностику, и вы получите план на ближайшие 4 недели.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={audience.primaryCta.href}
                  className="btn btn-primary px-8 py-3 shadow-lg"
                >
                {audience.primaryCta.label}
              </Link>
              <Link
                href="/interactive-lab"
                  className="btn btn-on-dark px-8 py-3"
              >
                Попробовать лабораторию
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
