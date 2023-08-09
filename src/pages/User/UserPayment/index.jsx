import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

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


export function UserPayment() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1023 });

  const [showQrCode, setShowQrCode] = useState(false);


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
                  <div className="request">
                    <p> photo 2 x Título do prato e botão remover</p>
                    <p> photo 2 x Título do prato e botão remover</p>
                    <p> photo 3 x Título do prato e botão remover</p>
                    <p> photo 2 x Título do prato e botão remover</p>
                    <p> photo 4 x Título do prato e botão remover</p>
                    <p> photo 1 x Título do prato e botão remover</p>
                    <p> photo 1 x Título do prato e botão remover</p>
                    <p> photo 2 x Título do prato e botão remover</p>
                    <p> photo 2 x Título do prato e botão remover</p>
                    <p> photo 2 x Título do prato e botão remover</p>
                    <p> photo 3 x Título do prato e botão remover</p>
                    <p> photo 2 x Título do prato e botão remover</p>
                    <p> photo 4 x Título do prato e botão remover</p>
                    <p> photo 1 x Título do prato e botão remover</p>
                    <p> photo 1 x Título do prato e botão remover</p>
                    <p> photo 2 x Título do prato e botão remover</p>              
                  </div>
                </Section>

                <div className="total">
                  <h2>Total: R$ 103,30</h2>
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
                            <div className="cardDetails">
                              <div className="divCardDetails">
                                <label htmlFor="cardName">
                                Nome no Cartão
                                </label>
                                <input
                                  type="text"
                                  id="cardName"
                                  placeholder="Marina V Andrade"
                                />
                              </div>
                              
                              <div className="divCardDetails">
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
                            </div>
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