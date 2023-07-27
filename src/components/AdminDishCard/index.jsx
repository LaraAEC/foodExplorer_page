import { useNavigate } from 'react-router-dom';

import { Container, Content } from './styles';

import EditSvg from '../../assets/edit.svg';
import SaladSvg from '../../assets/salad.svg';

import { useMediaQuery } from 'react-responsive';

import { FiChevronRight } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { ButtonAmount } from '../../components/ButtonAmount';
import { TextArea } from '../TextArea';

export function AdminDishCard({ title, key, value, price, data, visibility, ...rest }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const dishDescription = isMobile ? "" : <TextArea/>;

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`); //levando o usuário para a tela de details e mandando um parâmetro na rota
  }

  function handleButtonDishEdit() {
    navigate("/edit/:id");
  }
  
  return (
    <Container>
      <main>
        <Content>
            <img
              className="dish"
              src={ SaladSvg }
              alt="Imagem de 'salada verde'."
            />

            <button type="button" className="titleDishButton" onClick={() => handleDetails(key)}>
              <h2 className="titleDish">
                {title}
                <FiChevronRight />
              </h2>
            </button>
 
            <p className="price">{price}</p>
          
        </Content>

        <button type='button' className="pencil" onClick={handleButtonDishEdit}>
        <img
          src={ EditSvg }
          alt="Imagem de 'coração de 'curtidas''."
        />

        </button>
      
      </main>
    </Container>
  )

}