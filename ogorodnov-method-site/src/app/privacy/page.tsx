export const metadata = {
  title: "Политика конфиденциальности",
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="section-inner space-y-6">
        <h1 className="text-4xl text-brand-navy">Политика конфиденциальности</h1>
        <p className="text-base leading-7 text-brand-ash">
          Полная версия документа находится в подготовке. На данном этапе мы собираем только данные,
          которые вы передаёте добровольно через формы обратной связи или по электронной почте.
        </p>
        <ul className="space-y-3 text-sm text-brand-slate">
          <li>
            — Контактные данные используются исключительно для ответа на запросы и не передаются третьим лицам.
          </li>
          <li>
            — При желании вы можете запросить удаление ваших данных, написав на{" "}
            <a className="font-semibold text-brand-navy" href="mailto:support@ogorodnov-method.ru">
              support@ogorodnov-method.ru
            </a>
            .
          </li>
          <li>
            — При запуске личного кабинета появится расширенная политика с указанием используемых сервисов и периодов хранения.
          </li>
        </ul>
        <p className="text-sm text-brand-ash">
          По всем вопросам, связанным с персональными данными, пишите на{" "}
          <a className="font-semibold text-brand-navy" href="mailto:privacy@ogorodnov-method.ru">
            privacy@ogorodnov-method.ru
          </a>
          .
        </p>
      </div>
    </section>
  );
}
