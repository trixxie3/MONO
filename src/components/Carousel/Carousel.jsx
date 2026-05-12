import { useState } from 'react';
import './_Carousel.scss';
import slide1 from '../../assets/images/slide1.webp';
import slide2 from '../../assets/images/slide2.webp';
import slide3 from '../../assets/images/slide3.webp';
import slide4 from '../../assets/images/slide4.webp';
import arrow from '../../assets/svg/arrow.svg';

export default function Carousel() {
  const slides = [slide1, slide2, slide3, slide4];
  const [index, setIndex] = useState(0);

  const slidesToShow = 2;
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="carousel">
      <div
        className="carousel__track"
        style={{
          transform: `translateX(-${(index * 100) / slidesToShow}%)`,
        }}
      >
        {slides.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slide ${i}`}
            className="carousel__slide"
          />
        ))}
      </div>
      <button
        className="carousel__btn carousel__btn--prev"
        type="button"
        onClick={prev}
      >
        <img
          className="carousel__btn-icon carousel__btn--prev-icon"
          src={arrow}
          alt="назад"
        />
      </button>
      <button
        className="carousel__btn carousel__btn--next"
        type="button"
        onClick={next}
      >
        <img className="carousel__btn-icon" src={arrow} alt="вперед" />
      </button>
    </section>
  );
}
