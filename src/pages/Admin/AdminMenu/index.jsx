import { useState, useEffect } from 'react';
import { api } from '../../../services/api';

import { useAuth } from '../../../hooks/auth';
import{ useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';
import CloseSvg from '../../../assets/close.svg';

import { Container } from './styles';
import { Footer } from '../../../components/Footer'; 
import { Input } from '../../../components/Input';
import { AdminDishCard } from '../../../components/AdminDishCard'; 


export function AdminMenu() {
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


  const { signOut } = useAuth(); 
  const navigate = useNavigate();

  function handleSignOut() { 
    navigate("/"); 
    signOut(); 
  }

  function handleNewDish() {
    navigate("/new"); 
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
            icon={ FiSearch }
            onChange={e => setSearch(e.target.value)} 
          />
          
         <div className="dish-list">
         <ul>
            {dishes &&
              dishes.map(dish => {
                return (
                <AdminDishCard 
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

          <button className="buttonNewDish"
          type="button"
          onClick={handleNewDish}
          >
            Novo prato
          </button>

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
