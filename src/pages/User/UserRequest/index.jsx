import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

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


export function UserRequest() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1); 
  }

  function handleButtonNext() {
    if (isMobile) {
      navigate("/paymentMob");
    } else {
      navigate("/paymentDesk");
    } 
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
  
              <div className="pageTitle">
                <h1>Meu pedido</h1>
              </div>

              <Section>

                <div className="request">
                  <p>Título do prato</p>
                  <button
                  type="button"
                  className="buttonRemoveFavorite"
                  //onClick={handleRemoveFavorite}
                  >
                    <p>Remover dos Favoritos</p>
                  </button>
                
                  <h2>Total: R$ 103,30</h2>
                </div>

              </Section>
                            
             
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
          </Content>

        </main>

        <Footer />

      </Container>    
  )
}