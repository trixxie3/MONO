import { useState } from 'react';
import './_DeliveryAddressPage.scss';

export default function DeliveryAddressPage({ currentUser, onUpdateUser }) {
  const [formData, setFormData] = useState({
    city: currentUser?.deliveryAddress?.city || '',
    address: currentUser?.deliveryAddress?.address || '',
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

    const updatedUser = {
      ...currentUser,
      deliveryAddress: formData,
    };

    onUpdateUser(updatedUser);
    alert('Адрес сохранен');
  };

  return (
    <section className="delivery-address">
      <h1 className="delivery-address__title">Адреса доставки</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
          <label className="form__label" htmlFor="city">
            Населенный пункт <span className="form__label-span">*</span>
          </label>
          <input
            className="form__input"
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="address">
            Адрес <span className="form__label-span">*</span>
          </label>
          <textarea
            className="form__textarea"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className="form__submit form__submit--address" type="submit">
          Сохранить изменения
        </button>
      </form>
    </section>
  );
}
