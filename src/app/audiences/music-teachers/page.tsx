import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AudiencePageTemplate } from "../_components/audience-page-template";
import { getAudienceBySlug } from "../_components/get-audience-by-slug";

const slug = "music-teachers";

const lessonModules = [
  {
    title: "Блок А · Алгоритм голосообразования",
    description:
      "Разбор схемы, опорные жесты, контроль дыхания. Используйте как старт урока, чтобы выстроить единый стандарт звучания.",
  },
  {
    title: "Блок B · Художественное тактирование",
    description:
      "Работаем в парах и мини-группах, отрабатываем метроритм и взаимодействие. Подходит для хоровых репетиций и классов сольфеджио.",
  },
  {
    title: "Блок C · Ладовая импровизация",
    description:
      "Ученик дирижирует жестами, группа повторяет. Формируем чувство лада и уверенность при пении с листа.",
  },
];

export const metadata: Metadata = {
  title: "Для педагогов — Методика Огороднова",
  description:
    "Методический кабинет: структурированные планы уроков, алгоритмы и супервизия для педагога любого уровня.",
};

export default function MusicTeachersPage() {
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
              Конструктор урока на 45 минут
            </h2>
            <p className="max-w-3xl text-base leading-7 text-brand-ash">
              Перестаньте каждый раз собирать урок с нуля. Возьмите три готовых
              модуля, комбинируйте и адаптируйте под уровень класса.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {lessonModules.map((module) => (
              <div
                key={module.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-brand-navy">
                  {module.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {module.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-dashed border-brand-navy/30 bg-neutral-50 p-6 text-sm leading-6 text-brand-slate">
            <p>
              В методическом пакете — презентации для урока, карточки с
              упражнениями и видеоразборы жестов. Получите демо-доступ к
              комплексу материалов.
            </p>
            <Link
              href="/method#resources"
              className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-navy"
            >
              Запросить демо-пакет
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
