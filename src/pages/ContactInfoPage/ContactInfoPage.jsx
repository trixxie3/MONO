import './_ContactInfoPage.scss';
import { useState } from 'react';

export default function ContactInfoPage({ currentUser, onUpdateUser }) {
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    phone: currentUser?.phone || '',
    email: currentUser?.email || '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!currentUser) {
      alert('Войдите в аккаунт, чтобы сохранить контактную информацию');
      return;
    }

    const updatedUser = {
      ...currentUser,
      ...formData,
    };

    onUpdateUser(updatedUser);
    alert('Контактная информация сохранена');
  };

  return (
    <section className="contact-info">
      <h1 className="contact-info__title">Контакты</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
          <label className="form__label" htmlFor="name">
            Контактное лицо (ФИО) <span className="form__label-span">*</span>
          </label>
          <input
            className="form__input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="phone">
            Контактный телефон <span className="form__label-span">*</span>
          </label>
          <input
            className="form__input"
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="email">
            Электронная почта
          </label>
          <input
            className="form__input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button className="form__submit" type="submit">
          Сохранить изменения
        </button>
      </form>
    </section>
  );
}
