import './_ContactsPage.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function ContactsPage() {
  return (
    <section className="contacts-page">
      <div className="container">
        <div className="contacts-page__wrap">
          <Breadcrumbs
            items={[
              { label: 'Главная', path: '/' },
              { label: 'Контакты', path: '/contacts' },
            ]}
          />
          <h1 className="contacts-page__title">Контакты</h1>
          <div className="contacts-page__content">
            <p>
              Разместите на этой странице информацию с контактами вашего
              интернет-магазина, а также краткую информацию о нем.
            </p>
            <p>
              <strong>Например:</strong>
            </p>
            <p>----</p>
            <p>
              Вы можете найти нас по адресу: г. Москва, ул. Торговая, дом 123,
              офис 456
            </p>
            <p>
              Как добраться: Сокольническая линия метро, последний вагон из
              центра, выход в сторону Казанского вокзала.
            </p>
            <p>Телефон отдела продаж: 8-495-123-45-67 (многоканальный)</p>
            <p>Телефон отдела оптовых продаж: 8-495-765-43-21</p>
            <p>Email: sales@myshop.ru</p>
            <p>
              <strong>График работы офиса и склада:</strong>
            </p>
            <div className="contacts-page__schedule">
              <p>
                <span>Понедельник</span>
                <span>с 9:00 до 21:00</span>
              </p>
              <p>
                <span>Вторник</span>
                <span>с 9:00 до 21:00</span>
              </p>
              <p>
                <span>Среда</span>
                <span>с 9:00 до 21:00</span>
              </p>
              <p>
                <span>Четверг</span>
                <span>с 9:00 до 21:00</span>
              </p>
              <p>
                <span>Пятница</span>
                <span>с 9:00 до 21:00</span>
              </p>
              <p>
                <span>Суббота</span>
                <span>с 10:00 до 20:00</span>
              </p>
              <p>
                <span>Воскресенье</span>
                <span>с 10:00 до 20:00</span>
              </p>
            </div>
            <p>Заказы через сайт принимаются круглосуточно!</p>
            <p>
              <strong>Реквизиты:</strong>
            </p>
            <p>ИП Иванов Иван Иванович</p>
            <p>ОГРНИП: 123456789012345</p>
            <p>ИНН: 123456789012</p>
            <p>КПП: 123456789</p>
          </div>
        </div>
      </div>
    </section>
  );
}
