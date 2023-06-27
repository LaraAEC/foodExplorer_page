import { Container } from './styles';
import { DishCard } from '../DishCard';

import { useState } from 'react';

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    /* Conteúdo dos slides */
    <div>
      <DishCard />
    </div>,

    <div>
      <DishCard />
    </div>,
    
    <div>
      <DishCard />
    </div>,

    <div>
      <DishCard />
    </div>,

    <div>
      <DishCard />
    </div>
 
  ];

  const goToPrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <Container>
      <button onClick={goToPrevSlide}>Anterior</button>
      {slides[currentSlide]}
      <button onClick={goToNextSlide}>Próximo</button>
    </Container>
  );
};
