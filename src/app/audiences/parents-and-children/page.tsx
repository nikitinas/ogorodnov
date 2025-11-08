import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AudiencePageTemplate } from "../_components/audience-page-template";
import { getAudienceBySlug } from "../_components/get-audience-by-slug";

const slug = "parents-and-children";

const earlyWins = [
  {
    title: "Неделя 1 · Диагностика через игру",
    description:
      "Пробуем ладо-жесты на знакомых песенках, фиксируем, какие движения даются легко, а где ребёнок теряет высоту.",
  },
  {
    title: "Неделя 2 · Дыхание без напряжения",
    description:
      "Вводим «цветочек» и игру с длинными гласными. Родители видят, как меняется выдох и плавность фразы.",
  },
  {
    title: "Неделя 3–4 · Мини-сцены дома",
    description:
      "Собираем первый «концерт» из трёх упражнений. Ребёнок чувствует успех, а семья — эффект системной практики.",
  },
];

export const metadata: Metadata = {
  title: "Для родителей и детей — Методика Огороднова",
  description:
    "Маршрут раннего музыкального развития: упражнения, игры и алгоритмы, которые ставят чистое пение, речь и уверенность у детей 3–10 лет.",
};

export default function ParentsAndChildrenPage() {
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
              Маршрут первого месяца для семьи
            </h2>
            <p className="max-w-3xl text-base leading-7 text-brand-ash">
              Мы двигаемся маленькими шагами, вовлекая родителей и ребёнка в
              общую игру. Вот как выглядит первый этап программы, если
              заниматься 2–3 раза в неделю по 15–20 минут.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {earlyWins.map((item) => (
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
              Хотите посмотреть, как проходит диагностика? В интерактивной
              лаборатории есть демо-урок «Алгоритм-Конструктор» с детскими
              голосами.
            </p>
            <Link
              href="/interactive-lab#wellness"
              className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-navy"
            >
              Открыть демо-практику
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
