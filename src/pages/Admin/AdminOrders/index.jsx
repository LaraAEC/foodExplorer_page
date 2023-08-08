import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import { useRef } from 'react';

import { useMediaQuery } from 'react-responsive';

import { FiChevronLeft } from 'react-icons/fi';
import RedEllipseSvg  from '../../../assets/redEllipse.svg';
import OrangeEllipseSvg  from '../../../assets/orangeEllipse.svg'; 
import GreenEllipseSvg  from '../../../assets/greenEllipse.svg';


import { UserMobileHeader } from '../../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../../components/UserDesktopHeader';

import { Container, Content } from './styles';
import { Section } from '../../../components/Section';
import { ButtonText } from '../../../components/ButtonText';
import { Button } from '../../../components/Button'; 
import { Footer } from '../../../components/Footer'; 


export function AdminOrders() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

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

              <div className="container">
                <div className="pageTitle">
                  <h1>Pedidos</h1>
                </div>

              <Section>
                <div className="order">

                {
                    isDesktop &&
                <div className="rowTitle">
                  <span>
                      Status
                  </span>

                  <span>
                      Código
                  </span>

                  <span>
                      Detalhamento
                  </span>

                  <span>
                      Data e hora
                  </span>
                </div>

                }

                  <p>Aqui segue a descrição com quantidade e título dos pratos pedidos,
                    o pedido completo de um carinho/request de um usuário.</p>

                  <div className="wrapperStatus">
                    <label htmlFor="statusSelect">Status:</label>
                    <select id="statusSelect"
                    //value={status}
                    //onChange={e => setStatus(e.target.value)}
                    >
                 
                    <option value="Pendente">Pendente</option>
                    <option value="Preparando">Preparando</option>
                    <option value="Entregue">Entregue</option>
                    </select>
                  </div>        
                </div>

              </Section>

                                        
              <footer className="footerButton">
                <div className="buttonNext">
                  <Button
                  type="button"
                  className="buttonUpdateStatus"
                  title="Atualizar pedidos"
                  //onClick={handleButtonUpdateStatus}
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