import Link from "next/link";
import {
  audienceCards,
  ecosystemSteps,
  heroHighlights,
  successSpotlight,
} from "@/data/home";
import { methodPillars } from "@/data/method";

export default function Home() {
  return (
    <>
      <section className="section pb-0 pt-16">
        <div className="section-inner grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-brand-sand px-4 py-2 text-xs uppercase tracking-[0.32em] text-brand-ash">
              <span>Методика Огороднова</span>
              <span className="h-1 w-1 rounded-full bg-brand-coral" />
              <span>Голос · Движение · Дыхание</span>
            </div>
            <h1 className="text-4xl leading-tight text-brand-navy sm:text-5xl lg:text-[3.6rem] lg:leading-[1.05]">
              Ваш голос может всё. Настройте его, как камертон, и раскройте
              потенциал в музыке, профессии и жизни.
            </h1>
            <p className="prose-lead">
              Мы перевели методику Д.Е. Огороднова в цифровую экосистему. Здесь
              есть интерактивные тренажёры, программы для семи целевых аудиторий
              и сообщество педагогов. Всё построено на трёх китах методики:
              алгоритмах, художественном тактировании и ладо-вокальных жестах.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:shadow-lg hover:brightness-105"
              >
                Пройти бесплатную диагностику
              </Link>
              <Link
                href="/interactive-lab"
                className="inline-flex items-center justify-center rounded-full border border-brand-navy px-8 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
              >
                Попробовать лабораторию
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-ash">
              Цифры методики
            </h2>
            <dl className="grid gap-6">
              {heroHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-neutral-100 p-5">
                  <dt className="font-serif text-xl font-semibold text-brand-navy">
                    {item.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-brand-ash">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="audiences" className="section">
        <div className="section-inner space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl text-brand-navy md:text-4xl">
                Выберите свой путь
              </h2>
              <p className="max-w-2xl text-base leading-7 text-brand-ash">
                Родители, музыканты, педагоги, руководители, специалисты по
                помощи, люди, ищущие баланс, актёры — методика адаптируется под
                каждую историю. Начните с подборки, близкой к вашим целям.
              </p>
            </div>
            <Link
              href="/interactive-lab"
              className="inline-flex items-center justify-center rounded-full border border-brand-navy px-6 py-2 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
            >
              С чего начать?
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {audienceCards.map((segment) => (
              <Link
                key={segment.slug}
                href={`/audiences/${segment.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-navy/50 hover:shadow-lg"
              >
                <span className="text-xs uppercase tracking-[0.32em] text-brand-ash">
                  {segment.heroLabel}
                </span>
                <h3 className="mt-4 text-2xl text-brand-navy">
                  {segment.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {segment.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-navy">
                  Узнать подробнее
                  <svg
                    className="h-4 w-4 transition group-hover:translate-x-1"
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="section-inner grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl text-brand-navy md:text-4xl">
              Методика за 90 секунд
            </h2>
            <p className="text-base leading-7 text-brand-ash">
              Методика комплексного музыкально-певческого воспитания Огороднова
              строится на трёх взаимосвязанных практиках. Вместе они формируют
              точный слух, свободный голос и уверенность в движении.
            </p>
            <div className="rounded-3xl border border-dashed border-brand-navy/20 bg-white/80 p-6 text-sm text-brand-ash shadow-inner">
              Представьте камертон: он настраивает оркестр. Те же принципы
              работают с человеческим голосом — через движение руки, дыхание и
              звук. Мы превращаем теорию в практику, доступную каждому.
            </div>
            <Link
              href="/method"
              className="inline-flex items-center justify-center rounded-full border border-brand-navy px-6 py-2 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
            >
              Читать подробнее о системе
            </Link>
          </div>
          <div className="grid gap-6">
            {methodPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl bg-white p-6 shadow-soft"
              >
                <h3 className="text-xl text-brand-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {pillar.summary}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-brand-slate">
                  {pillar.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-coral"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl text-brand-navy md:text-4xl">
              Экосистема, построенная на опыте и технологиях
            </h2>
            <p className="max-w-2xl text-base leading-7 text-brand-ash">
              Мы сохранили философию методики и добавили современную цифровую
              оболочку. Каждый шаг сопровождается подсказками, аналитикой и
              рекомендациями.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ecosystemSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex h-full flex-col rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-white shadow-soft">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl text-brand-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-sand/70">
        <div className="section-inner space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl text-brand-navy md:text-4xl">
              Истории людей, которые настроили свой голос
            </h2>
            <p className="max-w-2xl text-base leading-7 text-brand-ash">
              Методика работает для детей, профессионалов и лидеров. Истории —
              лучшее доказательство.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {successSpotlight.map((story) => (
              <div
                key={story.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft"
              >
                <span className="text-xs uppercase tracking-[0.32em] text-brand-ash">
                  {story.audience}
                </span>
                <h3 className="mt-4 text-xl text-brand-navy">{story.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {story.description}
                </p>
                <Link
                  href="/blog"
                  className="group mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-navy"
                >
                  Читайте кейс
                  <svg
                    className="h-4 w-4 transition group-hover:translate-x-1"
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
            ))}
          </div>
        </div>
      </section>

      <section className="section pb-20">
        <div className="section-inner rounded-3xl bg-brand-navy px-10 py-14 text-white shadow-soft">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-[2.5rem] lg:leading-[1.1]">
                Не знаете, с чего начать? Пройдите бесплатный тест и получите
                персональный план развития голоса.
              </h2>
              <p className="text-sm leading-7 text-white/80">
                5 минут, чтобы определить ваш уровень, подобрать упражнения и
                выбрать формат: самостоятельная практика, занятия с педагогом,
                корпоративная программа или wellness-маршрут.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-105"
              >
                Пройти тест и получить план
              </Link>
              <Link
                href="/interactive-lab"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Узнать о лаборатории
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
