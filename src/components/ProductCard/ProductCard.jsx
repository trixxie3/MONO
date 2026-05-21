import './_ProductCard.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const currentUser = localStorage.getItem('currentUser');

    if (!currentUser) {
      navigate('/account');
      return;
    }

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const currentItem = cartItems.find((item) => item.id === product.id);

    const updatedCart = currentItem
      ? cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cartItems, { ...product, quantity: 1 }];

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cart-updated'));
    navigate('/cart');
  };

  return (
    <div className="product-card">
      <Link className="product-card__image-link" to={`/product/${product.id}`}>
        <img
          className="product-card__image"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <Link className="product-card__title" to={`/product/${product.id}`}>
        {product.title}
      </Link>
      <div className="product-card__wrap">
        <p className="product-card__price">{product.price}</p>
        <button
          className="product-card__btn"
          type="button"
          onClick={handleAddToCart}
          aria-label="Добавить в корзину"
        >
          <svg
            className="product-card__btn-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <circle
              cx="176"
              cy="416"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <circle
              cx="400"
              cy="416"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M48 80h64l48 272h256"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
