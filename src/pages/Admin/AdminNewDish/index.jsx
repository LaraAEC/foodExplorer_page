import { useState } from 'react'; //importando o hook de estado

import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import { api } from "../../../services/api";

import { Container, Content, DishImgInput } from './styles';

import { FiChevronLeft, FiShare } from 'react-icons/fi';

import SaladSvg from '../../../assets/salad.svg';

import { AdminMobileHeader } from '../../../components/AdminMobileHeader';
import { AdminDesktopHeader } from '../../../components/AdminDesktopHeader';

import { ButtonText } from '../../../components/ButtonText';
import { Ingredient } from '../../../components/Ingredient';
import { Footer } from '../../../components/Footer'; 
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { DishItem } from '../../../components/DishItem';


export function AdminNewDish() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const dishImg = {SaladSvg};

  const [title, setTitle] = useState(""); //hook que cria um estado, o de nome
  const [category, setCategory] = useState(""); //hook que cria o estado da categoria do prato
  const [price, setPrice] = useState(0); //hook que cria o estado do preço do prato
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  
  function handleBack() { //funcionalidade de voltar com o botão 'voltar'
    navigate(-1); //para ser usado no botão de voltar e colocar o usuário na rota anterior
  }


  function handleCreateDish(){ //Função que envia os dados cadastrados para o BD, utilizada no Button Criar Conta
    if(!title || !category || !price || !description) {
      return alert("Preencha todos os campos"); //return além do alerta pois preciso parar a função caso não tenha sido preenchido algum campo
    }

    api.post("/dishes", { title, description, price, category })
    .then(() => {
      alert("Prato criado com sucesso!");
      navigate("/"); //levando o usuário para adminHome
    })
    .catch(error => {
      if(error.response){ //se o erro tiver uma resposta do backend
        alert(error.response.data.message); //dá um alerta na mensagem dessa resposta desse erro, trazendo para o frontend a mensagem de AppError do backend
      } else { //se não houver nenhuma mensagem específica
        alert("Não foi possível cria o novo prato"); //dou uma mensagem mais genérica
      }
    });

  };




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
                <h2>Novo Prato</h2>
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
                  onChange={e => setTitle(e.target.value)}
                  /> 
                </div>

                <div className="wrapperCategory">
                  <label htmlFor="categorySelect">Categoria:</label>
                  <select id="categorySelect" onChange={e => setCategory(e.target.value)}>
                  <option value="Refeições">Refeições</option>
                  <option value="Sobremesas">Sobremesas</option>
                  <option value="Bebidas">Bebidas</option>
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
                      isNew={true}
                      placeholder="Adicionar"
                      //onChange={e => setNewTag(e.target.value)}
                      //value={newTag}
                      //onClick={handleAddTag}
                    />
                    
                   
                  </div>
                </div>

                <div className="wrapperPrice">
                  <label htmlFor="priceInput">Preço(R$):</label>    
                  <Input
                  id="priceInput"
                  type="text"
                  placeholder="R$ 00,00" 
                  onChange={e => setPrice(e.target.value)}
                  /> 
                </div>
              
              </div>

              <div className="wrapperDescription">
              <p>Descrição</p>
                <textarea
                  type="text"
                  //value=""
                  readOnly={false}
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                  onChange={e => setDescription(e.target.value)}>
                </textarea>
                
              </div>
             
              <div className="buttonSave">
                <Button
                title="Salvar alterações"
                onClick={handleCreateDish}
                />
              </div>

          </form>
        </Content>
    
      </main>

     <Footer /> 

    </Container>
  )
}
