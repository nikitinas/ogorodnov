import { Metadata } from "next";
import Link from "next/link";
import { audiences } from "@/data/audiences";

export const metadata: Metadata = {
  title: "Аудитории",
  description:
    "Семь маршрутов для родителей, музыкантов, педагогов, лидеров, специалистов по помощи, тех, кто ищет гармонию, и артистов. Найдите подходящий сегмент и ознакомьтесь с программой.",
};

export default function AudiencesPage() {
  return (
    <>
      <section className="section pb-0 pt-16">
        <div className="section-inner grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-4 py-2 text-xs uppercase tracking-[0.32em] text-brand-ash">
              Экосистема для семи аудиторий
            </span>
            <h1 className="text-4xl leading-tight text-brand-navy sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Выберите маршрут, который настроит ваш голос под задачу
            </h1>
            <p className="text-base leading-7 text-brand-ash">
              Методика Огороднова работает для детей, профессионалов и тех, кто
              ищет баланс. Каждая страница сегмента — это готовый сценарий:
              проблемы, решения, истории и форматы, адаптированные под ваш
              запрос.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contacts" className="btn btn-primary px-8 py-3">
                Нужна помощь с выбором?
              </Link>
              <Link
                href="/interactive-lab"
                className="btn btn-outline px-8 py-3"
              >
                Попробовать интерактивы
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-dashed border-brand-navy/20 bg-white/80 p-6 shadow-soft">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-ash">
              Как устроены разделы
            </h2>
            <ul className="mt-4 space-y-4 text-sm leading-6 text-brand-ash">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-navy" />
                <div>
                  <p className="font-semibold text-brand-navy">
                    Запрос — Решение
                  </p>
                  <p className="text-brand-slate">
                    Видите основные проблемы сегмента и готовые шаги методики,
                    которые их закрывают.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-navy" />
                <div>
                  <p className="font-semibold text-brand-navy">
                    Как работает методика
                  </p>
                  <p className="text-brand-slate">
                    Три ключевых инсайта, показывающих, как алгоритмы,
                    тактирование и жесты адаптируются под конкретную цель.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-navy" />
                <div>
                  <p className="font-semibold text-brand-navy">
                    Форматы и кейсы
                  </p>
                  <p className="text-brand-slate">
                    Подборка программ и реальные истории, чтобы представить путь
                    от первого занятия до результата.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl text-brand-navy md:text-4xl">
              Все аудитории и их маршруты
            </h2>
            <p className="max-w-3xl text-base leading-7 text-brand-ash">
              Найдите сегмент, который ближе вашему запросу, изучите ключевые
              инсайты и перейдите на страницу, чтобы увидеть подробности и
              записаться на диагностику.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {audiences.map((audience) => (
              <article
                key={audience.slug}
                className="flex h-full flex-col rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-lg"
              >
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.32em] text-brand-ash">
                    {audience.heroLabel}
                  </span>
                  <h3 className="text-2xl text-brand-navy">{audience.name}</h3>
                  <p className="text-sm leading-6 text-brand-ash">
                    {audience.subheadline}
                  </p>
                </div>
                <div className="mt-6 space-y-3 rounded-2xl bg-neutral-50 p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-ash">
                    На что делаем упор
                  </h4>
                  <ul className="space-y-2 text-sm text-brand-slate">
                    {audience.insights.slice(0, 2).map((insight) => (
                      <li key={insight.title} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-indigo" />
                        <span>
                          <span className="font-semibold text-brand-navy">
                            {insight.title}
                          </span>
                          : {insight.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 space-y-3 rounded-2xl bg-brand-sand/70 p-4 text-sm text-brand-ash">
                  <p className="font-semibold text-brand-navy">
                    {audience.primaryCta.description ||
                      "Запишитесь, чтобы получить персональный план."}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={audience.primaryCta.href}
                      className="btn btn-primary px-4 py-2"
                    >
                      {audience.primaryCta.label}
                    </Link>
                    <Link
                      href={`/audiences/${audience.slug}`}
                      className="btn btn-outline px-4 py-2"
                    >
                      Открыть страницу
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
