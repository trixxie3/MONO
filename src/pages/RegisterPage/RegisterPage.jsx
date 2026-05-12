import './_RegisterPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function RegisterPage({ onLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(
      (user) => user.email === formData.email || user.phone === formData.phone,
    );
    if (existingUser) {
      alert('Пользователь с таким email или телефоном уже существует');
      return;
    }

    const newUser = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem('users', JSON.stringify([...users, newUser]));

    onLogin(newUser);
    navigate('/account');
  };

  return (
    <section className="register">
      <div className="container">
        <h1 className="register__title">Регистрация</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__field">
            <p className="form__label">
              Контактное лицо (ФИО)<span className="form__label-span">*</span>
            </p>
            <input
              className="form__input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form__field">
            <p className="form__label">
              Контактный телефон<span className="form__label-span">*</span>
            </p>
            <input
              className="form__input"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              minLength="6"
              required
            />
          </label>

          <label className="form__field">
            <p className="form__label">
              Email<span className="form__label-span">*</span>
            </p>
            <input
              className="form__input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form__field">
            <p className="form__label">
              Пароль<span className="form__label-span">*</span>
            </p>
            <input
              className="form__input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength="6"
              required
            />
          </label>

          <label className="form__field">
            <p className="form__label">
              Повторите пароль<span className="form__label-span">*</span>
            </p>
            <input
              className="form__input"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength="6"
              required
            />
          </label>

          <div className="form__wrap">
            <button className="form__submit" type="submit">
              Зарегистрироваться
            </button>
            <Link className="form__link" to="/account">
              У меня уже есть аккаунт
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
