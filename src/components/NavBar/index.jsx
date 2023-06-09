import { Container } from './styles';

export function NavBar() {
  return (
    <Container>
      <div id="box">
        <img
        src="../../assets/menu.svg"
        alt="Imagem de 'menu'."
        />

        <div id="title">
        <img
          src="../../assets/polygon.svg"
          alt="Imagem de 'polígono azul'."
        />
        <h1>food explorer</h1>
        </div>

        <img
          src="../../assets/receipt.svg"
          alt="Imagem de 'recibo/recebido/pedido'."
        />
      </div>

    </Container>
  );
}
