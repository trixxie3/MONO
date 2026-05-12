import { useOutletContext } from 'react-router-dom';
import './_ContactInfoPage.scss';

export default function ContactInfoPage() {
  const { user } = useOutletContext();

  return (
    <section className="contact-info">
      <h1 className="contact-info__title">Контактные данные</h1>
      <p className="contact-info__text">Имя: {user.name}</p>
      <p className="contact-info__text">Телефон: {user.phone}</p>
      <p className="contact-info__text">Email: {user.email}</p>
    </section>
  );
}
