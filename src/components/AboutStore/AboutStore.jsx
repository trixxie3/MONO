import './_AboutStore.scss';
import StoreIcon from '../../assets/svg/store.svg';
import { Link } from 'react-router-dom';

export default function AboutStore() {
  return (
    <section className="about-store">
      <img className="about-store__icon" src={StoreIcon} alt="о магазине" />
      <h2 className="about-store__title">О магазине Mono</h2>
      <p className="about-store__text">
        Тут вы можете добавить небольшое описание о вашем интернет-магазине.
        Какие у вас есть плюсы и можете добавить интересные факты о магазине
      </p>
      <Link className="about-store__link" to="/about">
        Подробнее
      </Link>
    </section>
  );
}
