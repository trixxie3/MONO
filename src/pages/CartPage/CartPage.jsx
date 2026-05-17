import { useState } from 'react';
import { Link } from 'react-router-dom';
import './_CartPage.scss';

const getCartItems = () => JSON.parse(localStorage.getItem('cart')) || [];

const getPriceNumber = (price) => {
  const normalizedPrice = String(price).replace(/\s/g, '').replace(',', '.');
  const priceNumber = parseFloat(normalizedPrice);

  return Number.isNaN(priceNumber) ? null : priceNumber;
};

const getProductTotal = (product) => {
  const priceNumber = getPriceNumber(product.price);

  return priceNumber !== null
    ? `${priceNumber * product.quantity} ₽`
    : product.price;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState(getCartItems);
  const isCartEmpty = cartItems.length === 0;
  const itemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => {
    const priceNumber = getPriceNumber(item.price);

    return priceNumber !== null ? sum + priceNumber * item.quantity : sum;
  }, 0);
  const hasNumericPrice = cartItems.some(
    (item) => getPriceNumber(item.price) !== null,
  );
  const totalText = hasNumericPrice ? `${cartTotal} ₽` : cartItems[0]?.price;

  const updateCartItems = (updatedCartItems) => {
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    window.dispatchEvent(new Event('cart-updated'));
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedCartItems = cartItems
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0);

    updateCartItems(updatedCartItems);
  };

  const handleIncreaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
    );

    updateCartItems(updatedCartItems);
  };

  const handleRemoveProduct = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);

    updateCartItems(updatedCartItems);
  };

  return (
    <section className="cart-page">
      <div className="container">
        <h1 className="cart-page__title">Корзина</h1>

        {isCartEmpty && <p className="cart-page__empty">Ваша корзина пуста</p>}

        {!isCartEmpty && (
          <div className="cart-page__content">
            <ul className="cart-page__list">
              {cartItems.map((product) => (
                <li className="cart-page__item" key={product.id}>
                  <img
                    className="cart-page__image"
                    src={product.image}
                    alt={product.title}
                  />

                  <div className="cart-page__info">
                    <h2 className="cart-page__product-title">
                      {product.title}
                    </h2>
                    <p className="cart-page__details">(большой / белый)</p>
                    <p className="cart-page__price">{product.price}/шт</p>
                  </div>

                  <div className="cart-page__quantity">
                    <button
                      className="cart-page__quantity-btn"
                      type="button"
                      onClick={() => handleDecreaseQuantity(product.id)}
                      aria-label="Уменьшить количество"
                    >
                      -
                    </button>
                    <span className="cart-page__quantity-value">
                      {product.quantity}
                    </span>
                    <button
                      className="cart-page__quantity-btn"
                      type="button"
                      onClick={() => handleIncreaseQuantity(product.id)}
                      aria-label="Увеличить количество"
                    >
                      +
                    </button>
                  </div>

                  <p className="cart-page__total">{getProductTotal(product)}</p>

                  <button
                    className="cart-page__action"
                    type="button"
                    onClick={() => handleRemoveProduct(product.id)}
                    aria-label="Удалить товар"
                  >
                    <svg
                      className="cart-page__action-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M8 6V4h8v2" />
                      <path d="M19 6l-1 14H6L5 6" />
                      <path d="M10 11v6" />
                      <path d="M14 11v6" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            <aside className="cart-page__sidebar">
              <form
                className="cart-page__promo"
                onSubmit={(event) => event.preventDefault()}
              >
                <label className="cart-page__promo-label" htmlFor="promo">
                  Введите промокод
                </label>
                <div className="cart-page__promo-wrap">
                  <input
                    className="cart-page__promo-input"
                    id="promo"
                    type="text"
                    placeholder="Промокод"
                  />
                  <button
                    className="cart-page__promo-btn"
                    type="submit"
                    aria-label="Применить промокод"
                  >
                    <svg
                      className="cart-page__promo-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </button>
                </div>
              </form>

              <div className="cart-page__summary">
                <div className="cart-page__summary-row">
                  <span>Товары ({itemsCount})</span>
                  <span>{totalText}</span>
                </div>
                <div className="cart-page__summary-row cart-page__summary-row--total">
                  <span>Итого к оплате:</span>
                  <strong>{totalText}</strong>
                </div>
                <Link className="cart-page__order" to="/checkout">
                  Оформить заказ
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
