import './_CatalogPage.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import products from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import categoryImg1 from '../../data/images/product8.jpg';
import categoryImg2 from '../../data/images/product2.jpg';
import categoryImg3 from '../../data/images/product4.jpg';

const categories = [
  {
    id: 1,
    title: 'Категория 1',
    image: categoryImg1,
  },
  {
    id: 2,
    title: 'Категория 2',
    image: categoryImg2,
  },
  {
    id: 3,
    title: 'Категория 3',
    image: categoryImg3,
  },
];

const sortItems = [
  {
    id: 'default',
    title: 'По умолчанию',
  },
  {
    id: 'price-up',
    title: 'По возрастанию цены',
  },
  {
    id: 'price-down',
    title: 'По убыванию цены',
  },
  {
    id: 'new',
    title: 'Сначала новые',
  },
  {
    id: 'title',
    title: 'По названию',
  },
];

const filterItems = [
  {
    title: 'Размер',
    options: ['большой', 'S', 'M', 'L', 'XL'],
  },
  {
    title: 'Цвет',
    options: ['белый'],
  },
  {
    title: 'Тип',
    options: ['Рубашка', 'С карманом', 'Поло', 'Куртка-рубашка', '2 кармана'],
  },
  {
    title: 'Характеристика 1',
    options: ['значение 1', 'значение 2', 'значение 3'],
  },
  {
    title: 'Характеристика 2',
    options: ['значение 1', 'значение 2', 'значение 3'],
  },
  {
    title: 'Характеристика 3',
    options: ['значение 1', 'значение 2', 'значение 3'],
  },
];

const getPriceNumber = (price) => {
  const priceNumber = Number(String(price).replace(/\D/g, ''));

  return Number.isNaN(priceNumber) ? 0 : priceNumber;
};

export default function CatalogPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [openFilters, setOpenFilters] = useState([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState('default');
  const sortRef = useRef(null);

  const sortedProducts = useMemo(() => {
    const productsCopy = [...products];

    if (currentSort === 'price-up') {
      return productsCopy.sort(
        (a, b) => getPriceNumber(a.price) - getPriceNumber(b.price),
      );
    }

    if (currentSort === 'price-down') {
      return productsCopy.sort(
        (a, b) => getPriceNumber(b.price) - getPriceNumber(a.price),
      );
    }

    if (currentSort === 'new') {
      return productsCopy.sort((a, b) => b.id - a.id);
    }

    if (currentSort === 'title') {
      return productsCopy.sort((a, b) => a.title.localeCompare(b.title));
    }

    return productsCopy;
  }, [currentSort]);

  const handleSortClick = (sortId) => {
    setCurrentSort(sortId);
    setIsSortOpen(false);
  };

  const handleFilterToggle = (filterName) => {
    setOpenFilters((currentFilters) =>
      currentFilters.includes(filterName)
        ? currentFilters.filter((item) => item !== filterName)
        : [...currentFilters, filterName],
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <aside
        className={`catalog-filters ${
          isFiltersOpen ? 'catalog-filters--open' : ''
        }`}
      >
        <div className="catalog-filters__content">
          <h2 className="catalog-filters__title">Фильтры</h2>
          <div
            className={`catalog-filters__section catalog-filters__section--price ${
              openFilters.includes('price')
                ? 'catalog-filters__section--open'
                : ''
            }`}
          >
            <button
              className="catalog-filters__section-top"
              type="button"
              onClick={() => handleFilterToggle('price')}
            >
              <span className="catalog-filters__section-title">Цена</span>
              <span className="catalog-filters__section-icon"></span>
            </button>
            <div className="catalog-filters__section-content">
              <div className="catalog-filters__range">
                <span className="catalog-filters__range-line"></span>
                <span className="catalog-filters__range-dot catalog-filters__range-dot--left"></span>
                <span className="catalog-filters__range-dot catalog-filters__range-dot--right"></span>
              </div>
              <div className="catalog-filters__price-inputs">
                <label className="catalog-filters__price-label">
                  <span className="catalog-filters__price-text">от</span>
                  <input
                    className="catalog-filters__price-input"
                    type="number"
                    defaultValue="650"
                  />
                </label>
                <label className="catalog-filters__price-label">
                  <span className="catalog-filters__price-text">до</span>
                  <input
                    className="catalog-filters__price-input"
                    type="number"
                    defaultValue="16590"
                  />
                </label>
              </div>
            </div>
          </div>
          {filterItems.map((filter) => (
            <div
              className={`catalog-filters__section ${
                openFilters.includes(filter.title)
                  ? 'catalog-filters__section--open'
                  : ''
              }`}
              key={filter.title}
            >
              <button
                className="catalog-filters__section-top"
                type="button"
                onClick={() => handleFilterToggle(filter.title)}
              >
                <span className="catalog-filters__section-title">
                  {filter.title}
                </span>
                <span className="catalog-filters__section-icon"></span>
              </button>
              <div className="catalog-filters__section-content">
                <ul className="catalog-filters__list">
                  {filter.options.map((option) => (
                    <li className="catalog-filters__item" key={option}>
                      <label className="catalog-filters__checkbox-label">
                        <input
                          className="catalog-filters__checkbox"
                          type="checkbox"
                        />
                        <span className="catalog-filters__checkbox-view"></span>
                        <span className="catalog-filters__checkbox-text">
                          {option}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <button
          className="catalog-filters__apply"
          type="button"
          onClick={() => setIsFiltersOpen(false)}
        >
          Применить
        </button>
      </aside>
      <button
        className={`catalog-filters-overlay ${
          isFiltersOpen ? 'catalog-filters-overlay--open' : ''
        }`}
        type="button"
        onClick={() => setIsFiltersOpen(false)}
        aria-label="Закрыть фильтры"
      ></button>
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
            <ul className="catalog-page__categories">
              {categories.map((category) => (
                <li className="catalog-page__category" key={category.id}>
                  <Link
                    to={`/category/${category.id}`}
                    className="catalog-page__category-link"
                  >
                    <img
                      className="catalog-page__category-img"
                      src={category.image}
                      alt={category.title}
                    />
                    <span className="catalog-page__category-title">
                      {category.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="catalog-page__products-wrap">
              <div className="catalog-page__controls">
                <button
                  className="catalog-page__control"
                  type="button"
                  onClick={() => {
                    setIsFiltersOpen(true);
                    setIsSortOpen(false);
                  }}
                >
                  <svg
                    className="catalog-page__control-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 7h4m8 0h4M4 17h10m4 0h2M11 5v4m4 6v4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  Фильтры
                </button>
                <div className="catalog-page__sort" ref={sortRef}>
                  <button
                    className="catalog-page__control catalog-page__sort-btn"
                    type="button"
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    aria-expanded={isSortOpen}
                  >
                    Сортировка
                    <svg
                      className="catalog-page__control-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 7h12M4 12h8M4 17h4"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                  {isSortOpen && (
                    <ul className="catalog-page__sort-list">
                      {sortItems.map((sortItem) => (
                        <li
                          className="catalog-page__sort-item"
                          key={sortItem.id}
                        >
                          <button
                            className={`catalog-page__sort-option ${
                              currentSort === sortItem.id
                                ? 'catalog-page__sort-option--active'
                                : ''
                            }`}
                            type="button"
                            onClick={() => handleSortClick(sortItem.id)}
                          >
                            {sortItem.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <ul className="catalog-page__products">
                {sortedProducts.map((product) => (
                  <li key={product.id} className="catalog-page__product">
                    <ProductCard product={product} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
