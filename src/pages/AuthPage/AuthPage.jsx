import { useState } from 'react';
import './_AuthPage.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function AuthPage({ onLogin }) {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = users.find(
      (user) =>
        (user.email === formData.login || user.phone === formData.login) &&
        user.password === formData.password,
    );

    if (foundUser) {
      onLogin(foundUser);
      navigate('/account');
    } else {
      alert('Неверный email или пароль');
    }
  }

  return (
    <section className="auth">
      <div className="container">
        <h1 className="auth__title">Вход в кабинет покупателя</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__field">
            <p className="form__label">
              Телефон или Email<span className="form__label-span">*</span>
            </p>
            <input
              className="form__input"
              type="text"
              name="login"
              value={formData.login}
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

          <div className="form__wrap">
            <button className="form__submit" type="submit">
              Войти
            </button>
            <Link className="form__link" to="/register">
              Зарегистрироваться
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
