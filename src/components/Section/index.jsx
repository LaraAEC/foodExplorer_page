import { Container } from "./styles";
import { Carousel } from '../../components/Carousel';

export function Section({ title }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Carousel />
    </Container>
  );
}