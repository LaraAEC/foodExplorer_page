import { Container, Content } from './styles';

import LikeSvg from '../../assets/like.svg';
import SaladSvg from '../../assets/salad.svg';

import { FiChevronRight } from 'react-icons/fi';

import { Button } from '../../components/Button';

import { ButtonAmount } from '../../components/ButtonAmount';

export function DishCard({ title }) {
  return (
    <Container>
      <main>
        <Content>
            <img
              src={ SaladSvg }
              alt="Imagem de 'salada verde'."
            />

            <p>
              {title}
              <FiChevronRight />
            </p>

            <p id="price">R$ 49,97</p>

            <div id="amount">
             <ButtonAmount />
            </div>

            <div id="buttonInclude">
              <Button title="incluir" />
            </div>
        </Content>

        <img
          src={ LikeSvg }
          alt="Imagem de 'coração de 'curtidas''."
        />
      </main>
    </Container>
  )

}