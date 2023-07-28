import { useAuth } from '../../../hooks/auth';
import{ useNavigate } from 'react-router-dom';

import { Container } from './styles';

import { FiSearch } from 'react-icons/fi';

import { Footer } from '../../../components/Footer'; 
import { Input } from '../../../components/Input';

import CloseSvg from '../../../assets/close.svg';


export function AdminMenu() {
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
            //onChange={e => setEmail(e.target.value)} // capturando a mudança no 'e' e colocando o valor dela no método que configura estado como parâmetro e executando ele
          />

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
