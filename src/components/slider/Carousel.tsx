import React from 'react';
import Slider from 'react-slick';
import styles from './carousel.module.scss';
import { useNavigate } from 'react-router-dom';

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

  const carouselItems = [
    { id: '1', image: '/images/hertitude.svg' },
    { id: '2', image: '/images/celeste.svg' },
    { id: '3', image: '/images/mavin.svg' },
    { id: '4', image: '/images/chefroz.svg' },
    { id: '5', image: '/images/evoz.svg' }
  ];

  const navigate = useNavigate();

  const handleItemClick = (id: string) => {
    navigate(`/page/${id}`);
  };
  return (
    <div className={styles.carousel_container}>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={styles.carousel_item}
            onClick={() => handleItemClick(item.id)}>
            <img src={item.image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
