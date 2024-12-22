import React from 'react';
import Slider from 'react-slick';
import styles from './carousel.module.scss';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [
    '/images/hertitude.svg',
    '/images/celeste.svg',
    '/images/mavin.svg',
    '/images/chefroz.svg',
    '/images/evoz.svg'
  ];
  return (
    <div className={styles.carousel_container}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.carousel_item}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
