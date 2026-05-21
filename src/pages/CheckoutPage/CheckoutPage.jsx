import './_CheckoutPage.scss';

const getCartItems = () => JSON.parse(localStorage.getItem('cart')) || [];

const getPriceNumber = (price) => {
  const priceNumber = parseFloat(String(price).replace(/\s/g, ''));

  return Number.isNaN(priceNumber) ? 0 : priceNumber;
};

export default function CheckoutPage({ currentUser, onLogout }) {
  const cartItems = getCartItems();
  const deliveryPrice = 0;
  const productsPrice = cartItems.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
    0
  );
  const totalPrice = productsPrice + deliveryPrice;
  const hasPrice = productsPrice > 0;
  const productsPriceText = hasPrice ? `${productsPrice} ₽` : '0 ₽';
  const totalPriceText = hasPrice ? `${totalPrice} ₽` : '0 ₽';

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Заказ оформлен');
  };

  return (
    <section className="checkout">
      <div className="container">
        <div className="checkout__content">
          <form className="checkout__form" onSubmit={handleSubmit}>
            <h1 className="checkout__title">Оформление заказа</h1>

            {currentUser && (
              <div className="checkout__user">
                <h2 className="checkout__user-title">
                  Вы авторизовались как {currentUser.name}
                </h2>
                <p className="checkout__user-text">{currentUser.phone}</p>
                <p className="checkout__user-text">{currentUser.email}</p>
                <button
                  className="checkout__logout"
                  type="button"
                  onClick={onLogout}
                >
                  Выход
                </button>
              </div>
            )}

            <div className="checkout__block">
              <h2 className="checkout__subtitle">Доставка</h2>

              <label className="checkout__field">
                <p className="checkout__label">
                  Населенный пункт<span className="checkout__required">*</span>
                </p>
                <input
                  className="checkout__input"
                  type="text"
                  defaultValue={
                    currentUser?.deliveryAddress?.city || 'г Санкт-Петербург'
                  }
                  required
                />
              </label>

              <label className="checkout__radio">
                <input
                  className="checkout__radio-input"
                  type="radio"
                  name="delivery"
                  defaultChecked
                />
                <span className="checkout__radio-circle"></span>
                <span>
                  <span className="checkout__radio-title">Самовывоз</span>
                  <span className="checkout__radio-text">На пункте выдачи</span>
                </span>
                <strong className="checkout__radio-price">+ 0 ₽</strong>
              </label>

              <label className="checkout__radio">
                <input
                  className="checkout__radio-input"
                  type="radio"
                  name="delivery"
                />
                <span className="checkout__radio-circle"></span>
                <span>
                  <span className="checkout__radio-title">Курьером</span>
                  <span className="checkout__radio-text">Доставка курьером</span>
                </span>
                <strong className="checkout__radio-price">+ 300 ₽</strong>
              </label>
            </div>

            <label className="checkout__field">
              <p className="checkout__label">Комментарии к заказу</p>
              <textarea className="checkout__textarea"></textarea>
            </label>

            <div className="checkout__block">
              <h2 className="checkout__subtitle">Получатель</h2>

              <label className="checkout__field">
                <p className="checkout__label">
                  Контактное лицо (ФИО)
                  <span className="checkout__required">*</span>
                </p>
                <input
                  className="checkout__input"
                  type="text"
                  defaultValue={currentUser?.name || ''}
                  required
                />
              </label>

              <label className="checkout__field">
                <p className="checkout__label">
                  Контактный телефон
                  <span className="checkout__required">*</span>
                </p>
                <input
                  className="checkout__input"
                  type="text"
                  defaultValue={currentUser?.phone || ''}
                  required
                />
              </label>

              <p className="checkout__label">
                Способ оплаты<span className="checkout__required">*</span>
              </p>

              <label className="checkout__radio checkout__radio--payment">
                <input
                  className="checkout__radio-input"
                  type="radio"
                  name="payment"
                  defaultChecked
                />
                <span className="checkout__radio-circle"></span>
                <span>
                  <span className="checkout__radio-title">
                    Наличными курьеру
                  </span>
                  <span className="checkout__radio-text">
                    Наличными курьеру
                  </span>
                </span>
              </label>
            </div>

            <button className="checkout__submit" type="submit">
              Подтвердить заказ
            </button>
          </form>

          <aside className="checkout__summary">
            <ul className="checkout__products">
              {cartItems.map((item) => (
                <li className="checkout__product" key={item.id}>
                  <img
                    className="checkout__product-image"
                    src={item.image}
                    alt={item.title}
                  />
                  <p className="checkout__product-title">
                    {item.title} (большой / белый)
                  </p>
                  <p className="checkout__product-price">
                    {item.quantity} x <strong>{item.price}</strong>
                  </p>
                </li>
              ))}
            </ul>

            <div className="checkout__summary-info">
              <p className="checkout__summary-row">
                <span>Сумма по товарам</span>
                <strong>{productsPriceText}</strong>
              </p>
              <p className="checkout__summary-row">
                <span>Стоимость доставки</span>
                <strong>{deliveryPrice} ₽</strong>
              </p>
            </div>

            <p className="checkout__summary-total">
              <span>Итого:</span>
              <strong>{totalPriceText}</strong>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
