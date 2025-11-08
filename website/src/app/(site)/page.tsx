import Link from "next/link";
import { getDocBySlug, getDocsTree } from "@/lib/docs";

const createPreview = (content: string, maxLength = 320) => {
  const clean = content.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) {
    return clean;
  }

  const truncated = clean.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, Math.max(0, lastSpace))}…`;
};

export default async function HomePage() {
  const tree = await getDocsTree();
  const [methodIntro, appsOverview, websiteStructure] = await Promise.all([
    getDocBySlug(["method", "intro"]),
    getDocBySlug(["apps", "general"]),
    getDocBySlug(["website", "structure"]),
  ]);

  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-400 to-sky-400 p-8 text-white shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-100">
          Добро пожаловать
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">
          Методика комплексного музыкально-певческого воспитания
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-indigo-50">
          Цифровой портал объединяет оригинальные материалы Дмитрия Ерофеевича
          Огороднова: методические основы, сценарии упражнений, концепции
          приложений и структуру веб-платформы. Пользуйтесь навигацией слева,
          чтобы изучать документы в удобном формате.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          <Link
            href="/method/intro"
            className="rounded-full bg-white px-4 py-2 text-indigo-600 transition-colors hover:bg-indigo-50"
          >
            Начать с методики
          </Link>
          <Link
            href="/apps/general"
            className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10"
          >
            Посмотреть приложения
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 shadow-sm">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
              Методика
            </p>
            <h2 className="text-2xl font-semibold text-zinc-900">
              Основы подхода Огороднова
            </h2>
            <p className="text-sm leading-6 text-zinc-600">
              {methodIntro
                ? createPreview(methodIntro.content)
                : "Погрузитесь в принципы комплексного музыкально-певческого воспитания, объединяющего слух, голос, движение и восприятие."}
            </p>
          </div>
          <Link
            href="/method/intro"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500"
          >
            Читать обзор
            <span aria-hidden>→</span>
          </Link>
        </article>

        <article className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 shadow-sm">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
              Интерактивные приложения
            </p>
            <h2 className="text-2xl font-semibold text-zinc-900">
              Цифровые материалы и тренажёры
            </h2>
            <p className="text-sm leading-6 text-zinc-600">
              {appsOverview
                ? createPreview(appsOverview.content)
                : "Раздел содержит описания цифровых приложений, дополняющих занятия и раскрывающих потенциал методики в современном формате."}
            </p>
          </div>
          <Link
            href="/apps/general"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500"
          >
            Перейти к приложениям
            <span aria-hidden>→</span>
          </Link>
        </article>

        <article className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 shadow-sm">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
              Веб-платформа
            </p>
            <h2 className="text-2xl font-semibold text-zinc-900">
              Структура цифрового продукта
            </h2>
            <p className="text-sm leading-6 text-zinc-600">
              {websiteStructure
                ? createPreview(websiteStructure.content)
                : "Исследуйте структуру сайта, сценарии пользовательских путей и варианты монетизации, сопровождающие методику."}
            </p>
          </div>
          <Link
            href="/website/structure"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500"
          >
            Смотреть структуру
            <span aria-hidden>→</span>
          </Link>
        </article>
      </section>

      <section className="rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/60 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-indigo-900">
          Навигация по разделам
        </h2>
        <p className="mt-2 text-sm text-indigo-700">
          В структуре контента уже сгруппированы все материалы методики. Ниже
          — краткий обзор доступных разделов.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {tree.map((node) => {
            if (node.type !== "folder") {
              return null;
            }

            const docChildren = node.children.filter(
              (child) => child.type === "doc",
            );
            const subsectionCount = node.children.filter(
              (child) => child.type === "folder",
            ).length;
            const primaryDoc = docChildren[0];

            return (
              <div
                key={node.slug.join("/")}
                className="rounded-xl bg-white/70 p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-indigo-600">
                  {node.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-500">
                  {docChildren.length} документов, {subsectionCount} подразделов
                </p>
                <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                  {docChildren.slice(0, 3).map((child) => (
                    <li key={child.slug.join("/")}>
                      <Link
                        href={`/${child.slug.join("/")}`}
                        className="transition-colors hover:text-indigo-600"
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                  {docChildren.length > 3 && primaryDoc && (
                    <li>
                      <Link
                        href={`/${primaryDoc.slug.join("/")}`}
                        className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-500"
                      >
                        Открыть раздел →
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

