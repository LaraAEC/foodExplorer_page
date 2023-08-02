
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';

import { useMediaQuery } from 'react-responsive';

import { Container, Content } from './styles';

import { FiChevronLeft } from 'react-icons/fi';

import ReceiptSvg from '../../../assets/receipt.svg';

import { UserMobileHeader } from '../../../components/UserMobileHeader';
import { UserDesktopHeader } from '../../../components/UserDesktopHeader';

import { ButtonText } from '../../../components/ButtonText';
import { Ingredient } from '../../../components/Ingredient';
import { Footer } from '../../../components/Footer'; 
import { ButtonAmount } from './../../../components/ButtonAmount';
import { Button } from '../../../components/Button';
import { TextArea } from '../../../components/TextArea';


export function UserDishDetails() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const params = useParams(); 

  const [dishes, setDishes] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(''); // Novo estado para armazenar a busca

  
  function handleBack() {
    navigate(-1); 
  }

  const handleSearch = (query) => {
    if (query.startsWith('@')) {
      const ingredientsQuery = query.substring(1).trim().split(',');
      setSearchQuery({ title: '', ingredients: ingredientsQuery });
    } else {
      setSearchQuery({ title: query, ingredients: [] });
    }
    navigate("/");
  };
 
  useEffect(() => {
    async function fetchDishes() {
        const response = await api.get(`/dishes/${params.id}`);
        setData(response.data);
    }
    fetchDishes();
}, [])


useEffect(() => {
    function fetchImage() {
        if(data) {
            setImage(`${api.defaults.baseURL}/files/${data.photo}`);
        }
    }

    fetchImage();
}, [data]);

  
  return (
    <Container>

      {isMobile ? <UserMobileHeader /> : <UserDesktopHeader onSearch={handleSearch}/>}
      
      <main>

        <Content>
          <div className="box">
          {
            data &&

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
                src={image}
                alt="Foto do prato escolhido." 
                />
            </div>

          }

          {
            data &&

            <div className="versionDesktopColumnTwo">
              <div className="details">
                <h2>{data.title}</h2>

                <TextArea
                value={data.description}
                readOnly={true}
                />

                <div className="wrapperTags">
                 { 
                  data.ingredients.map(ingredient => (
                    <Ingredient
                    key={String(ingredient.id)}
                    title={ingredient.name}
                    />
                  ))
                 }
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
          }
          </div>
        </Content>
    
      </main>

     <Footer /> 

    </Container>
  )
}