import { useState, useEffect } from 'react';
import { api } from '../../../services/api';

import { useAuth } from '../../../hooks/auth';
import{ useNavigate } from 'react-router-dom';

import CloseSvg from '../../../assets/close.svg';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';
import { Footer } from '../../../components/Footer'; 
import { Input } from '../../../components/Input';
import { UserDishCard } from '../../../components/UserDishCard'; 


export function UserMenu() {
  const [search, setSearch] = useState("")
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    if (search.length > 0) {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}&ingredients=${search}`);
      setDishes(response.data);
    }

    fetchDishes();
  } else {
    setDishes(false)
  }
  }, [search]);


  const { signOut } = useAuth(); //desestruturando a função de logout de dentro do meu contexto
    const navigate = useNavigate();
  
    function handleSignOut() { //função disparada com interação do usuário
      navigate("/"); //levando o usuário para a tela inicial
      signOut(); //deslogar o usuário
    }

  
    function handleCloseMenu() { 
      navigate("/"); 
    }

   return (
      <Container>
        <div className="closeMenu">
          <button className="buttonCloseMenu"
          type="button"
          onClick={handleCloseMenu}>
            <img
              src={ CloseSvg }
              alt="imagem de um 'X'."
            />
          </button>

          <span>
            Menu
          </span>   
        </div>

        <div className="page">
          <Input
            placeholder="Busque por pratos ou ingredientes"
            type="text"
            icon={FiSearch}
            onChange={e => setSearch(e.target.value)}
              /> 
              
        <div className="dish-list">
          <ul>
              {dishes &&
                dishes.map(dish => {
                  return (
                  <UserDishCard 
                    key={String(dish.id)}
                    data={dish}
                    onClick={() => handleDetails(dish.id)}
                    title={dish.title}
                    value={dish.description}
                    price={`R$ ${dish.price}`}
                    type="text"
                    visibility="not-visible"
                    image={dish.photo} />
                  )
                })
              }
            </ul>
        </div>

         <button className="buttonSignOut"
          type="button"
          onClick={handleSignOut}>
            Sair
          </button>
        </div>

        <Footer />
      </Container>
   )
}
