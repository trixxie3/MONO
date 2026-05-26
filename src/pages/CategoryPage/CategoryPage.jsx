import './_CategoryPage.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import products from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import subcategoryImg1 from '../../data/images/product6.jpg';
import subcategoryImg2 from '../../data/images/product4.jpg';
import subcategoryImg3 from '../../data/images/product4.jpg';
import subcategoryImg4 from '../../data/images/product4.jpg';
import subcategoryImg5 from '../../data/images/product7.jpg';

const subcategories = [
  {
    id: 1,
    title: 'Подкатегория 1',
    image: subcategoryImg1,
  },
  {
    id: 2,
    title: 'Подкатегория 2',
    image: subcategoryImg2,
  },
  {
    id: 3,
    title: 'Подкатегория 3',
    image: subcategoryImg3,
  },
  {
    id: 4,
    title: 'Подкатегория 4',
    image: subcategoryImg4,
  },
  {
    id: 5,
    title: 'Подкатегория 5',
    image: subcategoryImg5,
  },
];

const categories = [
  {
    id: 1,
    title: 'Категория 1',
  },
  {
    id: 2,
    title: 'Категория 2',
  },
  {
    id: 3,
    title: 'Категория 3',
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

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [openFilters, setOpenFilters] = useState([]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState('default');
  const [subcategoryStart, setSubcategoryStart] = useState(0);
  const [subcategoriesToShow, setSubcategoriesToShow] = useState(() => {
    if (window.matchMedia('(max-width: 560px)').matches) {
      return 2;
    }

    if (window.matchMedia('(max-width: 760px)').matches) {
      return 3;
    }

    return 4;
  });
  const sortRef = useRef(null);
  const currentCategory =
    categories.find((category) => String(category.id) === categoryId) ||
    categories[0];

  const categoryProducts = useMemo(
    () => [
      products[8],
      products[1],
      products[5],
      products[3],
      products[7],
      products[2],
      products[6],
      products[4],
    ],
    [],
  );

  const sortedProducts = useMemo(() => {
    const productsCopy = [...categoryProducts];

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
  }, [categoryProducts, currentSort]);

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

  const handleSubcategoriesNext = () => {
    const maxStart = subcategories.length - subcategoriesToShow;

    setSubcategoryStart((currentStart) =>
      currentStart >= maxStart ? currentStart : currentStart + 1,
    );
  };

  const handleSubcategoriesPrev = () => {
    setSubcategoryStart((currentStart) =>
      currentStart <= 0 ? currentStart : currentStart - 1,
    );
  };

  const subcategoriesStyle = {
    transform: `translateX(-${
      subcategoryStart * (100 / subcategoriesToShow)
    }%)`,
  };
  const isSubcategoriesStart = subcategoryStart === 0;
  const isSubcategoriesEnd =
    subcategoryStart >= subcategories.length - subcategoriesToShow;

  useEffect(() => {
    const tabletQuery = window.matchMedia('(max-width: 760px)');
    const mobileQuery = window.matchMedia('(max-width: 560px)');

    const updateSubcategoriesToShow = () => {
      const nextSubcategoriesToShow = mobileQuery.matches
        ? 2
        : tabletQuery.matches
          ? 3
          : 4;

      setSubcategoriesToShow(nextSubcategoriesToShow);
      setSubcategoryStart((currentStart) =>
        Math.min(currentStart, subcategories.length - nextSubcategoriesToShow),
      );
    };

    tabletQuery.addEventListener('change', updateSubcategoriesToShow);
    mobileQuery.addEventListener('change', updateSubcategoriesToShow);

    return () => {
      tabletQuery.removeEventListener('change', updateSubcategoriesToShow);
      mobileQuery.removeEventListener('change', updateSubcategoriesToShow);
    };
  }, []);

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
      <section className="category-page">
        <div className="container">
          <div className="category-page__wrap">
            <Breadcrumbs
              items={[
                { label: 'Главная', path: '/' },
                {
                  label: currentCategory.title,
                  path: `/category/${currentCategory.id}`,
                },
              ]}
            />
            <h1 className="category-page__title">{currentCategory.title}</h1>
            <div className="category-page__subcategories-wrap">
              {!isSubcategoriesStart && (
                <button
                  className="category-page__subcategories-btn category-page__subcategories-btn--prev"
                  type="button"
                  onClick={handleSubcategoriesPrev}
                  aria-label="Предыдущая подкатегория"
                >
                  <svg
                    className="category-page__subcategories-btn-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m15 18-6-6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              )}
              <div className="category-page__subcategories-window">
                <ul
                  className="category-page__subcategories"
                  style={subcategoriesStyle}
                >
                  {subcategories.map((subcategory) => (
                    <li
                      className="category-page__subcategory"
                      key={subcategory.id}
                    >
                      <Link
                        to="/subcategory"
                        className="category-page__subcategory-link"
                      >
                        <img
                          className="category-page__subcategory-img"
                          src={subcategory.image}
                          alt={subcategory.title}
                        />
                        <span className="category-page__subcategory-title">
                          {subcategory.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {!isSubcategoriesEnd && (
                <button
                  className="category-page__subcategories-btn category-page__subcategories-btn--next"
                  type="button"
                  onClick={handleSubcategoriesNext}
                  aria-label="Следующая подкатегория"
                >
                  <svg
                    className="category-page__subcategories-btn-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m9 18 6-6-6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              )}
            </div>
            <div className="category-page__products-wrap">
              <div className="category-page__controls">
                <button
                  className="category-page__control"
                  type="button"
                  onClick={() => {
                    setIsFiltersOpen(true);
                    setIsSortOpen(false);
                  }}
                >
                  <svg
                    className="category-page__control-icon"
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
                <div className="category-page__sort" ref={sortRef}>
                  <button
                    className="category-page__control category-page__sort-btn"
                    type="button"
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    aria-expanded={isSortOpen}
                  >
                    Сортировка
                    <svg
                      className="category-page__control-icon"
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
                    <ul className="category-page__sort-list">
                      {sortItems.map((sortItem) => (
                        <li
                          className="category-page__sort-item"
                          key={sortItem.id}
                        >
                          <button
                            className={`category-page__sort-option ${
                              currentSort === sortItem.id
                                ? 'category-page__sort-option--active'
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
              <ul className="category-page__products">
                {sortedProducts.map((product) => (
                  <li key={product.id} className="category-page__product">
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
