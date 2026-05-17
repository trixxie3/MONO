import { useState } from 'react';
import './_Carousel.scss';
import slide1 from '../../assets/images/slide1.webp';
import slide2 from '../../assets/images/slide2.webp';
import slide3 from '../../assets/images/slide3.webp';
import slide4 from '../../assets/images/slide4.webp';
import arrow from '../../assets/svg/arrow.svg';

export default function Carousel() {
  const slides = [slide1, slide2, slide3, slide4];
  const slidesToShow = 2;
  const totalSlides = slides.length;
  const [currentIndex, setCurrentIndex] = useState(slidesToShow);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const extendedSlides = [
    ...slides.slice(-slidesToShow),
    ...slides,
    ...slides.slice(0, slidesToShow),
  ];

  const trackStyle = {
    transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
    transition: isTransitionEnabled ? 'transform 0.5s ease' : 'none',
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);

    if (currentIndex >= totalSlides + slidesToShow) {
      setIsTransitionEnabled(false);
      setCurrentIndex(slidesToShow);
      return;
    }

    if (currentIndex < slidesToShow) {
      setIsTransitionEnabled(false);
      setCurrentIndex(totalSlides + currentIndex);
    }
  };

  const next = () => {
    if (isAnimating) {
      return;
    }

    setIsTransitionEnabled(true);
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (isAnimating) {
      return;
    }

    setIsTransitionEnabled(true);
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section className="carousel">
      <div
        className="carousel__track"
        style={trackStyle}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((img, i) => (
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
