import { Container, Content } from './styles';

import LikeSvg from '../../assets/like.svg';
import SaladSvg from '../../assets/salad.svg';

import { useMediaQuery } from 'react-responsive';

import { FiChevronRight } from 'react-icons/fi';

import { Button } from '../../components/Button';

import { ButtonAmount } from '../../components/ButtonAmount';

export function DishCard({ title }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const dishDescription = isMobile ? "" : "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim";
  
  return (
    <Container>
      <main>
        <Content>
            <img
              className="dish"
              src={ SaladSvg }
              alt="Imagem de 'salada verde'."
            />

            <h2 className="titleDish">
              {title}
              <FiChevronRight />
            </h2>

            <p className="dishDescription">
              {dishDescription}
            </p>

            <p className="price">R$ 49,97</p>

            <div className="wrapperAmountInclude">
              <div className="amount">
                <ButtonAmount />
              </div>

              <Button title="incluir" />
              
            </div>
          
        </Content>

        <img
          className="heart"
          src={ LikeSvg }
          alt="Imagem de 'coração de 'curtidas''."
        />
      </main>
    </Container>
  )

}