import { useState } from 'react'; 
import { api } from "../../../services/api";

import { Container, Content, DishImgInput } from './styles';

import { FiChevronLeft, FiShare } from 'react-icons/fi';

import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import { AdminMobileHeader } from '../../../components/AdminMobileHeader';
import { AdminDesktopHeader } from '../../../components/AdminDesktopHeader';

import { ButtonText } from '../../../components/ButtonText';
import { Ingredient } from '../../../components/Ingredient';
import { Footer } from '../../../components/Footer'; 
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { DishItem } from '../../../components/DishItem';


export function AdminDishEdit() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [ ingredients, setIngredients ] = useState([]); 
  const [ newIngredient, setNewIngredient ] = useState(""); 

  //const dishImg = {SaladSvg};

  const navigate = useNavigate();
  
  function handleBack() { 
    navigate(-1); 
  }

  function handleAddIngredient() { //funcionalidade que adiciona a nova Tag, digita pelo usuário, na lista de tags
    setIngredients(prevState => [...prevState, newIngredient]); //Setando meu array estado tags - mantenho o que tinha antes, mais a nova Tag, e com o spread operator tudo fica dentro de um único array, mesmo nível
    setNewIngredient("");//Após usar o estado newTag na linha superior, eu zero ele para receber depois outra Tag, sem acúmulo nesta linha.
  }

  function handleRemoveIngredient(deleted) { //funcionalidade para remover tag, recebe como parâmetro o tag que deseja remover
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted)); //filtrando na lista de tags atual (atual = prevState) a partir do tag que quero deletar, refazer a lista com todos os itens que são diferentes do tag que estou deletando
    //Tudo sendo feito dentro de setTags, pois ele já vai me devolver a nova lista
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
                   
                  {
                    ingredients.map((ingredient, index) => (
                      <DishItem
                        isNew={false}
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />  
                    ))
                  }
            
                  <DishItem
                    isNew={true}
                    placeholder="Adicionar"
                    onChange={e => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    onClick={handleAddIngredient}
                  />
                   
                  </div>
                </div>

                <div className="wrapperPrice">
                  <label htmlFor="priceInput">Preço(R$):</label>    
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