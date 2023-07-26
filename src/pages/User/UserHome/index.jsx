import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import { useRef } from 'react';

import { useMediaQuery } from 'react-responsive';


import { Container, Content, Arrow } from './styles';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import MobileBannerPng from '../../../assets/mobileBanner.png';
import DesktopBannerPng from '../../../assets/desktopBanner.png';

import { UserMobileHeader } from '../../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../../components/UserDesktopHeader';

import { Section } from '../../../components/Section';
import { UserDishCard } from '../../../components/UserDishCard'; 
import { Footer } from '../../../components/Footer'; 


export function UserHome() {
 
  const scrollMealList = useRef(null);
  const scrollDrinkList = useRef(null);
  const scrollDessertList = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const imageUrl = isMobile ? MobileBannerPng : DesktopBannerPng;

  const navigate = useNavigate();

  const [dishes, setDishes] = useState([]); //criando meu estado dos pratos e será um array

  useEffect(() => { //Buscando os pratos
    async function fetchDishes(){ //buscando os pratos sem filtro 
      const response = await api.get("/dishes"); //buscando no backend na rota '/notes', e enviando através de uma query o nome do title passando o conteúdo do search e as tags com o conteúdo das tags selecionadas
      setDishes(response.data); //passando os dados da resposta do backend sobre os pratos
    }

    fetchDishes(); //executando a função acima declarada, foi declarada neste escopo pois só aqui será usada
   
  }, []);


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
              {
                dishes.map(dish => {
                  if(dish.category == "Refeições") {
                    return ( 
                      <UserDishCard
                      key={String(dish.id)}
                      data={dish}
                      onClick={() => handleDetails(dish.id)}
                      title={dish.title}
                      value={dish.description}
                      float={dish.price}
                      type="text"
                      visibility="not-visible"
                      />
                    )
                  }
                })   
              }
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
            {
                dishes.map(dish => {
                  if(dish.category == "Sobremesas") {
                    return ( 
                      <UserDishCard
                      key={String(dish.id)}
                      data={dish}
                      onClick={() => handleDetails(dish.id)}
                      title={dish.title}
                      value={dish.description}
                      float={dish.price}
                      type="text"
                      visibility="not-visible"
                      />
                    )

                  }
                })   
              }
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
            {
                dishes.map(dish => {
                  if(dish.category == "Bebidas") {
                    return ( 
                      <UserDishCard
                      key={String(dish.id)}
                      data={dish}
                      onClick={() => handleDetails(dish.id)}
                      title={dish.title}
                      value={dish.description}
                      float={dish.price}
                      type="text"
                      visibility="not-visible"
                      />
                    )

                  }
                })   
              }
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