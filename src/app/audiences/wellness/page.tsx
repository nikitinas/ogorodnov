import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AudiencePageTemplate } from "../_components/audience-page-template";
import { getAudienceBySlug } from "../_components/get-audience-by-slug";

const slug = "wellness";

const careRituals = [
  {
    title: "Утро · Настрой дыхания",
    description:
      "3 минуты: тихий вдох через нос, длинный выдох на «Фууу», ладо-жесты в медленном темпе. Тело выходит из режима тревоги.",
  },
  {
    title: "День · Вибрационный «душ»",
    description:
      "Когда накатывает стресс, встаньте, потрясите кистями и мягко пропойте «У-О-А». Представьте, как звук проветривает грудную клетку.",
  },
  {
    title: "Вечер · Рефлексия",
    description:
      "Запишите 2–3 ощущения в дневник практики: где дыхание стало свободнее, какие эмоции вышли. Это укрепляет привычку заботы о себе.",
  },
];

export const metadata: Metadata = {
  title: "Для тех, кто ищет гармонию — Методика Огороднова",
  description:
    "Голосовая йога, дыхательные алгоритмы и мягкие жесты, которые снижают тревогу и возвращают внутренний камертон.",
};

export default function WellnessPage() {
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
              Ритуал возвращения к себе
            </h2>
            <p className="max-w-3xl text-base leading-7 text-brand-ash">
              Стабильность приходит, когда у тела и голоса есть опорные точки в
              течение дня. Попробуйте этот цикл в течение 21 дня и отмечайте,
              как меняются энергия и сон.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {careRituals.map((ritual) => (
              <div
                key={ritual.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-brand-navy">
                  {ritual.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {ritual.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-dashed border-brand-navy/30 bg-neutral-50 p-6 text-sm leading-6 text-brand-slate">
            <p>
              Для мягкого старта присоединяйтесь к бесплатному челленджу «Звук
              тишины». Там — короткие аудио-практики и напоминания в чат.
            </p>
            <Link
              href="/interactive-lab#wellness"
              className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-navy"
            >
              Пройти челлендж
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
