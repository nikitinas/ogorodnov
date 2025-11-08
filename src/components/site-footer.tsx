import Link from "next/link";

const footerNav = [
  {
    title: "Методика",
    links: [
      { label: "О системе", href: "/method" },
      { label: "История и исследования", href: "/method#research" },
      { label: "Глоссарий", href: "/method#glossary" },
    ],
  },
  {
    title: "Практика",
    links: [
      { label: "Интерактивная лаборатория", href: "/interactive-lab" },
      { label: "Аудитории", href: "/#audiences" },
      { label: "Кейсы и истории", href: "/blog" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { label: "Связаться с нами", href: "/contacts" },
      { label: "Личный кабинет", href: "#" },
      { label: "Поддержка", href: "/contacts#support" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer
      className="mt-20 bg-brand-navy text-white"
      style={{ backgroundColor: "#1f3c88" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-indigo text-white shadow-soft">
                <span className="text-xl font-semibold leading-none">𝄞</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold">
                  Методика Огороднова
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-white/85">
                  Настройка голоса. Настройка жизни.
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/90">
              Комплексная система музыкально-певческого воспитания, которая
              объединяет голос, движение и эмоцию. Мы помогли тысячам учеников,
              педагогов и лидеров услышать и раскрыть свой подлинный голос.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-white/85">
              <span className="rounded-full border border-white/30 px-3 py-1 uppercase tracking-[0.25em]">
                PWA-ready
              </span>
              <span className="rounded-full border border-white/30 px-3 py-1 uppercase tracking-[0.25em]">
                Основано на исследованиях
              </span>
              <span className="rounded-full border border-white/30 px-3 py-1 uppercase tracking-[0.25em]">
                Комьюнити педагогов
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerNav.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/90">
                  {column.title}
                </h3>
                <ul className="space-y-3 text-sm text-white/85">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition hover:text-brand-sand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8 text-xs text-white/90">
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Методика Огороднова. Все права защищены.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="transition hover:text-brand-sand">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="transition hover:text-brand-sand">
                Пользовательское соглашение
              </Link>
              <Link href="/contacts#partners" className="transition hover:text-brand-sand">
                Партнеры и медиа
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
