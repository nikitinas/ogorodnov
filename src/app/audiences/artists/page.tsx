import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AudiencePageTemplate } from "../_components/audience-page-template";
import { getAudienceBySlug } from "../_components/get-audience-by-slug";

const slug = "artists";

const stageChecklist = [
  {
    title: "Разогрев",
    description:
      "5 минут: смешанное голосообразование на «НГ», лёгкие прыжки и ладо-жесты в темпе спектакля. Голос и тело включаются вместе.",
  },
  {
    title: "Работа с текстом",
    description:
      "Читаем реплики с художественным тактированием, распределяем паузы и акценты. Проверяем, где дыхание «провисает».",
  },
  {
    title: "Сценическая устойчивость",
    description:
      "Прогоняем кульминацию с опорой на алгоритм: дыхание, жест, фраза. Фиксируем, что помогает удержать изображение героя.",
  },
];

export const metadata: Metadata = {
  title: "Для актёров, ораторов и артистов — Методика Огороднова",
  description:
    "Сценический голос без усталости: дыхание, дикция и ладо-жесты для актёров, спикеров и артистов мюзикла.",
};

export default function ArtistsPage() {
  const audience = getAudienceBySlug(slug);

  if (!audience) {
    notFound();
  }

  return (
    <AudiencePageTemplate audience={audience}>
      <section className="section">
        <div className="section-inner space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl text-brand-navy md:text-4xl">
              Сценический чек-лист перед выступлением
            </h2>
            <p className="max-w-3xl text-base leading-7 text-brand-ash">
              Перед выходом на сцену важно собрать дыхание, ритм и образ в одну
              линию. Этот чек-лист помогает сделать голос выносливым и
              выразительным.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {stageChecklist.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-dashed border-brand-navy/30 bg-neutral-50 p-6 text-sm leading-6 text-brand-slate">
            <p>
              Готовитесь к премьере или публичной речи? На индивидуальной сессии
              разберём текст, голосовой рисунок и подстроим алгоритмы под ваш
              темп.
            </p>
            <Link
              href="/contacts?topic=artists"
              className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-navy"
            >
              Запросить подготовку
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </AudiencePageTemplate>
  );
}
