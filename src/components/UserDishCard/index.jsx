import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { useMediaQuery } from 'react-responsive';

import { Container, Content } from './styles';
import { Button } from '../../components/Button';
import { TextArea } from '../TextArea';

import LikeSvg from '../../assets/like.svg';
import LessSvg from '../../assets/less.svg';
import MoreSvg from '../../assets/more.svg';
import { FiChevronRight } from 'react-icons/fi';


export function UserDishCard({ title, onClick, value, price, data, visibility, readyOnly, image, ...rest  }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const dishDescription = isMobile ? "" : <TextArea/>;

  const [imageDish, setImageDish] = useState(null);

  const [total, setTotal] = useState(price);

  const [cart, setCart] = useState([]);
 
 
  const navigate = useNavigate();


  let [ number, setNumber ] = useState(0);

  function Decrement(number) {
    if(number == 0) {
      setNumber(number);
    } else {
      setNumber(number - 1);
    }
  };

  function Increment(number) {
    setNumber(number + 1);
  };

 function handleInclude(number, id, price) {
    if (number === 0) {
      alert("É necessário selecionar a quantidade de itens.");
    } 
    else {
      const amount = number;
      const priceAsNumber = parseFloat(price.replace("R$", ""));
      const total = priceAsNumber * amount; 

      setTotal(total); 

      const includedItem = {
        amount,
        dish_id: data.id,
        price,
        total
      };
     console.log(includedItem);
    
   
    }
    
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
                <div className="counter">
                  <button onClick={() => Decrement(number)}>
                    <img
                      src={ LessSvg }
                      alt="Imagem 'símbolo de subtração."
                    />
                  </button>
                  <input readOnly value={number.toString().padStart(2, '0')} />
                  <button onClick={() => Increment(number)}>
                    <img
                      src={ MoreSvg }
                      alt="Imagem 'símbolo de adição."
                      />
                  </button>
                </div>
              </div>
              <Button title="incluir" onClick={() => handleInclude(number, data.id, price)} />
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