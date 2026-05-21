import { products } from '../../data/products';
import { products2 } from '../../data/products2';
import './_SpecialProducts.scss';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SpecialProducts() {
  const [variant, setVariant] = useState('sale');
  const currentProducts = variant === 'sale' ? products : products2;

  return (
    <section className="special-products">
      <div className="container">
        <div className="special-products__wrap">
          <div className="special-products__variant-buttons">
            <button
              className={`special-products__variant ${
                variant === 'sale' ? 'special-products__variant--active' : ''
              }`}
              type="button"
              onClick={() => setVariant('sale')}
            >
              Акции
            </button>
            <button
              className={`special-products__variant ${
                variant === 'popular' ? 'special-products__variant--active' : ''
              }`}
              type="button"
              onClick={() => setVariant('popular')}
            >
              Популярное
            </button>
          </div>
          <ul className="special-products__list">
            {currentProducts.map((product) => (
              <li className="special-products__item" key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
          <Link className="special-products__more" to="/catalog">
            <p className="special-products__more-text">Смотреть все</p>
            <svg
              className="special-products__more-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 12 24"
            >
              <path
                fill="#1c2738"
                fill-rule="evenodd"
                d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
