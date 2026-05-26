import './_DeliveryPage.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function DeliveryPage() {
  return (
    <section className="delivery-page">
      <div className="container">
        <div className="delivery-page__wrap">
          <Breadcrumbs
            items={[
              { label: 'Главная', path: '/' },
              { label: 'Доставка', path: '/delivery' },
            ]}
          />
          <h1 className="delivery-page__title">Доставка</h1>
          <div className="delivery-page__content">
            <p>
              Разместите на этой странице информацию с описанием способов
              доставки, которые использует ваш интернет-магазин.
            </p>
            <p>
              <strong>Например:</strong>
            </p>
            <p>
              Наш интернет-магазин осуществляет доставку по Москве и регионам
              России:
            </p>
            <ol>
              <li>Курьерская доставка по Москве - 200 руб.</li>
              <li>
                Самовывоз из нашего пункта выдачи или розничного магазина -
                бесплатно!
              </li>
              <li>
                Почтовая доставка по России - от 150 руб. в зависимости от
                адреса доставки.
              </li>
            </ol>
            <p>Сроки доставки:</p>
            <ol>
              <li>Курьерская доставка по Москве - на следующий день</li>
              <li>Самовывоз - на следующий день</li>
              <li>
                Почтовая доставка по России - от 3 до 14 дней в зависимости от
                региона
              </li>
            </ol>
            <p>
              <strong>
                Доставка осуществляется бесплатно при сумме заказа более 7000
                рублей.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
