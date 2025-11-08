import { Metadata } from "next";
import Link from "next/link";
import { eventCategories } from "@/data/events";

export const metadata: Metadata = {
  title: "События и программы",
  description:
    "Курсы повышения квалификации, интенсивы, семинары, онлайн-курсы и комьюнити-встречи методики Огороднова. Выберите формат, который подходит вашим целям и графику.",
};

export default function EventsPage() {
  return (
    <>
      <section className="section pb-0 pt-16">
        <div className="section-inner grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-4 py-2 text-xs uppercase tracking-[0.32em] text-brand-ash">
              События методики Огороднова
            </span>
            <h1 className="text-4xl leading-tight text-brand-navy sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Найдите событие, которое настроит ваш голос под задачу
            </h1>
            <p className="text-base leading-7 text-brand-ash">
              Выбираете ли вы официальное повышение квалификации, практический
              интенсив или гибкий онлайн-курс — каждая программа основана на
              алгоритмах Огороднова и сопровождается экспертами. Ниже вы
              найдёте форматы, расписания и материалы, чтобы быстро выбрать
              подходящий путь.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/interactive-lab" className="btn btn-outline px-8 py-3">
                Попробовать методику онлайн
              </Link>
              <Link href="/contacts" className="btn btn-primary px-8 py-3">
                Получить консультацию
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-dashed border-brand-navy/15 bg-white/90 p-6 shadow-soft">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-ash">
              Как выбрать формат
            </h2>
            <ul className="mt-4 space-y-4 text-sm leading-6 text-brand-ash">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-indigo" />
                <div>
                  <p className="font-semibold text-brand-navy">
                    Сформулируйте цель
                  </p>
                  <p className="text-brand-slate">
                    Повысить квалификацию, подготовиться к выступлению, запустить
                    программу в школе или обеспечить регулярную практику.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-indigo" />
                <div>
                  <p className="font-semibold text-brand-navy">
                    Уточните временные рамки
                  </p>
                  <p className="text-brand-slate">
                    От одного вечера вебинара до трёх месяцев гибридного обучения
                    — мы подберём график под ваш ресурс.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-indigo" />
                <div>
                  <p className="font-semibold text-brand-navy">
                    Свяжитесь с куратором
                  </p>
                  <p className="text-brand-slate">
                    Консультация поможет совместить несколько форматов и
                    спланировать практику на год.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner space-y-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl text-brand-navy md:text-4xl">
                Основные форматы событий
              </h2>
              <p className="max-w-3xl text-base leading-7 text-brand-ash">
                Карточки ниже помогут сориентироваться и перейти к подробностям.
                Каждый формат раскрыт отдельным блоком с программой, логистикой и
                контактами для записи.
              </p>
            </div>
            <Link
              href="#professional-development"
              className="btn btn-outline px-6 py-2"
            >
              Перейти к ближайшему старту
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {eventCategories.map((category) => (
              <Link
                key={category.slug}
                href={`#${category.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-lg"
              >
                <span className="text-xs uppercase tracking-[0.32em] text-brand-ash">
                  {category.label}
                </span>
                <h3 className="mt-4 text-2xl text-brand-navy">
                  {category.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {category.summary}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-navy">
                  К деталям
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

      {eventCategories.map((category, index) => (
        <section
          key={category.slug}
          id={category.slug}
          className={`section ${index % 2 === 0 ? "bg-neutral-50" : ""}`}
        >
          <div className="section-inner space-y-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-5 rounded-3xl bg-white p-8 shadow-soft">
                <span className="text-xs uppercase tracking-[0.3em] text-brand-ash">
                  {category.label}
                </span>
                <h2 className="text-3xl text-brand-navy md:text-[2.5rem] md:leading-tight">
                  {category.name}
                </h2>
                <p className="text-base leading-7 text-brand-ash">
                  {category.description}
                </p>
                <div className="space-y-4 rounded-2xl bg-brand-sand/60 p-6 text-sm text-brand-ash">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-ash">
                    Что даёт формат
                  </p>
                  <ul className="space-y-3">
                    {category.outcomes.map((outcome) => (
                      <li key={outcome.title} className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-indigo" />
                        <div>
                          <p className="font-semibold text-brand-navy">
                            {outcome.title}
                          </p>
                          <p>{outcome.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 rounded-2xl border border-dashed border-brand-navy/20 p-6 text-sm text-brand-slate">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-ash">
                    Организация и сроки
                  </p>
                  <ul className="space-y-2">
                    {category.details.map((item) => (
                      <li key={item.label} className="flex flex-col">
                        <span className="text-brand-navy">{item.label}</span>
                        <span>{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl bg-brand-navy px-6 py-5 text-white shadow-soft">
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                    Как присоединиться
                  </div>
                  <div className="text-sm leading-6 text-white/85">
                    {category.cta.note ||
                      "Оставьте заявку — куратор свяжется и расскажет подробности."}
                  </div>
                  <div>
                    <Link href={category.cta.href} className="btn btn-on-dark px-6 py-2">
                      {category.cta.label}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-ash">
                    Структура программы
                  </p>
                  <ul className="mt-5 space-y-4 text-sm leading-6 text-brand-ash">
                    {category.program.map((module) => (
                      <li key={module.title} className="rounded-2xl bg-neutral-50 p-4">
                        <p className="font-semibold text-brand-navy">
                          {module.title}
                        </p>
                        <p className="mt-2">{module.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-brand-indigo/20 bg-brand-indigo/5 p-6 text-sm leading-6 text-brand-ash">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-ash">
                    Подходит если
                  </p>
                  <p className="mt-3">
                    {index === 0
                      ? "Вы — педагог, психолог или руководитель хора и хотите внедрить методику системно."
                      : index === 1
                      ? "Вам нужно обновить команду и получить рабочие сценарии для занятий."
                      : index === 2
                      ? "Перед вами стоит задача быстро подготовиться к выступлению или экзамену."
                      : index === 3
                      ? "Вы хотите заниматься из дома и получать поддержку кураторов в удобном темпе."
                      : "Вам важна регулярная поддержка сообщества и живые эфиры с экспертами."}
                  </p>
                  <p className="mt-3 text-brand-slate">
                    Нужна помощь с выбором? Напишите нам — подскажем, как
                    сочетать несколько форматов и построить маршрут на год.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section pb-20">
        <div className="section-inner rounded-3xl bg-brand-navy px-10 py-14 text-white shadow-soft">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-[2.5rem] lg:leading-[1.1]">
                Построим индивидуальный маршрут под вашу задачу
              </h2>
              <p className="text-sm leading-7 text-white/80">
                Расскажите куратору, что хотите улучшить: голос, слух, сценическую
                подачу или педагогическую практику. Мы соберём программу из
                подходящих событий и подготовим расчёт времени и бюджета.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contacts" className="btn btn-primary px-8 py-3 shadow-lg">
                Записаться на консультацию
              </Link>
              <Link href="/interactive-lab" className="btn btn-on-dark px-8 py-3">
                Попробовать упражнения
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
