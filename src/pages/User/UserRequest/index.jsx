import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import { useCart } from '../../../hooks/cart';

import { useRef } from 'react';

import { useMediaQuery } from 'react-responsive';

import { FiChevronLeft } from 'react-icons/fi';

import { UserMobileHeader } from '../../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../../components/UserDesktopHeader';

import { Container, Content } from './styles';
import { Section } from '../../../components/Section';
import { ButtonText } from '../../../components/ButtonText';
import { Button } from '../../../components/Button'; 
import { Footer } from '../../../components/Footer'; 
import { UserDishCard } from './../../../components/UserDishCard/index';
import { UserRequestCard } from './../../../components/UserRequestCard';


export function UserRequest() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const { cart, setCart } = useCart();

  const [totalPrice, setTotalPrice] = useState("")

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1); 
  }

  function handleButtonNext() {
      navigate("/payment"); 
  }

  function handleRemoveItem(deleted) {
    setCart(state => state.filter(item => item.id !== deleted))
  }

  useEffect(() => {
    const carts = cart.map(item => item.total_price);
    const sum = carts.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(sum.toFixed(2));
  }, [cart]);
  

  return (

      <Container>

        {isMobile ? <UserMobileHeader /> : <UserDesktopHeader onChange={e => setSearch(e.target.value)} />}

        <main>

          <Content>
            <div className="page">
              
              <div className="wrapperBack">
                  <ButtonText
                  title="Voltar"
                  icon={FiChevronLeft }
                  onClick={handleBack} 
                />
              </div>

              <div className="container">
                <div className="pageTitle">
                  <h1>Meu pedido</h1>
                </div>

              <Section>
                {cart && 

                <ul className="request">
                  {
                    cart.map((item, index) => (
                      <UserRequestCard
                        key={index}
                        data={{
                          title: item.title,
                          imageDish: item.photo,
                          price: item.unit_price,
                          amount: item.amount
                        }}
                      onClick = {() => handleRemoveItem(item.id)}
                      />
                    )) 
                  }            
                </ul>                          
                }           
              </Section>

              <div className="total">
                <h2>{`Total: R$ ${totalPrice}`}</h2>
              </div>
                                        
              <footer className="footerButton">
                <div className="buttonNext">
                  <Button
                  type="button"
                  className="buttonNext"
                  title="Avançar"
                  onClick={handleButtonNext}
                  >
                  </Button>
                </div>
              </footer>
             </div>

            </div>
          </Content>

        </main>

        <Footer />

      </Container>    
  )
}