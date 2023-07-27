import { Container, Content } from './styles';

import { FiChevronLeft } from 'react-icons/fi';

import SaladSvg from '../../../assets/salad.svg';

import { useMediaQuery } from 'react-responsive';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import { AdminMobileHeader } from '../../../components/AdminMobileHeader';
import { AdminDesktopHeader } from '../../../components/AdminDesktopHeader';

import { ButtonText } from '../../../components/ButtonText';
import { Tag } from '../../../components/Tag';
import { Footer } from '../../../components/Footer'; 
import { Button } from '../../../components/Button';
import { TextArea } from '../../../components/TextArea';


export function AdminDishDetails() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const navigate = useNavigate();
  const params = useParams(); 
  
  function handleBack() { //funcionalidade de voltar com o botão 'voltar'
    navigate(-1); //para ser usado no botão de voltar e colocar o usuário na rota anterior
  }

  return (
    <Container>

      {isMobile ? <AdminMobileHeader /> : <AdminDesktopHeader />}

      <main>

        <Content>
          <div className="box">
            <div className="versionDesktopColumnOne">
              <div className="wrapperBack">
                  <ButtonText
                    title="Voltar"
                    icon={FiChevronLeft }
                    onClick={handleBack} 
                  />
                </div>

                <img
                className="photoDish"
                src={SaladSvg}
                alt="Foto do prato escolhido." 
                />
            </div>

            <div className="versionDesktopColumnTwo">
              <div className="details">
                <h2>Salada Ravanello</h2>

                <TextArea
                value="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial. Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial. Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial. Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
                "
                readOnly={true}
                
                />
                <div className="wrapperTags">
                  <Tag title="alface"/>
                  <Tag title="alface"/>
                  <Tag title="alface"/>
                  <Tag title="alface"/>
                  <Tag title="alface"/>
                  <Tag title="alface"/>
                </div> 
              </div>

              <div className="buttonEdit">
                <Button
                title="Editar prato"
                />
              </div>
            
            </div>

          </div>
        </Content>
    
      </main>

     <Footer /> 

    </Container>
  )
}