import './_Footer.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';
import Socials from '../Socials/Socials';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__left">
            <div className="footer__phone-wrap">
              <a
                className="footer__phone footer__phone--left"
                href="tel:+7999999999"
              >
                +7 (999) 999-99-99
              </a>
              <a className="footer__phone" href="tel:+7999999999">
                +7 (999) 999-99-99
              </a>
            </div>
            <p className="footer__address">
              г. Москва, Новорязанская ул., 18, стр. 11
            </p>
          </div>
          <Link to="/">
            <img className="header__logo" src={Logo} alt="логотип" />
          </Link>
          <div className="footer__right">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
}
