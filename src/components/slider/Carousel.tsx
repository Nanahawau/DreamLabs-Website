import React from 'react';
import Slider from 'react-slick';
import styles from './carousel.module.scss';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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

  const carouselItems = [
    { id: 'hertitude', image: '/images/hertitude_slider.webp' },
    { id: 'alo', image: '/images/alo_slider.webp' },
    { id: 'mavin', image: '/images/mavin_slider.webp' },
    { id: 'chez-ro', image: '/images/chezro_slider.webp' },
    { id: 'evos', image: '/images/evos_slider.webp' }
  ];

  const navigate = useNavigate();

  const handleItemClick = (id: string) => {
    navigate(`/${id}`);
  };
  return (
    <div>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={styles.carousel_container}
            onClick={() => handleItemClick(item.id)}>
            <img src={item.image} alt={`Slide ${index + 1}`} className={styles.carousel_item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
