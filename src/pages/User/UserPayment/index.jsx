import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import { useCart } from '../../../hooks/cart';

import { useRef } from 'react';

import { useMediaQuery } from 'react-responsive';

import { FiChevronLeft } from 'react-icons/fi';
import PixSvg from '../../../assets/pix.svg';
import CardSvg from '../../../assets/card.svg';
import ImageQrCodePng from '../../../assets/qrcode.png';

import { UserMobileHeader } from '../../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../../components/UserDesktopHeader';

import { Container, Content } from './styles';
import { Section } from '../../../components/Section';
import { ButtonText } from '../../../components/ButtonText';
import { Button } from '../../../components/Button'; 
import { Footer } from '../../../components/Footer'; 
import { UserRequestCard } from './../../../components/UserRequestCard';


export function UserPayment() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const [showQrCode, setShowQrCode] = useState(false);

  const { cart, setCart } = useCart();
  const [totalPrice, setTotalPrice] = useState("")

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1); 
  }

  function handleShowQrCode(boolean) {
    setShowQrCode(boolean);
  }
  

  function handleButtonCompletePayment() {
    navigate("/");
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

              {
                isDesktop &&

              <div className='columnLeft'>
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
                  <h2>Total: R$ 103,30</h2>
                </div>               

              </div>
            }

              <div className="columnRight">
                <h1>Pagamento</h1>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div className="wrapperPaymentMethod"> 
                          <button type= "button" className="buttonPaymentMethod" onClick={() => handleShowQrCode(true)}>
                            <img
                              src={PixSvg}
                              alt="Símbolo do aplicativo 'pix'."
                            />
                            Pix
                          </button>
                        </div>
                      </th>
                      <th>
                        <div className="wrapperPaymentMethod">
                          <button type= "button" className="buttonPaymentMethod" onClick={() => handleShowQrCode(false)}>
                            <img
                              src={CardSvg}
                              alt="Imagem de um 'cartão de crédito/débito'."
                            />
                            Cartão
                          </button> 
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="TableContent" colSpan="2">
                      {showQrCode ? (
                            <img src={ImageQrCodePng} alt="Imagem de 'QRcode'." />
                          ) : (
                            <form className="cardDetails">
                              <div className="divCardInputs">
                                <label htmlFor="cardName">
                                Nome no Cartão
                                </label>
                                <input
                                  type="text"
                                  id="cardName"
                                  placeholder="Marina V Andrade"
                                />
                              </div>
                              
                              <div className="divCardInputs">
                                <label htmlFor="cardNumber">
                                Número do Cartão
                                </label>
                                <input
                                  type="number"
                                  id="cardNumber"
                                  placeholder="0000 0000 0000 0000"
                                />
                              </div>
                              
                              <div className="expirationAndCvc">
                                <div className="divExpirationAndCvc">
                                  <label htmlFor="expirationDate">
                                  Validade
                                  </label>
                                  <input
                                    type="text"
                                    id="expirationDate"
                                    placeholder="07/25"
                                  />
                                </div>
                              <div className="divExpirationAndCvc">
                                <label htmlFor="cvc">
                                  CVC
                                </label>
                                <input
                                  type="number"
                                  id="cvc"
                                  placeholder="000"
                                />
                                </div>
                              </div>
                
                              <div className="wrapperButtonCompletePayment">
                                <Button
                                type="button"
                                className="buttonPayment"
                                title="Finalizar pagamento"
                                onClick={handleButtonCompletePayment}
                                >
                                </Button>
                              </div>
                            </form>
                          )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> 

            </div>
          </Content>
        </main>
        <Footer />
      </Container>    
  )
}