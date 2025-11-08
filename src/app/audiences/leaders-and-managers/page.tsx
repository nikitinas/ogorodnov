import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AudiencePageTemplate } from "../_components/audience-page-template";
import { getAudienceBySlug } from "../_components/get-audience-by-slug";

const slug = "leaders-and-managers";

const leadershipHabits = [
  {
    title: "Перед встречей",
    description:
      "3мин: алгоритм уверенности + короткая тренировка дыхания на счёте 4/6. Тело переключается в ресурс, голос звучит плотнее.",
  },
  {
    title: "Во время презентации",
    description:
      "Встраиваем ладовые жесты в структуру: тоника — ключевая мысль, неустойчивые ступени — зона риска. Это добавляет выразительность и контроль.",
  },
  {
    title: "После переговоров",
    description:
      "2мин: голосовой «рижнал» — пропеваем гласные для снятия напряжения, фиксируем, где голос «проседал». Планируем работу на следующую сессию.",
  },
];

export const metadata: Metadata = {
  title: "Для руководителей и менеджеров — Методика Огороднова",
  description:
    "Голос лидера без хрипоты и страха сцены: дыхание на опоре, работа с резонаторами и управление интонацией для переговоров и презентаций.",
};

export default function LeadersAndManagersPage() {
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
              Ритуалы сильного голоса на каждый день
            </h2>
            <p className="max-w-3xl text-base leading-7 text-brand-ash">
              Эти три шага займут меньше 10 минут. Они помогают удерживать
              внимание аудитории, держать тембр плотным и восстанавливаться
              после нагрузки.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {leadershipHabits.map((habit) => (
              <div
                key={habit.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-brand-navy">
                  {habit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {habit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-dashed border-brand-navy/30 bg-neutral-50 p-6 text-sm leading-6 text-brand-slate">
            <p>
              Для команды можем провести корпоративный интенсив «Голос лидера».
              Формат — 2 часа практики и персональные карты упражнений.
            </p>
            <Link
              href="/contacts?topic=leaders"
              className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-navy"
            >
              Запросить интенсив
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
