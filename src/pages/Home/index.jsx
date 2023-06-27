import { Container, Content } from './styles';

import BannerSvg from '../../assets/banner.svg';

import { HeaderUserMobile } from '../../components/HeaderUserMobile';
import { HeaderUserDesktop } from '../../components/HeaderUserDesktop';
import { Section } from '../../components/Section';
import { DishCard } from '../../components/DishCard'; 
import { Footer } from '../../components/Footer'; 


export function Home() {
  return (
    <Container>

      <HeaderUserMobile/>

      <main>

        <Content>
          <div id="Banner">
            <img
                src={ BannerSvg }
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