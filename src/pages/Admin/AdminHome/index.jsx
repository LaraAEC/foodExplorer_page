import { Container, Content, Arrow } from './styles';
import { useRef } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import MobileBannerPng from '../../../assets/mobileBanner.png';
import DesktopBannerPng from '../../../assets/desktopBanner.png';

import { useMediaQuery } from 'react-responsive';

import { AdminMobileHeader } from '../../../components/AdminMobileHeader';
import { AdminDesktopHeader } from '../../../components/AdminDesktopHeader';

import { Section } from '../../../components/Section';
import { AdminDishCard } from '../../../components/AdminDishCard'; 
import { Footer } from '../../../components/Footer'; 



export function AdminHome() {
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

      {isMobile ? <AdminMobileHeader /> : <AdminDesktopHeader />}

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
              <AdminDishCard title="Salada Ravanello" visibility="not-visible" />
              <AdminDishCard title="Peixe à Delícia" visibility="not-visible"/>
              <AdminDishCard title="Salada Ravanello" visibility="not-visible"/>
              <AdminDishCard title="Peixe à Delícia" visibility="not-visible"/>
              <AdminDishCard title="Salada Ravanello" visibility="not-visible"/>
              <AdminDishCard title="Peixe à Delícia" visibility="not-visible"/>
              <AdminDishCard title="Salada Ravanello" visibility="not-visible"/>
              <AdminDishCard title="Peixe à Delícia" visibility="not-visible"/>
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
              <AdminDishCard title="Salada Ravanello" visibility="not-visible" />
              <AdminDishCard title="Peixe à Delícia" visibility="not-visible"/>
              <AdminDishCard title="Salada Ravanello" visibility="not-visible"/>
              <AdminDishCard title="Peixe à Delícia" visibility="not-visible"/>
              <AdminDishCard title="Salada Ravanello" visibility="not-visible"/>
              <AdminDishCard title="Peixe à Delícia" visibility="not-visible"/>
              <AdminDishCard title="Salada Ravanello" visibility="not-visible"/>
              <AdminDishCard title="Peixe à Delícia" visibility="not-visible"/>
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
              <AdminDishCard title="Salada Ravanello" visibility="visible" />
              <AdminDishCard title="Peixe à Delícia" visibility="visible"/>
              <AdminDishCard title="Salada Ravanello" visibility="visible"/>
              <AdminDishCard title="Peixe à Delícia" visibility="visible"/>
              <AdminDishCard title="Salada Ravanello" visibility="visible"/>
              <AdminDishCard title="Peixe à Delícia" visibility="visible"/>
              <AdminDishCard title="Salada Ravanello" visibility="visible"/>
              <AdminDishCard title="Peixe à Delícia" visibility="visible"/>
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