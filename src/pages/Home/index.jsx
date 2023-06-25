import { Container, Content } from './styles';

import BannerSvg from '../../assets/banner.svg';

import { NavBar } from '../../components/NavBar';
import { Section } from '../../components/Section';
import { DishCard } from '../../components/DishCard'; 
import { Footer } from '../../components/Footer'; 


export function Home() {
  return (
    <Container>

      <NavBar />

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
          </Section>

          <Section title="Sobremesas">
            <DishCard title="Salada Ravanello" />
            <DishCard title="Filé ao molho Madeira" />
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