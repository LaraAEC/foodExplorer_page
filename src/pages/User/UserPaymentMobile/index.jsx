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
import { Input } from '../../../components/Input';
import { ButtonText } from '../../../components/ButtonText';
import { Button } from '../../../components/Button'; 
import { Footer } from '../../../components/Footer'; 


export function UserPaymentMobile() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const [showQRCode, setShowQRCode] = useState(true);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1); 
  }

  function handleButtonPayment() {
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

              <div className="columnRight">
                <h1>Pagamento</h1>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div className="wrapperPayment">
                          <button type= "button" className="buttonPayment"  onClick={() => setShowQRCode(true)}>
                            <img
                              src={PixSvg}
                              alt="Símbolo do aplicativo 'pix'."
                            />
                            Pix
                          </button>
                        </div>
                      </th>
                      <th>
                        <div className="wrapperPayment">
                          <button type= "button" className="buttonPayment"  onClick={() => setShowQRCode(false)}>
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
                      {showQRCode ? (
                            <img src={ImageQrCodePng} alt="Imagem de 'QRcode'." />
                          ) : (
                            <div className="cardDetails">
                              <label htmlFor="cardName">
                              Nome no Cartão
                              </label>
                              <Input
                                type="text"
                                id="cardName"
                                placeholder="Marina V Andrade"
                              />
                              <label htmlFor="cardNumber">
                              Número do Cartão
                              </label>
                              <Input
                                type="text"
                                id="cardNumber"
                                placeholder="0000 0000 0000 0000"
                              />
                              <div className="expirationAndCvc">
                                <div>
                                  <label htmlFor="expirationDate">
                                  Validade
                                  </label>
                                  <Input
                                    type="text"
                                    id="expirationDate"
                                    placeholder="07/25"
                                  />
                                </div>
                                <div>
                                  <label htmlFor="cvc">
                                    CVC
                                  </label>
                                  <Input
                                    type="text"
                                    id="cvc"
                                    placeholder="000"
                                  />
                                </div>
                              </div>
                
                            <div className="wrapperButtonPayment">
                              <Button
                              type="button"
                              className="buttonPayment"
                              title="Finalizar pagamento"
                              onClick={handleButtonPayment}
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