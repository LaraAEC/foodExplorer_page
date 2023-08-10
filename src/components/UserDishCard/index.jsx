import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useCart } from '../../hooks/cart'

import { useMediaQuery } from 'react-responsive';

import LikeSvg from '../../assets/like.svg';
import LessSvg from '../../assets/less.svg';
import MoreSvg from '../../assets/more.svg';
import { FiChevronRight } from 'react-icons/fi';

import { Container, Content } from './styles';
import { Button } from '../../components/Button';
import { TextArea } from '../TextArea';


export function UserDishCard({ title, onClick, value, price, data, visibility, readyOnly, image, ...rest  }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const dishDescription = isMobile ? "" : <TextArea/>;

  const [imageDish, setImageDish] = useState(null);
  
  const  { cart, setCart } = useCart();

  const navigate = useNavigate();

  const [ amount, setAmount ] = useState(1);

  function handleDecrement() {
    if(amount === 1) {
      return alert("O número mínimo de itens por pedido é um.")

    } else {
      setAmount(prevState => prevState - 1);
    }
  };

  function handleIncrement() {
      setAmount(prevState => prevState + 1);
  };

  function handleIncludeNewItem() {
    const unit_price = data.price

     const newItem = {
      id: data.id,
      title: data.title,
      photo: imageDish,
      amount,
      unit_price,
      total_price: amount * unit_price,
     }

     setCart(prevState => [...prevState, newItem])
     setAmount(1)
    }

    console.log(cart);

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
                  <button onClick={() => handleDecrement()}>
                    <img
                      src={ LessSvg }
                      alt="Imagem 'símbolo de subtração."
                    />
                  </button>
                  <input readOnly value={amount.toString().padStart(2, '0')} />
                  <button onClick={() => handleIncrement()}>
                    <img
                      src={ MoreSvg }
                      alt="Imagem 'símbolo de adição."
                      />
                  </button>
                </div>
              </div>
              <Button title="incluir" onClick={handleIncludeNewItem} />
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