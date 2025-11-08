import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AudiencePageTemplate } from "../_components/audience-page-template";
import { getAudienceBySlug } from "../_components/get-audience-by-slug";

const slug = "musicians";

const practiceFocus = [
  {
    title: "Слух + лад",
    description:
      "5 минут ладо-жестов на гаммах и арпеджио перед каждым занятием. Это переводит слух в «функциональный режим».",
  },
  {
    title: "Диапазон",
    description:
      "Чередуем фонетические распевки с «подменой гласных» и мягкие восходящие арпеджио. Работаем в комфортном темпе без форсирования.",
  },
  {
    title: "Сольфеджио под стрессом",
    description:
      "Раз в неделю моделируем экзамен: чтение с листа + алгоритм дыхания. Отмечаем, где ушла опора и что с голосом в конце.",
  },
];

export const metadata: Metadata = {
  title: "Для музыкантов и студентов — Методика Огороднова",
  description:
    "Системное развитие слуха, техники дыхания и сценической устойчивости. Настройте голос к экзаменам и прослушиваниям.",
};

export default function MusiciansPage() {
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
              Тренировочный цикл на 6 недель
            </h2>
            <p className="max-w-3xl text-base leading-7 text-brand-ash">
              Чтобы стабилизировать слух и голос, достаточно 30–40 минут
              практики 4 раза в неделю. Комбинируйте блоки ниже и фиксируйте
              ощущения в журнале — это пригодится на супервизии.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {practiceFocus.map((item) => (
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
              Хотите проверить прогресс? Запишитесь на экспресс-диагностику: мы
              замерим чистоту интонирования, устойчивость дыхания и подскажем,
              какие алгоритмы подключить дальше.
            </p>
            <Link
              href="/contacts?topic=musicians"
              className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-navy"
            >
              Записаться на диагностику
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
