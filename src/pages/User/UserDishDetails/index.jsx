import { Container, Content } from './styles';

import MobileBannerPng from '../../../assets/mobileBanner.png';
import DesktopBannerPng from '../../../assets/desktopBanner.png';

import { FiChevronLeft } from 'react-icons/fi';

import SaladSvg from '../../../assets/salad.svg';
import ReceiptSvg from '../../../assets/receipt.svg';

import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import { UserMobileHeader } from '../../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../../components/UserDesktopHeader';

import { ButtonText } from '../../../components/ButtonText';
import { Tag } from '../../../components/Tag';
import { Footer } from '../../../components/Footer'; 
import { ButtonAmount } from './../../../components/ButtonAmount';
import { Button } from '../../../components/Button';
import { TextArea } from '../../../components/TextArea';


export function UserDishDetails() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  //const navigate = useNavigate();
  
  /*function handleBack() { //funcionalidade de voltar com o botão 'voltar'
    navigate(-1); //para ser usado no botão de voltar e colocar o usuário na rota anterior
  }*/

  
  return (
    <Container>

      {isMobile ? <UserMobileHeader /> : <UserDesktopHeader />}

      <main>

        <Content>
          <div className="versionDesktopColumnOne">
            <div className="wrapperBack">
                <ButtonText
                  title="Voltar"
                  icon={FiChevronLeft }
                  //onClick={handleBack} 
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

            <div className="order">
              <ButtonAmount />
              <div className="wrapperButton">
                <img className="receipt"
                  src={ ReceiptSvg }
                  alt="Imagem de 'recibo/recebido/pedido'."
                />
                <Button
                title="pedir - R$ 25,00"
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