import React from 'react';
import '../App.css'; // Importa o CSS para o componente

const CarouselImage = ({ imgSrc, altText }) => {
  return (
    <div className="carousel-image-container">
      <img src={imgSrc} alt={altText} className="carousel-image" />
    </div>
  );
};

export default CarouselImage;
