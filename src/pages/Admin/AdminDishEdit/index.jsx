import { Container, Content, DishImgInput } from './styles';

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
import { DishItem } from '../../../components/DishItem';


export function AdminDishEdit() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const dishImg = {SaladSvg};

  const navigate = useNavigate();
  
  function handleBack() { //funcionalidade de voltar com o botão 'voltar'
    navigate(-1); //para ser usado no botão de voltar e colocar o usuário na rota anterior
  }

  return (
    <Container>

      {isMobile ? <AdminMobileHeader /> : <AdminDesktopHeader />}

      <main>

        <Content>
          <form>
            
              <div className="wrapperBack">
                  <ButtonText
                    title="Voltar"
                    icon={ FiChevronLeft }
                    onClick={handleBack} 
                  />
              </div>

              <div className="wrapperTitle">
                <h2>Editar Prato</h2>
              </div>

              <div className="rowVersionDesktopOne">
                <div className="selectImg">
                  <p>Imagem do prato</p>
                  <DishImgInput>
                    <label htmlFor="dishImg">
                      <div className="share">
                        <FiShare className="share-icon" />
                        <span>Selecione Imagem</span>
                      </div>
      
                      <input
                        id="dishImg"
                        type="file"
                        //onChange={handleChangeAvatar}
                      />
                    </label>
                  </DishImgInput>
                </div>
               
                <div className="wrapperName">
                  <label htmlFor="dishInput">Nome:</label>    
                  <Input
                  id="dishInput"
                  type="text"
                  placeholder="Exemplo: Salada Ceasar" 
                  onChange={e => setDish(e.target.value)}
                  /> 
                </div>

                <div className="wrapperCategory">
                  <label htmlFor="categorySelect">Categoria:</label>
                  <select id="categorySelect">
                  <option value="meals">Refeições</option>
                  <option value="desserts">Sobremesas</option>
                  <option value="drinks">Bebidas</option>
                  </select>
                </div>
                
              </div>
             
              <div className="rowVersionDesktopTwo">
                <div className="wrapperIngredients">
                  <p>Ingredientes</p>
                  <div className="wrapperTags">
                   
                    < DishItem
                      isNew={false}
                      value={"Pão Naan"}
                      //onChange={e => setNewTag(e.target.value)}
                      //value={newTag}
                      //onClick={handleAddTag}
                    />

                    < DishItem
                      isNew={false}
                      value={"Pão Naan"}
                      //onChange={e => setNewTag(e.target.value)}
                      //value={newTag}
                      //onClick={handleAddTag}
                    />

                    < DishItem
                      isNew={false}
                      value={"Pão Naan"}
                      //onChange={e => setNewTag(e.target.value)}
                      //value={newTag}
                      //onClick={handleAddTag}
                    />

                    < DishItem
                      isNew
                      placeholder="Adicionar"
                      //onChange={e => setNewTag(e.target.value)}
                      //value={newTag}
                      //onClick={handleAddTag}
                    />
                    
                   
                  </div>
                </div>

                <div className="wrapperPrice">
                  <label htmlFor="priceInput">Preço:</label>    
                  <Input
                  id="priceInput"
                  type="text"
                  placeholder="R$ 40,00" 
                  onChange={e => setDish(e.target.value)}
                  /> 
                </div>
              
              </div>

              <div className="wrapperDescription">
              <p>Descrição</p>
                <textarea
                  type="text"
                  //value=""
                  readOnly={false}
                  placeholder="A Salada César é uma opção refrescante para o verão."
                  onChange={e => setDescription(e.target.value)}>
                </textarea>
                
              </div>
             
              <div className="buttonSaveOrDelete">
                <Button className="buttonExclude"
                title="Excluir prato"
                />
                <Button
                title="Salvar alterações"
                />
              </div>

          </form>
        </Content>
    
      </main>

     <Footer /> 

    </Container>
  )
}