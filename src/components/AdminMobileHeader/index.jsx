import { Container } from './styles';

import MenuSvg from '../../assets/menu.svg';
import LogoSvg from '../../assets/logo.svg';

export function AdminMobileHeader() {
  return (
    <Container>
      <div className="box">
        <img className="menuSvg"
          src={ MenuSvg }
          alt="Imagem de 'menu'."
        />

        <div className="title">
          <img className="logoSvg"
            src={ LogoSvg }
            alt="Imagem de 'polígono azul'."
          />

          <div className="wrapper">
            <h1>food explorer</h1>
            <p>admin</p>
          </div>

        </div> 

      </div>
    </Container>
  );
}
