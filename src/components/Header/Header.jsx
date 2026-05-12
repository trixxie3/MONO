import './_Header.scss';
import { Link } from 'react-router-dom';
import BurgerIcon from '../../assets/svg/burger.svg';
import Logo from '../../assets/svg/logo.svg';
import SearchIcon from '../../assets/svg/search.svg';
import UserIcon from '../../assets/svg/user.svg';
import CartIcon from '../../assets/svg/cart.svg';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <>
      <BurgerMenu isOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
      <header className="header">
        <div className="container">
          <div className="header__content">
            <button
              className="burger"
              type="button"
              onClick={() => setIsBurgerOpen(true)}
            >
              <img
                className="burger__icon"
                src={BurgerIcon}
                alt="бургер меню"
              />
              <span className="burger__text">Меню</span>
            </button>
            <Link to="/">
              <img className="header__logo" src={Logo} alt="логотип" />
            </Link>
            <div className="header__buttons">
              <button className="header__btn" type="button">
                <img
                  className="header__btn-icon"
                  src={SearchIcon}
                  alt="поиск"
                />
              </button>
              <Link className="header__btn" to="/account">
                <img className="header__btn-icon" src={UserIcon} alt="вход" />
              </Link>
              <Link className="header__btn" to="/cart">
                <img
                  className="header__btn-icon"
                  src={CartIcon}
                  alt="корзина"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
