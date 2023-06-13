import { Container } from './styles';

import PolygonBiggerSvg from '../../assets/polygonBigger.svg';

export function HeaderSign() {
  return (
    <Container>
      
        <img
          src={PolygonBiggerSvg}
          alt="Imagem de 'polígono azul'."
        />
        <h1>food explorer</h1>

    </Container>
  );
}
