import { Container, Content } from './styles';

import EditSvg from '../../assets/edit.svg';
import SaladSvg from '../../assets/salad.svg';

import { useMediaQuery } from 'react-responsive';

import { FiChevronRight } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { ButtonAmount } from '../../components/ButtonAmount';
import { TextArea } from '../TextArea';

export function AdminDishCard({ title, visibility }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const dishDescription = isMobile ? "" : <TextArea/>;
  
  return (
    <Container>
      <main>
        <Content>
            <img
              className="dish"
              src={ SaladSvg }
              alt="Imagem de 'salada verde'."
            />

            <button type="button" className="titleDishButton">
              <h2 className="titleDish">
                {title}
                <FiChevronRight />
              </h2>
            </button>
 
            <p className="price">R$ 49,97</p>
          
        </Content>

        <img
          className="pencil"
          src={ EditSvg }
          alt="Imagem de 'coração de 'curtidas''."
        />
      </main>
    </Container>
  )

}