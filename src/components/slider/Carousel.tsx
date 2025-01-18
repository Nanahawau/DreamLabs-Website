import React, { useEffect, useState } from 'react';
import { styled, keyframes, css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const Container = styled.div`
  width: 100%;
  // height: 400px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 20px 0;
  margin-bottom: 200px;
  & .image-list:hover {
    animation-play-state: paused;
  }
`;

const ImageList = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  animation: ${slideAnimation} 20s linear infinite;
  animation-delay: 2s;
  width: fit-content;
`;

const ImageWrapper = styled.div<{ isHovered: boolean }>`
  flex: 0 0 auto;
  width: 500px;
  // height: 600px;
  height: auto;
  transition: all 0.3s ease;
  transform-origin: center left;
  ${({ isHovered }) =>
    isHovered &&
    css`
      width: 600px;
      // height: 695px;
      height: auto;
    `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlidingImageGallery: React.FC = () => {
  const [images, setImages] = useState<{ id: string; image: string }[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const imageUrls = [
      { id: 'hertitude', image: '/images/hertitude_slider.webp' },
      { id: 'alo', image: '/images/alo_slider.webp' },
      { id: 'mavin', image: '/images/mavin_slider.webp' },
      { id: 'chez-ro', image: '/images/chezro_slider.webp' },
      { id: 'evos', image: '/images/evos_slider.webp' }
    ];
    setImages(imageUrls);
  }, []);

  const navigate = useNavigate();

  const handleImageClick = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <Container>
      <ImageList className="image-list">
        {images.map((src, index) => (
          <ImageWrapper
            key={src.id}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <Image
              src={src.image || '/placeholder.svg'}
              alt={`Sliding image ${index + 1}`}
              onClick={() => handleImageClick(src.id)}
            />
          </ImageWrapper>
        ))}
        {images.map((src, index) => (
          <ImageWrapper
            key={`duplicate-${src.id}`}
            isHovered={hoveredIndex === index + images.length}
            onMouseEnter={() => setHoveredIndex(index + images.length)}
            onMouseLeave={() => setHoveredIndex(null)}>
            <Image
              src={src.image || '/placeholder.svg'}
              alt={`Sliding image duplicate ${index + 1}`}
              onClick={() => handleImageClick(src.id)}
            />
          </ImageWrapper>
        ))}
      </ImageList>
    </Container>
  );
};

export default SlidingImageGallery;
