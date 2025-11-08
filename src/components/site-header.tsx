"use client";

import Link from "next/link";
import { useState } from "react";
import { audienceCards } from "@/data/home";

const mainNav = [
  { label: "О методике", href: "/method" },
  { label: "События", href: "/events" },
  { label: "Интерактивная лаборатория", href: "/interactive-lab" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/contacts" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-10 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-3 text-brand-navy transition hover:opacity-80"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-white shadow-soft">
            <span className="text-xl font-semibold leading-none">𝄞</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold leading-tight">
              Методика Огороднова
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-ash lg:flex">
          <Link
            href="/#audiences"
            className="whitespace-nowrap rounded-full px-4 py-2 transition-colors duration-200 hover:bg-neutral-100 hover:text-brand-navy"
          >
            Для кого
          </Link>
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-4 py-2 transition-colors duration-200 hover:bg-neutral-100 hover:text-brand-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-neutral-200 p-2 text-brand-navy lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Открыть меню</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-neutral-100 bg-white px-6 pb-8 pt-4 shadow-md lg:hidden"
        >
          <div className="flex flex-col gap-3">
            <Link
              href="/#audiences"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-neutral-50 px-4 py-3 text-sm font-semibold text-brand-navy shadow-inner"
            >
              Для кого
            </Link>
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-neutral-50 px-4 py-3 text-sm font-semibold text-brand-ash shadow-inner"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 grid gap-3">
            {audienceCards.map((segment) => (
              <Link
                key={segment.slug}
                href={`/audiences/${segment.slug}`}
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-neutral-100 px-4 py-3 text-sm font-medium text-brand-slate shadow-sm transition hover:border-brand-navy/40 hover:bg-brand-sand/40"
              >
                <div className="text-xs uppercase tracking-[0.28em] text-brand-ash">
                  {segment.heroLabel}
                </div>
                <div className="font-serif text-base font-semibold text-brand-navy">
                  {segment.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
