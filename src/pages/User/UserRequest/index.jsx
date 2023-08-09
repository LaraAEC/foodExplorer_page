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
      navigate("/payment"); 
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

              <div className="container">
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