import Link from "next/link";
import { audienceCards } from "@/data/home";

export const metadata = {
  title: "Контакты",
  description:
    "Связаться с командой методики Огороднова: подобрать программу, запросить демо лаборатории, получить материалы и записаться на диагностику.",
};

const contactChannels = [
  {
    title: "Общие вопросы и диагностика",
    email: "hello@ogorodnov-method.ru",
    description:
      "Выбор программы, бесплатный тест, консультация по старту и входу в лабораторию.",
  },
  {
    title: "Партнёрства и медиа",
    email: "media@ogorodnov-method.ru",
    description:
      "Интервью, публикации, совместные проекты, интеграция методики в мероприятия.",
  },
  {
    title: "Поддержка пользователей",
    email: "support@ogorodnov-method.ru",
    description:
      "Техническая помощь по личному кабинету, оплаты, восстановление доступа, вопросы по подписке.",
  },
];

export default function ContactsPage() {
  return (
    <>
      <section className="section pb-0 pt-16">
        <div className="section-inner space-y-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-4 py-2 text-xs uppercase tracking-[0.32em] text-brand-ash">
                  Контакты
                </span>
                <h1 className="text-4xl leading-tight text-brand-navy md:text-5xl">
                  Давайте настроим ваш голос и программу обучения
                </h1>
                <p className="text-lg leading-8 text-brand-ash">
                  Расскажите, для каких целей вам нужна методика, — и мы подберём
                  формат: онлайн, офлайн, индивидуально или для команды. Ответим в
                  течение одного рабочего дня.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:hello@ogorodnov-method.ru"
                    className="btn btn-primary px-7 py-3"
                  >
                    Написать на почту
                  </a>
                  <Link href="/interactive-lab" className="btn btn-outline px-7 py-3">
                    Попробовать интерактивы
                  </Link>
                </div>
              </div>
            <div className="rounded-3xl border border-dashed border-brand-navy/30 bg-white/90 p-8 shadow-soft">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-ash">
                Время работы
              </h2>
              <p className="mt-3 text-sm leading-6 text-brand-ash">
                Пн–Пт: 10:00–19:00 (МСК). Суббота: по записи. Воскресенье —
                выходной.
              </p>
              <p className="mt-4 text-sm leading-6 text-brand-ash">
                Онлайн-встречи проводим в Zoom, Teams или другой платформе по
                вашему выбору.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50" id="support">
        <div className="section-inner space-y-8">
          <h2 className="text-3xl text-brand-navy md:text-4xl">Кому писать</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {contactChannels.map((channel) => (
              <div
                key={channel.title}
                className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft"
              >
                <h3 className="text-xl text-brand-navy">{channel.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ash">
                  {channel.description}
                </p>
                <a
                  href={`mailto:${channel.email}`}
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-brand-navy"
                >
                  {channel.email}
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
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="form">
        <div className="section-inner grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h2 className="text-3xl text-brand-navy md:text-4xl">
              Заполните форму — мы вернёмся в течение рабочего дня
            </h2>
            <p className="text-base leading-7 text-brand-ash">
              Пока что заявка отправляется на почту. Функционал личного кабинета
              с чат-ботом в разработке.
            </p>
              <form
                className="space-y-5"
                action="mailto:hello@ogorodnov-method.ru"
                method="post"
                encType="text/plain"
              >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-brand-slate">
                  Имя
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-brand-slate shadow-inner focus:border-brand-navy focus:outline-none"
                  />
                </label>
                <label className="text-sm font-semibold text-brand-slate">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-brand-slate shadow-inner focus:border-brand-navy focus:outline-none"
                  />
                </label>
              </div>
              <label className="text-sm font-semibold text-brand-slate">
                Выберите сегмент
                <select
                  name="segment"
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-brand-slate shadow-inner focus:border-brand-navy focus:outline-none"
                >
                  {audienceCards.map((segment) => (
                    <option key={segment.slug} value={segment.name}>
                      {segment.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-semibold text-brand-slate">
                Запрос
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Опишите задачу, уровень, сроки или интерес к лаборатории"
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-brand-slate shadow-inner focus:border-brand-navy focus:outline-none"
                ></textarea>
              </label>
                <button
                  type="submit"
                  className="btn btn-primary px-7 py-3"
                >
                Отправить заявку
              </button>
              <p className="text-xs leading-6 text-brand-ash">
                Нажимая на кнопку, вы соглашаетесь с{" "}
                <Link href="/privacy" className="underline">
                  политикой конфиденциальности
                </Link>
                .
              </p>
            </form>
          </div>
          <div className="rounded-3xl border border-dashed border-brand-navy/30 bg-white/90 p-8 shadow-soft">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-ash">
              Карта сертифицированных педагогов
            </h3>
            <p className="mt-4 text-sm leading-6 text-brand-ash">
              Мы формируем географию специалистов, работающих по методике.
              Полная интерактивная карта появится в следующем релизе.
            </p>
            <div className="mt-6 space-y-4 text-sm text-brand-slate">
              <div className="rounded-2xl bg-neutral-50 p-4">
                <h4 className="text-sm font-semibold text-brand-navy">
                  Москва и область
                </h4>
                <p className="mt-2 text-sm text-brand-ash">
                  12 студий, 3 хоровые школы, 8 частных специалистов.
                </p>
              </div>
              <div className="rounded-2xl bg-neutral-50 p-4">
                <h4 className="text-sm font-semibold text-brand-navy">
                  Санкт-Петербург
                </h4>
                <p className="mt-2 text-sm text-brand-ash">
                  Центр методики, 5 студий раннего развития, лаборатория в
                  педагогическом университете.
                </p>
              </div>
              <div className="rounded-2xl bg-neutral-50 p-4">
                <h4 className="text-sm font-semibold text-brand-navy">
                  Онлайн
                </h4>
                <p className="mt-2 text-sm text-brand-ash">
                  Сертифицированные педагоги и коучи для индивидуальных занятий
                  по всему миру.
                </p>
              </div>
            </div>
            <Link
              href="/contacts?topic=partners"
              className="mt-6 btn btn-outline px-6 py-2"
            >
              Стать партнёрской студией
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-brand-sand/70" id="partners">
        <div className="section-inner space-y-8">
          <h2 className="text-3xl text-brand-navy md:text-4xl">
            Для партнёров и медиа
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl text-brand-navy">Медиа-кит</h3>
              <p className="mt-3 text-sm leading-6 text-brand-ash">
                Логотипы, фото, биография Д.Е. Огороднова, факт-листы и описания
                тренажёров.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl text-brand-navy">Партнёрские программы</h3>
              <p className="mt-3 text-sm leading-6 text-brand-ash">
                Совместные курсы, white-label решения для школ и компаний,
                франчайзинговые проекты.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h3 className="text-xl text-brand-navy">Лекции и выступления</h3>
              <p className="mt-3 text-sm leading-6 text-brand-ash">
                Выступления для конференций, фестивалей, корпоративных
                мероприятий. Подготовим формат под аудиторию.
              </p>
            </div>
          </div>
          <Link
            href="mailto:media@ogorodnov-method.ru"
              className="btn btn-primary px-8 py-3"
          >
            Запросить медиа-кит
          </Link>
        </div>
      </section>

      <section className="section pb-20">
        <div className="section-inner rounded-3xl bg-brand-navy px-10 py-14 text-white shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-[2.4rem] lg:leading-[1.15]">
                Запишите голос уже сегодня
              </h2>
              <p className="text-sm leading-7 text-white/80">
                Выберите сегмент и напишите пару предложений о себе — мы
                подберём диагноста, педагога или наставника на ближайшие даты.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:hello@ogorodnov-method.ru"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-navy shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              >
                hello@ogorodnov-method.ru
              </a>
              <Link
                href="/interactive-lab"
                className="btn btn-on-dark px-8 py-3"
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
