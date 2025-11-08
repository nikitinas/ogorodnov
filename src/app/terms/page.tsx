export const metadata = {
  title: "Пользовательское соглашение",
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="section-inner space-y-6">
        <h1 className="text-4xl text-brand-navy">Пользовательское соглашение</h1>
        <p className="text-base leading-7 text-brand-ash">
          В этой версии сайта соглашение представлено в кратком формате. Полный юридический текст будет опубликован вместе с запуском платёжного и личного кабинета.
        </p>
        <ul className="space-y-3 text-sm text-brand-slate">
          <li>
            — Используя сайт и оставляя заявку, вы подтверждаете, что предоставляете достоверные контактные данные.
          </li>
          <li>
            — Материалы защищены авторским правом. Публикация и распространение возможны только с письменного разрешения.
          </li>
          <li>
            — Доступ к интерактивной лаборатории предоставляется на условиях индивидуальной лицензии. Передача логина третьим лицам запрещена.
          </li>
          <li>
            — Мы можем обновлять содержание сайта без предварительного уведомления, сохраняя ключевые принципы методики.
          </li>
        </ul>
        <p className="text-sm text-brand-ash">
          Для получения юридических документов и оферты свяжитесь с нами по адресу{" "}
          <a className="font-semibold text-brand-navy" href="mailto:legal@ogorodnov-method.ru">
            legal@ogorodnov-method.ru
          </a>
          .
        </p>
      </div>
    </section>
  );
}
