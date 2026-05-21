import './_CatalogPage.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import products from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';

export default function CatalogPage() {
  return (
    <section className="catalog-page">
      <div className="container">
        <div className="catalog-page__wrap">
          <Breadcrumbs
            items={[
              { label: 'Главная', path: '/' },
              { label: 'Каталог', path: '/catalog' },
            ]}
          />
          <h1 className="catalog-page__title">Каталог</h1>
        </div>
      </div>
    </section>
  );
}
