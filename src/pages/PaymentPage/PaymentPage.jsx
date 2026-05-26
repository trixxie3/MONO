import './_PaymentPage.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

export default function PaymentPage() {
  return (
    <section className="payment-page">
      <div className="container">
        <div className="payment-page__wrap">
          <Breadcrumbs
            items={[
              { label: 'Главная', path: '/' },
              { label: 'Оплата', path: '/payment' },
            ]}
          />
          <h1 className="payment-page__title">Оплата</h1>
          <div className="payment-page__content">
            <p>
              Разместите на этой странице информацию с описанием способов
              оплаты, которые использует ваш интернет-магазин.
            </p>
            <p>
              <strong>Например:</strong>
            </p>
            <p>Вы можете оплатить заказ:</p>
            <ol>
              <li>
                Наличными курьеру или в пункте выдачи при получении заказа
              </li>
              <li>
                Банковской картой Visa, Mastercard или МИР через сайт при
                оформлении заказа
              </li>
              <li>Наложенным платежом при заказе с доставкой Почтой России</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
