import Link from "next/link";
import { audienceCards } from "@/data/home";

const plannedPosts = [
  {
    title:
      "Как ладо-вокальные жесты помогают «непоющим» детям обрести точный слух",
    segment: "Родители и педагоги",
    summary:
      "Разбираем шаги работы с жестами, делимся видео-демонстрациями и чек-листом домашних упражнений.",
    eta: "январь 2026",
  },
  {
    title: "Алгоритм уверенности: дыхание лидера перед переговорами",
    segment: "Руководители",
    summary:
      "Комплекс упражнений перед важным выступлением. Рассказываем, как использовать «цветочки» и антонимы в бизнес-контексте.",
    eta: "декабрь 2025",
  },
  {
    title: "Голос как контейнер: методика Огороднова в практике психолога",
    segment: "Терапевты",
    summary:
      "Опыт кризисных психологов, упражнения для саморегуляции и сценарии сопровождения клиентов.",
    eta: "ноябрь 2025",
  },
];

export const metadata = {
  title: "Блог и медиа",
  description:
    "Статьи, истории успеха, вебинары и медиа-ресурсы о методике Огороднова. Контент по целевым аудиториям и тематическим направлениям.",
};

export default function BlogPage() {
  return (
    <>
      <section className="section pb-0 pt-16">
        <div className="section-inner space-y-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-4 py-2 text-xs uppercase tracking-[0.32em] text-brand-ash">
                Блог и медиа
              </span>
              <h1 className="text-4xl leading-tight text-brand-navy md:text-5xl">
                Истории, исследования и практики, которые вдохновляют звучать
                свободно
              </h1>
              <p className="text-lg leading-8 text-brand-ash">
                Мы собираем опыт педагогов, музыкантов, лидеров, терапевтов и
                родителей, которые внедряют методику. Материалы автоматически
                тегируются по сегментам и целям, чтобы вы мгновенно находили
                нужное.
              </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contacts?topic=media"
                    className="btn btn-primary px-7 py-3"
                  >
                    Подписаться на анонсы
                  </Link>
                  <Link
                    href="/interactive-lab"
                    className="btn btn-outline px-7 py-3"
                  >
                    Попробовать интерактивы
                  </Link>
                </div>
            </div>
            <div className="rounded-3xl border border-dashed border-brand-navy/30 bg-white/90 p-8 shadow-soft">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-ash">
                Форматы контента
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-brand-slate">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                  <span>
                    Глубокие статьи с видео и чек-листами по каждому сегменту.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                  <span>
                    Вебинары и мастер-классы в записи: дыхание, ритм, лад и
                    сценическое мастерство.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-coral" />
                  <span>
                    Истории успеха с аудио- и видео-фрагментами «до и после».
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
            Темы по аудиториям
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {audienceCards.map((segment) => (
              <div
                key={segment.slug}
                className="rounded-3xl bg-white p-6 shadow-soft"
              >
                <span className="text-xs uppercase tracking-[0.32em] text-brand-ash">
                  {segment.heroLabel}
                </span>
                <h3 className="mt-4 text-xl text-brand-navy">{segment.name}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {segment.description}
                </p>
                <Link
                  href={`/audiences/${segment.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy"
                >
                  Сборник материалов
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
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="planned">
        <div className="section-inner space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 id="planned" className="text-3xl text-brand-navy md:text-4xl">
                Редакционный план
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-brand-ash">
                Мы готовим лонгриды и интервью на основе материалов из архива и
                текущих проектов. Вот несколько ближайших публикаций.
              </p>
            </div>
            <Link
              href="/contacts?topic=suggest"
              className="btn btn-outline px-6 py-2"
            >
              Предложить тему
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {plannedPosts.map((post) => (
              <div
                key={post.title}
                className="flex h-full flex-col rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm"
              >
                <span className="text-xs uppercase tracking-[0.28em] text-brand-ash">
                  {post.segment}
                </span>
                <h3 className="mt-4 text-xl text-brand-navy">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {post.summary}
                </p>
                <div className="mt-auto rounded-2xl bg-brand-sand/70 p-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-ash">
                  Выходит: {post.eta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-sand/70">
        <div className="section-inner space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl text-brand-navy md:text-4xl">
              Вебинары и медиа-центр
            </h2>
            <p className="max-w-2xl text-base leading-7 text-brand-ash">
              Один раз в месяц мы проводим открытый вебинар: показываем
              упражнения, отвечаем на вопросы и разбираем сложные кейсы. Записи
              доступны в медиа-центре.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl text-brand-navy">Живые практикумы</h3>
              <p className="mt-3 text-sm leading-6 text-brand-ash">
                Онлайн-занятия с педагогами методики: дыхание перед
                выступлением, ладовые диктанты, художественное тактирование.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl text-brand-navy">
                Кейс-стори формата «до/после»
              </h3>
              <p className="mt-3 text-sm leading-6 text-brand-ash">
                Аудио и видео, где видно прогресс учеников, руководителей и
                артистов после 4–6 недель практики.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl text-brand-navy">
                Библиотека PDF и карточек
              </h3>
              <p className="mt-3 text-sm leading-6 text-brand-ash">
                Скачайте алгоритмы, планы уроков и микро-практики. Особенно
                полезно педагогам и психологам.
              </p>
            </div>
          </div>
          <Link
            href="/contacts?topic=webinars"
              className="btn btn-primary px-8 py-3"
          >
            Узнать расписание вебинаров
          </Link>
        </div>
      </section>

      <section className="section pb-20">
        <div className="section-inner rounded-3xl bg-brand-navy px-10 py-14 text-white shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-[2.4rem] lg:leading-[1.15]">
                Поделитесь своей историей
              </h2>
              <p className="text-sm leading-7 text-white/80">
                Ваш опыт внедрения методики — ценность для сообщества. Заполните
                форму, и мы подготовим совместный материал: текст, подкаст или
                видео.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contacts?topic=story"
                  className="btn btn-primary px-8 py-3 shadow-lg"
              >
                Рассказать историю
              </Link>
              <Link
                href="/interactive-lab"
                  className="btn btn-on-dark px-8 py-3"
              >
                Попробовать методику
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
