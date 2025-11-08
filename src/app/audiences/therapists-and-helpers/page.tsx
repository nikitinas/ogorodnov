import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AudiencePageTemplate } from "../_components/audience-page-template";
import { getAudienceBySlug } from "../_components/get-audience-by-slug";

const slug = "therapists-and-helpers";

const sessionAnchors = [
  {
    title: "До сессии",
    description:
      "Настройка дыхания и тела: 3 цикла «вдох носом — пауза — выдох на «ммм». Помогает прийти в контакт с собой и снять остаточное напряжение.",
  },
  {
    title: "Во время",
    description:
      "Отмечаем, где голос переходит в «жёсткое» звучание. Используем ладо-жесты незаметно для клиента, чтобы возвращаться к опоре и теплоте.",
  },
  {
    title: "После",
    description:
      "Голосовой детокс: пропеваем «У-О-А» на нисходящих ступенях, выполняем тактирование для сброса чужой эмоции и фиксируем наблюдения в журнале.",
  },
];

export const metadata: Metadata = {
  title: "Для психологов и помогающих практиков — Методика Огороднова",
  description:
    "Голос как инструмент эмпатии и контейнирования: алгоритмы, которые помогают удерживать контакт и предотвращают профессиональное выгорание.",
};

export default function TherapistsAndHelpersPage() {
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
              Три опоры для устойчивого специалиста
            </h2>
            <p className="max-w-3xl text-base leading-7 text-brand-ash">
              Эти практики защищают голос от эмоционального выгорания, сохраняют
              эмпатию и дают ясный слух к нюансам речи клиента.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {sessionAnchors.map((anchor) => (
              <div
                key={anchor.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-brand-navy">
                  {anchor.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {anchor.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-dashed border-brand-navy/30 bg-neutral-50 p-6 text-sm leading-6 text-brand-slate">
            <p>
              Для глубокого погружения присоединяйтесь к супервизионному клубу:
              мы разбираем голосовые кейсы, проводим практикум по жестам и
              делимся инструментами самоподдержки.
            </p>
            <Link
              href="/contacts?topic=therapists"
              className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-navy"
            >
              Узнать расписание клуба
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
