import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';


import { Container, Content } from './styles';

import LikeSvg from '../../assets/like.svg';
import SaladSvg from '../../assets/salad.svg';

import { useMediaQuery } from 'react-responsive';

import { FiChevronRight } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { ButtonAmount } from '../../components/ButtonAmount';
import { TextArea } from '../TextArea';

export function UserDishCard({ title, value, float, data, visibility, readyOnly, ...rest  }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const dishDescription = isMobile ? "" : <TextArea/>;

  const navigate = useNavigate();

  const [dishes, setDishes] = useState([]); //criando meu estado dos pratos e será um array

  useEffect(() => { //Buscando os pratos
    async function fetchDishes(){ //buscando os pratos sem filtro 
      const response = await api.get("/dishes"); //buscando no backend na rota '/notes', e enviando através de uma query o nome do title passando o conteúdo do search e as tags com o conteúdo das tags selecionadas
      setDishes(response.data); //passando os dados da resposta do backend sobre os pratos
    }

    fetchDishes(); //executando a função acima declarada, foi declarada neste escopo pois só aqui será usada

  }, []);

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

            <div className="textArea">
              {
              isMobile ? ""
              : 
              <TextArea
              value={value}
              readOnly={true}
              className= {visibility}
              {...rest}
              />
              }
            </div>
           

            <p className="price" > {float} </p>

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