import { Container, Content, Avatar } from './styles';

import { FiChevronLeft, FiShare } from 'react-icons/fi';

import SaladSvg from '../../../assets/salad.svg';

import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import { AdminMobileHeader } from '../../../components/AdminMobileHeader';
import { AdminDesktopHeader } from '../../../components/AdminDesktopHeader';

import { ButtonText } from '../../../components/ButtonText';
import { Tag } from '../../../components/Tag';
import { Footer } from '../../../components/Footer'; 
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { TextArea } from '../../../components/TextArea';


export function AdminNewDish() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const dishImg = {SaladSvg};

  //const navigate = useNavigate();
  
  /*function handleBack() { //funcionalidade de voltar com o botão 'voltar'
    navigate(-1); //para ser usado no botão de voltar e colocar o usuário na rota anterior
  }*/

  return (
    <Container>

      {isMobile ? <AdminMobileHeader /> : <AdminDesktopHeader />}

      <main>

        <Content>
          <div className="box">
            
              <div className="wrapperBack">
                  <ButtonText
                    title="Voltar"
                    icon={ FiChevronLeft }
                    //onClick={handleBack} 
                  />
              </div>

              <h2>Novo Prato</h2>

              <p>Imagem do prato</p>
              <Avatar>
                <label htmlFor="dishImg">
                  <div className="share">
                    <FiShare className="share-icon" />
                    <span>Selecione Imagem</span>
                  </div>
  
                  <input
                    id="dishImg"
                    type="file"
                    style={{ display: 'none' }}
                      //onChange={handleChangeAvatar}
                  />
                </label>
              </Avatar>

              <label htmlFor="dishInput">Nome:</label>    
              <Input
              id="dishInput"
              type="text"
              placeholder="Exemplo: Salada Ceasar" 
              onChange={e => setDish(e.target.value)}
              />  

              <label htmlFor="categorySelect">Categoria:</label>
              <select id="categorySelect">
              <option value="meals">Refeições</option>
              <option value="desserts">Sobremesas</option>
              <option value="drinks">Bebidas</option>
              </select>

              <p>Ingredientes</p>
              <div className="wrapperTags">
                <Tag title="pão naan"/>
                <Tag title="alface"/>
                <Tag title="camarão"/>
                <Tag title="tomates"/>
              </div>

              <label htmlFor="priceInput">Preço:</label>    
              <Input
              id="priceInput"
              type="text"
              placeholder="R$ 00,00" 
              onChange={e => setDish(e.target.value)}
              /> 

              <p>Descrição</p>
              <TextArea
              type="text"
              value=""
              readOnly={false}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
              />

              <div className="buttonEdit">
                <Button
                title="Salvar alterações"
                />
              </div>

          </div>
        </Content>
    
      </main>

     <Footer /> 

    </Container>
  )
}