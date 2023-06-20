import { Container } from './styles';

import { NavBar } from '../../components/NavBar';
import BannerSvg from '../../assets/banner.svg'
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer'; 


export function Home() {
  return (
    <Container>

      <NavBar />

      <div id="Banner">
        <img
            src={ BannerSvg }
            alt="Imagem de 'polígono azul'."
          />
        <h2>Sabores Inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </div>

   

  
      <Footer />

    </Container>
  )
}