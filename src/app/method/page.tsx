import Link from "next/link";
import {
  methodApplications,
  methodPillars,
  methodPrinciples,
  methodResources,
} from "@/data/method";

export const metadata = {
  title: "О методике",
  description:
    "Методика комплексного музыкально-певческого воспитания Д.Е. Огороднова: философия, научные основы, практические столпы и области применения.",
};

export default function MethodPage() {
  return (
    <>
      <section className="section pb-0 pt-16">
        <div className="section-inner space-y-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-4 py-2 text-xs uppercase tracking-[0.32em] text-brand-ash">
                Методика Огороднова
              </span>
              <h1 className="text-4xl leading-tight text-brand-navy md:text-5xl">
                Комплексная система, которая синхронизирует голос, движение и мышление
              </h1>
              <p className="text-lg leading-8 text-brand-ash">
                Методика Д.Е. Огороднова выросла из практики работы с детскими хорами,
                но сегодня применяется педагогами, музыкантами, психологами, лидерами
                и артистами. Её сила — в точной регламентации движений, дыхания и звука.
              </p>
              <p className="text-base leading-7 text-brand-slate">
                Мы бережно оцифровали наследие, сохранив научную базу и философию,
                и дополнили её современными сервисами, интерактивами и обучающими программами.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/interactive-lab"
                  className="inline-flex items-center justify-center rounded-full bg-brand-coral px-7 py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
                >
                  Посмотреть лабораторию
                </Link>
                <Link
                  href="/contacts?topic=method"
                  className="inline-flex items-center justify-center rounded-full border border-brand-navy px-7 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
                >
                  Получить консультацию
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-dashed border-brand-navy/30 bg-white/90 p-8 shadow-soft">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-ash">
                Базовые принципы
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-brand-slate">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                  <span>Комплексность: дыхание, слух, ритм и движение работают вместе.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                  <span>Малые шаги и качество выполнения вместо форсирования результата.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                  <span>Игровая форма: голос настраивается через движение, жест и эмоцию.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="section-inner space-y-8">
          <h2 className="text-3xl text-brand-navy md:text-4xl">Три столпа методики</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {methodPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft"
              >
                <h3 className="text-xl text-brand-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">{pillar.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-brand-slate">
                  {pillar.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className="section">
        <div className="section-inner space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl text-brand-navy md:text-4xl">
                Философия и научная основа
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-brand-ash">
                Методика подтверждена исследованиями о связи руки, речи и мышления.
                Она воспитывает не только голос, но и личность — через чувство ритма,
                эмоциональный интеллект и дисциплину.
              </p>
            </div>
            <Link
              href="#resources"
              className="inline-flex items-center justify-center rounded-full border border-brand-navy px-6 py-2 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
            >
              Источники и материалы
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {methodPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl text-brand-navy">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="section bg-brand-sand/70">
        <div className="section-inner space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl text-brand-navy md:text-4xl">Где методика применяется</h2>
            <p className="max-w-2xl text-base leading-7 text-brand-ash">
              От детских студий до корпоративных программ для руководителей — методика
              адаптируется под любую аудиторию, потому что базируется на физиологии.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {methodApplications.map((app) => (
              <div
                key={app.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft"
              >
                <h3 className="text-xl text-brand-navy">{app.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="section">
        <div className="section-inner space-y-8">
          <h2 className="text-3xl text-brand-navy md:text-4xl">Педагог как дирижёр процесса</h2>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-4 rounded-3xl bg-neutral-50 p-8">
              <h3 className="text-xl text-brand-navy">Дирижирование собой и классом</h3>
              <p className="text-base leading-7 text-brand-ash">
                Педагог в методике — не диктатор, а организатор процесса.
                Он сам точнейшим образом выполняет жесты, дыхательные алгоритмы,
                ведёт ансамбль и создаёт эмоциональный фон урока. Это требует внутренней
                дисциплины, но даёт удивительную отдачу: класс начинает звучать как единое целое.
              </p>
              <p className="text-base leading-7 text-brand-ash">
                Наша цифровая платформа помогает педагогам отслеживать качество исполнения,
                проводить самодиагностику и получать супервизию от экспертов методики.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-dashed border-brand-navy/30 bg-white/90 p-8 shadow-soft">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-ash">
                Что мы предлагаем педагогам
              </h3>
              <ul className="space-y-3 text-sm text-brand-slate">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                  <span>Сертификационные программы с практикумами и супервизией.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                  <span>Методические комплекты: алгоритмы, аудио, планы уроков.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                  <span>Онлайн-комьюнити для обмена опытом и совместных проектов.</span>
                </li>
              </ul>
              <Link
                href="/contacts?topic=teachers"
                className="inline-flex items-center justify-center rounded-full border border-brand-navy px-6 py-2 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
              >
                Присоединиться к программе
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="section bg-neutral-50">
        <div className="section-inner space-y-8">
          <h2 className="text-3xl text-brand-navy md:text-4xl">Материалы и источники</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {methodResources.map((group) => (
              <div
                key={group.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft"
              >
                <h3 className="text-xl text-brand-navy">{group.title}</h3>
                <ul className="mt-3 space-y-3 text-sm text-brand-ash">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-dashed border-brand-navy/30 bg-white/90 p-8 text-sm text-brand-slate shadow-inner">
            <strong className="font-semibold text-brand-navy">
              PDF-архив и дополнительные материалы:
            </strong>{" "}
            доступ к оригинальным изданиям, схемам и исследовательским статьям открыт
            для участников программы и подписчиков лаборатории. Оставьте заявку, чтобы получить набор материалов.
          </div>
          <Link
            href="/contacts?topic=materials"
            className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
          >
            Получить комплект материалов
          </Link>
        </div>
      </section>

      <section className="section pb-20">
        <div className="section-inner rounded-3xl bg-brand-navy px-10 py-14 text-white shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-[2.4rem] lg:leading-[1.15]">
                Хотите внедрить методику и нужна поддержка?
              </h2>
              <p className="text-sm leading-7 text-white/80">
                Мы поможем адаптировать программу под ваш сад, школу, студию, бизнес или
                терапевтическую практику. Совместно разработаем маршрут и обучим команду.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-full bg-brand-coral px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-105"
              >
                Назначить встречу
              </Link>
              <Link
                href="/interactive-lab"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Попробовать лабораторию
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
