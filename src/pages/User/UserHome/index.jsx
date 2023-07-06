import { Container, Content, Arrow } from './styles';
import { useRef } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import MobileBannerPng from '../../../assets/mobileBanner.png';
import DesktopBannerPng from '../../../assets/desktopBanner.png';

import { useMediaQuery } from 'react-responsive';

import { UserMobileHeader } from '../../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../../components/UserDesktopHeader';

import { Section } from '../../../components/Section';
import { DishCard } from '../../../components/DishCard'; 
import { Footer } from '../../../components/Footer'; 



export function UserHome() {
  const scrollMealList = useRef(null);
  const scrollDrinkList = useRef(null);
  const scrollDessertList = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const imageUrl = isMobile ? MobileBannerPng : DesktopBannerPng;

  const handlePrevMealList = () => {
    scrollMealList.current.scrollBy({
    left: -120,
    behavior: 'smooth'
  });
}

const handleNextMealList = () => {
    scrollMealList.current.scrollBy({
    left: 120,
    behavior: 'smooth'
  });
}

const handlePrevDrinkList = () => {
    scrollDrinkList.current.scrollBy({
      left: -120,
      behavior: 'smooth'
    });
  }

  const handleNextDrinkList = () => {
    scrollDrinkList.current.scrollBy({
      left: 120,
      behavior: 'smooth'
    });
  }

  const handlePrevDessertList = () => {
    scrollDessertList.current.scrollBy({
      left: -120,
      behavior: 'smooth'
    });
  }

  const handleNextDessertList = () => {
    scrollDessertList.current.scrollBy({
      left: 120,
      behavior: 'smooth'
    });
  }

  return (
    <Container>

      {isMobile ? <UserMobileHeader /> : <UserDesktopHeader />}

      <main>

        <Content>
          <div className="Banner">
            <img
                src={imageUrl}
                alt="Imagem de 'polígono azul'."
              />
            <div className="wrapperBanner">
              <h2>Sabores Inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>

          <Section title="Refeições">  
            <div ref={scrollMealList}>
              <DishCard title="Salada Ravanello" visibility="not-visible" />
              <DishCard title="Peixe à Delícia" visibility="not-visible"/>
              <DishCard title="Salada Ravanello" visibility="not-visible"/>
              <DishCard title="Peixe à Delícia" visibility="not-visible"/>
              <DishCard title="Salada Ravanello" visibility="not-visible"/>
              <DishCard title="Peixe à Delícia" visibility="not-visible"/>
              <DishCard title="Salada Ravanello" visibility="not-visible"/>
              <DishCard title="Peixe à Delícia" visibility="not-visible"/>
            </div>

            <Arrow
              direction="prev"
              onClick={handlePrevMealList}
            >
              <FiChevronLeft />
            </Arrow>

            <Arrow
              direction="next"
              onClick={handleNextMealList}
            >
              <FiChevronRight />
            </Arrow>

          </Section>

          <Section title="Sobremesas">
            <div ref={scrollDessertList}>
              <DishCard title="Salada Ravanello" visibility="not-visible" />
              <DishCard title="Peixe à Delícia" visibility="not-visible"/>
              <DishCard title="Salada Ravanello" visibility="not-visible"/>
              <DishCard title="Peixe à Delícia" visibility="not-visible"/>
              <DishCard title="Salada Ravanello" visibility="not-visible"/>
              <DishCard title="Peixe à Delícia" visibility="not-visible"/>
              <DishCard title="Salada Ravanello" visibility="not-visible"/>
              <DishCard title="Peixe à Delícia" visibility="not-visible"/>
            </div>

            <Arrow
              direction="prev"
              onClick={handlePrevDessertList}
            >
              <FiChevronLeft />
            </Arrow>

            <Arrow
              direction="next"
              onClick={handleNextDessertList}
            >
              <FiChevronRight />
            </Arrow>

          </Section>

          <Section title="Bebidas">
            <div ref={scrollDrinkList}>
              <DishCard title="Salada Ravanello" visibility="visible" />
              <DishCard title="Peixe à Delícia" visibility="visible"/>
              <DishCard title="Salada Ravanello" visibility="visible"/>
              <DishCard title="Peixe à Delícia" visibility="visible"/>
              <DishCard title="Salada Ravanello" visibility="visible"/>
              <DishCard title="Peixe à Delícia" visibility="visible"/>
              <DishCard title="Salada Ravanello" visibility="visible"/>
              <DishCard title="Peixe à Delícia" visibility="visible"/>
            </div>

            <Arrow
              direction="prev"
              onClick={handlePrevDrinkList}
            >
              <FiChevronLeft />
            </Arrow>

            <Arrow
            direction="next"
            onClick={handleNextDrinkList}
            >
              <FiChevronRight />
            </Arrow>
          </Section>

        </Content>

      </main>

      <Footer />

    </Container>
  )
}