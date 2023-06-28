import { Container, Content } from './styles';

import MobileBannerPng from '../../assets/mobileBanner.png';
import DesktopBannerPng from '../../assets/desktopBanner.png';

import { useMediaQuery } from 'react-responsive';

import { UserMobileHeader } from '../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../components/UserDesktopHeader';

import { Section } from '../../components/Section';
import { DishCard } from '../../components/DishCard'; 
import { Footer } from '../../components/Footer'; 


export function UserHome() {

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const imageUrl = isMobile ? MobileBannerPng : DesktopBannerPng;


  return (
    <Container>

      {isMobile ? <UserMobileHeader /> : <UserDesktopHeader />}

      <main>

        <Content>
          <div id="Banner">
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
            <DishCard title="Salada Ravanello" />
            <DishCard title="Peixe à Delícia" />
            <DishCard title="Salada Ravanello" />
            <DishCard title="Peixe à Delícia" />
          </Section>

          <Section title="Sobremesas">
            <DishCard title="Mousse de morango" />
            <DishCard title="Pudim" />
          </Section>

          <Section title="Bebidas">
            <DishCard title="Espresso" />
            <DishCard title="Suco de Maracujá" />
          </Section>

        </Content>

        <Footer />

      </main>

    </Container>
  )
}