import { Container, Content } from './styles';

import BannerSvg from '../../assets/banner.svg';

import { useMediaQuery } from 'react-responsive';

import { UserMobileHeader } from '../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../components/UserDesktopHeader';
import { Section } from '../../components/Section';
import { DishCard } from '../../components/DishCard'; 
import { Footer } from '../../components/Footer'; 



export function UserHome() {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container>

      {isMobile ? <UserMobileHeader /> : <UserDesktopHeader />}

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
         
          </Section>

          <Section title="Sobremesas">
          
          </Section>

          <Section title="Bebidas">
         
          </Section>

        </Content>

        <Footer />

      </main>

    </Container>
  )
}