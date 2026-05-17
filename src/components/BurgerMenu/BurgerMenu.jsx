import './_BurgerMenu.scss';
import { Link } from 'react-router-dom';
import Socials from '../Socials/Socials';

export default function BurgerMenu({ isOpen, setIsBurgerOpen }) {
  return (
    <>
      <aside className={`burger-menu ${isOpen ? 'burger-menu--open' : ''}`}>
        <button
          className="burger-menu__close"
          type="button"
          onClick={() => setIsBurgerOpen(false)}
          aria-label="Закрыть меню"
        >
          <span className="burger-menu__close-line"></span>
          <span className="burger-menu__close-line"></span>
        </button>
        <nav className="burger-menu__catalog">
          <h2 className="burger-menu__title burger-menu__title--catalog">
            Каталог
          </h2>
          <ul className="burger-menu__list">
            <li className="burger-menu__item burger-menu__item--category">
              <details className="accordion">
                <summary className="accordion__title-wrap">
                  <Link className="accordion__title" to="/category">
                    Категория 1
                  </Link>
                  <svg
                    className="accordion__title-icon"
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
                </summary>
                <ul className="accordion__list">
                  <li className="accordion__item-wrap">
                    <Link className="accordion__item" to="/subcategory">
                      Подкатегория 1
                    </Link>
                  </li>
                  <li className="accordion__item-wrap">
                    <Link className="accordion__item" to="/subcategory">
                      Подкатегория 2
                    </Link>
                  </li>
                  <li className="accordion__item-wrap">
                    <Link className="accordion__item" to="/subcategory">
                      Подкатегория 3
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="burger-menu__item burger-menu__item--category">
              <details className="accordion">
                <summary className="accordion__title-wrap">
                  <Link className="accordion__title" to="/category">
                    Категория 1
                  </Link>
                  <svg
                    className="accordion__title-icon"
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
                </summary>
                <ul className="accordion__list">
                  <li className="accordion__item-wrap">
                    <Link className="accordion__item" to="/subcategory">
                      Подкатегория 1
                    </Link>
                  </li>
                  <li className="accordion__item-wrap">
                    <Link className="accordion__item" to="/subcategory">
                      Подкатегория 2
                    </Link>
                  </li>
                  <li className="accordion__item-wrap">
                    <Link className="accordion__item" to="/subcategory">
                      Подкатегория 3
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="burger-menu__item burger-menu__item--category">
              <details className="accordion">
                <summary className="accordion__title-wrap">
                  <Link className="accordion__title" to="/category">
                    Категория 1
                  </Link>
                  <svg
                    className="accordion__title-icon"
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
                </summary>
                <ul className="accordion__list">
                  <li className="accordion__item-wrap">
                    <Link className="accordion__item" to="/subcategory">
                      Подкатегория 1
                    </Link>
                  </li>
                  <li className="accordion__item-wrap">
                    <Link className="accordion__item" to="/subcategory">
                      Подкатегория 2
                    </Link>
                  </li>
                  <li className="accordion__item-wrap">
                    <Link className="accordion__item" to="/subcategory">
                      Подкатегория 3
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
        <nav className="burger-menu__main">
          <h2 className="burger-menu__title">Основное</h2>
          <ul className="burger-menu__list burger-menu__list--main">
            <li className="burger-menu__item">
              <Link className="burger-menu__link" to="/catalog">
                Каталог
              </Link>
            </li>
            <li className="burger-menu__item">
              <Link className="burger-menu__link" to="/about">
                О компании
              </Link>
            </li>
            <li className="burger-menu__item">
              <Link className="burger-menu__link" to="/contacts">
                Контакты
              </Link>
            </li>
            <li className="burger-menu__item">
              <Link className="burger-menu__link" to="/delivery">
                Доставка
              </Link>
            </li>
            <li className="burger-menu__item">
              <Link className="burger-menu__link" to="/payment">
                Оплата
              </Link>
            </li>
            <li className="burger-menu__item">
              <Link className="burger-menu__link" to="/profile">
                Личный кабинет
              </Link>
            </li>
            <li className="burger-menu__item">
              <Link className="burger-menu__link" to="/blog">
                Блог
              </Link>
            </li>
          </ul>
        </nav>
        <div className="burger-menu__contacts">
          <h2 className="burger-menu__title">Контакты</h2>
          <a href="tel:+7999999999" className="burger-menu__phone">
            +7 (999) 999-99-99
          </a>
          <p className="burger-menu__address">
            г. Москва, ул. Новорязанская, 18, стр. 11
          </p>
        </div>
        <Socials />
      </aside>
      <div
        className={`burger-menu-overlay ${
          isOpen ? 'burger-menu-overlay--open' : ''
        }`}
        onClick={() => setIsBurgerOpen(false)}
      ></div>
    </>
  );
}
