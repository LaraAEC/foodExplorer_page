import { Container } from './styles';

import MenuSvg from '../../assets/menu.svg';
import LogoSvg from '../../assets/logo.svg';
import ReceiptSvg from '../../assets/receipt.svg';

export function UserMobileHeader() {
  return (
    <Container>
      <div className="box">
        <img
          src={ MenuSvg }
          alt="Imagem de 'menu'."
        />

        <div className="title">
          <img
            src={ LogoSvg }
            alt="Imagem de 'polígono azul'."
          />
          
            <h1>food explorer</h1>

        </div> 

        <img
          src={ ReceiptSvg }
          alt="Imagem de 'recibo/recebido/pedido'."
        />
      </div>
    </Container>
  );
}
