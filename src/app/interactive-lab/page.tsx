import Link from "next/link";
import { labExperiences } from "@/data/lab";

export const metadata = {
  title: "Интерактивная лаборатория",
  description:
    "Попробуйте методику Огороднова в цифровом формате: Алгоритм-Конструктор, Ритм-Мастер и ЛадоГрад. Бесплатные демо и расширенные сценарии по подписке.",
};

export default function InteractiveLabPage() {
  return (
    <>
      <section className="section pb-0 pt-16">
        <div className="section-inner space-y-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-4 py-2 text-xs uppercase tracking-[0.32em] text-brand-ash">
                Интерактивная лаборатория
              </span>
              <h1 className="text-4xl leading-tight text-brand-navy md:text-5xl">
                Проживите методику телом: от алгоритмов до ладовых жестов
              </h1>
              <p className="text-lg leading-8 text-brand-ash">
                Лаборатория — это геймифицированные тренажёры, которые переводят
                ключевые практики методики Огороднова в цифровой опыт. Вы
                видите, слышите и чувствуете, как голос, движение и дыхание
                синхронизируются.
              </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contacts?topic=demo"
                    className="btn btn-primary px-8 py-3"
                  >
                    Получить доступ к полной версии
                  </Link>
                  <Link
                    href="#experiences"
                    className="btn btn-outline px-8 py-3"
                  >
                    Смотреть тренажёры
                  </Link>
                </div>
              <p className="text-sm text-brand-ash">
                Бесплатная демо-версия доступна всем зарегистрированным
                пользователям. Полный функционал — по подписке или в рамках
                программ обучения.
              </p>
            </div>
            <div className="rounded-3xl border border-dashed border-brand-navy/30 bg-white/90 p-8 shadow-soft">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-ash">
                Что делает лаборатория
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-brand-slate">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                  <span>
                    Показывает эталонные движения и звучание через видео, 3D и
                    аудио.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                  <span>
                    Анализирует ваш голос и жесты, выдаёт обратную связь по
                    точности.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                  <span>
                    Сохраняет прогресс в личном кабинете и подсказывает, что
                    делать дальше.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="section-inner space-y-8">
          <h2 className="text-3xl text-brand-navy md:text-4xl">
            Как это работает
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl text-brand-navy">1. Выбор тренажёра</h3>
              <p className="mt-3 text-sm leading-6 text-brand-ash">
                Подберите инструмент под свою цель: дыхание и алгоритмы, ритм и
                речь, лад и слух.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl text-brand-navy">2. Режим «Обучение»</h3>
              <p className="mt-3 text-sm leading-6 text-brand-ash">
                Наблюдайте эталон, слушайте подсказки и отрабатывайте движения
                вместе с виртуальным наставником.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl text-brand-navy">3. Режим «Практика»</h3>
              <p className="mt-3 text-sm leading-6 text-brand-ash">
                Работайте самостоятельно. Система анализирует голос, дыхание и
                жесты, выдаёт диагностику и рекомендует следующий шаг.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="section">
        <div className="section-inner space-y-8">
          <h2 className="text-3xl text-brand-navy md:text-4xl">
            Тренажёры лаборатории
          </h2>
          <div className="grid gap-6">
            {labExperiences.map((experience) => (
              <article
                key={experience.slug}
                className="grid gap-6 rounded-3xl border border-neutral-100 bg-white p-8 shadow-soft md:grid-cols-[1.1fr_0.9fr]"
              >
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.32em] text-brand-ash">
                    {experience.title}
                  </span>
                  <h3 className="text-2xl text-brand-navy">
                    {experience.subtitle}
                  </h3>
                  <p className="text-base leading-7 text-brand-ash">
                    {experience.goal}
                  </p>
                  <div className="space-y-3 text-sm text-brand-slate">
                    {experience.features.map((feature) => (
                      <div
                        key={feature.title}
                        className="rounded-2xl bg-neutral-50 p-4"
                      >
                        <h4 className="text-sm font-semibold text-brand-navy">
                          {feature.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-brand-ash">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex h-full flex-col rounded-3xl border border-dashed border-brand-navy/30 bg-brand-sand/60 p-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-ash">
                    Что анализирует система
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm text-brand-slate">
                    {experience.diagnostics.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto rounded-2xl bg-white/80 p-4 text-sm text-brand-ash shadow-inner">
                    <strong className="font-semibold text-brand-navy">
                      Полная версия:
                    </strong>{" "}
                    {experience.premiumUnlock}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-sand/70">
        <div className="section-inner space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl text-brand-navy md:text-4xl">
              Интеграция с личным кабинетом
            </h2>
            <p className="max-w-2xl text-base leading-7 text-brand-ash">
              Лаборатория — часть единой экосистемы. Все результаты
              синхронизируются с личным кабинетом и помогают выстраивать
              индивидуальные маршруты обучения.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl text-brand-navy">
                Персональные рекомендации
              </h3>
              <p className="mt-3 text-sm leading-6 text-brand-ash">
                После каждой сессии вы получаете упражнения и материалы для
                закрепления результата вне платформы.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl text-brand-navy">
                Совместная работа с педагогом
              </h3>
              <p className="mt-3 text-sm leading-6 text-brand-ash">
                Педагог видит ваши попытки и может оставить комментарии,
                настроить темп и сложность заданий.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl text-brand-navy">
                Геймификация и мотивация
              </h3>
              <p className="mt-3 text-sm leading-6 text-brand-ash">
                Баллы, уровни и бейджи поощряют регулярную практику и помогают
                удерживать интерес у детей и взрослых.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pb-20">
        <div className="section-inner rounded-3xl bg-brand-navy px-10 py-14 text-white shadow-soft">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-[2.5rem] lg:leading-[1.1]">
                Хотите демо для вашей команды или класса?
              </h2>
              <p className="text-sm leading-7 text-white/80">
                Мы проведём живую сессию, покажем, как работает лаборатория, и
                подскажем, как встроить её в образовательный процесс или
                корпоративный тренинг.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contacts?topic=demo"
                  className="btn btn-primary px-8 py-3 shadow-lg"
              >
                Запросить демо
              </Link>
              <Link
                href="/contacts?topic=partners"
                  className="btn btn-on-dark px-8 py-3"
              >
                Стать партнёром
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
