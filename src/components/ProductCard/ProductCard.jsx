import './_ProductCard.scss';
import { Link } from 'react-router-dom';
import FavoriteIcon from '../../assets/svg/favorite.svg';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <button className="product-card__favorite" type="button">
        <img
          className="product-card__favorite-icon"
          src={FavoriteIcon}
          alt="избранное"
        />
      </button>
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
        <Link className="product-card__btn" to="/cart">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <circle
              cx="400"
              cy="416"
              r="16"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M48 80h64l48 272h256"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
