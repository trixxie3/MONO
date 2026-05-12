import { NavLink, Outlet } from 'react-router-dom';
import './_UserProfile.scss';

export default function UserProfile({ user, onLogout }) {
  return (
    <section className="profile">
      <div className="container">
        <div className="profile__content">
          <aside className="profile__aside">
            <ul className="profile__list">
              <li className="profile__item">
                <NavLink to="order-history" className="profile__link">
                  История заказов
                </NavLink>
              </li>
              <li className="profile__item">
                <NavLink to="delivery-address" className="profile__link">
                  Адреса доставки
                </NavLink>
              </li>
              <li className="profile__item">
                <NavLink to="discounts-bonuses" className="profile__link">
                  Скидки и бонусы
                </NavLink>
              </li>
              <li className="profile__item">
                <NavLink to="contact-info" className="profile__link">
                  Контактные данные
                </NavLink>
              </li>
              <li className="profile__item">
                <button
                  onClick={onLogout}
                  className="profile__link"
                  type="button"
                >
                  Выйти
                </button>
              </li>
            </ul>
          </aside>
          <div className="profile__main">
            <Outlet context={{ user }} />
          </div>
        </div>
      </div>
    </section>
  );
}
