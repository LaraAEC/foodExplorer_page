import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { useMediaQuery } from 'react-responsive';

import { Container, Content } from './styles';

import LikeSvg from '../../assets/like.svg';

import { FiChevronRight } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { ButtonAmount } from '../../components/ButtonAmount';
import { TextArea } from '../TextArea';

export function UserDishCard({ title, onClick, value, price, data, visibility, readyOnly, image, ...rest  }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const dishDescription = isMobile ? "" : <TextArea/>;

  const [imageDish, setImageDish] = useState(null);

  const navigate = useNavigate();

  const [dishes, setDishes] = useState([]); 

  function handleDetails(id) {
    navigate(`/details/${id}`); 
  }

    useEffect(() => {
    async function fetchImageDish () {
        if(image) {
            setImageDish(`${api.defaults.baseURL}/files/${image}`);
        }
    }
    fetchImageDish();
}, [image])

  return (
    <Container>
      <main>
        <Content>
            <img
              className="dish"
              src={imageDish}
              alt="Imagem do prato."
            />

            <button type="button" className="titleDishButton" onClick={onClick}>
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
           
            <p className="price"> {price} </p>

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