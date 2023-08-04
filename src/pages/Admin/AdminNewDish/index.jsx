import { useState } from 'react'; 

import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import { api } from "../../../services/api";

import { Container, Content, DishImgInput } from './styles';

import { FiChevronLeft, FiShare } from 'react-icons/fi';


import { AdminMobileHeader } from '../../../components/AdminMobileHeader';
import { AdminDesktopHeader } from '../../../components/AdminDesktopHeader';

import { ButtonText } from '../../../components/ButtonText';
import { Footer } from '../../../components/Footer'; 
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { DishItem } from '../../../components/DishItem';


export function AdminNewDish() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const [photoFile, setPhotoFile] = useState(null); ////criando o estado do arquivo selecionado, setando como nulo para receber avatar selecionado. Guarda o arquivo selecionado.

  const [title, setTitle] = useState(""); //hook que cria um estado, o de nome
  const [category, setCategory] = useState("Refeições"); //hook que cria o estado da categoria do prato
  const [price, setPrice] = useState(0); //hook que cria o estado do preço do prato
  const [description, setDescription] = useState("");

  const [ ingredients, setIngredients ] = useState([]); //Criando nosso estado que armazena as Tags digitados, ele começa como um array vazio.
  const [ newIngredient, setNewIngredient ] = useState(""); //Criando nosso estado que armazena a nova Tag, apenas um, o digitado da vez, inicializa como string vazia.

  const navigate = useNavigate();
  
  function handleBack() { //funcionalidade de voltar com o botão 'voltar'
    navigate(-1); //para ser usado no botão de voltar e colocar o usuário na rota anterior
  }

  async function handleCreateDish(){ //Função que envia os dados cadastrados do prato para a tabela Dishes
    
    if (!title) { 
      return alert("Precisa inserir um nome. Por favor, informe o nome do Prato.");
    }

    if (!category) { 
      return alert("Precisa inserir uma categoria. Por favor, informe a categoria do Prato.");
    }

    if (!price) { 
      return alert("Precisa inserir um valor de custo. Por favor, informe o preço do Prato.");
    }

    if (!description) { 
      return alert("Precisa inserir uma descrição. Por favor, informe a descrição do Prato.");
    }
    
    if (newIngredient) { //se houver newTag retornar esse alerta, e o próprio return pára a função, e ele será dao se cair no if, e cai no if se tiver algo nesse input de tag e só vai haver se não tiver clicado no mais, pois quando clica ele zera o input correspondente.
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.");
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("ingredients", ingredients);
    formData.append("description", description);
    formData.append("photo", photoFile);

    await api.post("/dishes", formData); //Passando os dados para a tabela dishes

    alert('Prato criado com sucesso!'); //em dando tudo certo dar alerta

    navigate("/"); //levando o usuário para a tela home

  };

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
                        onChange={e => setPhotoFile(e.target.files[0])}
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
                  type="number"
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
