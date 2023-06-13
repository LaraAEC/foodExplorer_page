import { Container } from './styles';

import MenuSvg from '../../assets/menu.svg';
import PolygonSvg from '../../assets/polygon.svg';
import ReceiptSvg from '../../assets/receipt.svg';

export function NavBar() {
  return (
    <Container>
      <div id="box">
        <img
          src={MenuSvg}
          alt="Imagem de 'menu'."
        />

        <div id="title">
        <img
          src={PolygonSvg}
          alt="Imagem de 'polígono azul'."
        />
        <h1>food explorer</h1>
        </div>

        <img
          src={ReceiptSvg}
          alt="Imagem de 'recibo/recebido/pedido'."
        />
      </div>

    </Container>
  );
}
