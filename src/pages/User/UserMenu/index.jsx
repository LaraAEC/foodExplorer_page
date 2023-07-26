import { useAuth } from '../../../hooks/auth';
import{ useNavigate } from 'react-router-dom';

import { Container } from './styles';

import { FiSearch } from 'react-icons/fi';

import { Footer } from '../../../components/Footer'; 
import { Input } from '../../../components/Input';

import CloseSvg from '../../../assets/close.svg';


export function UserMenu() {
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
            //onChange={e => setEmail(e.target.value)} // capturando a mudança no 'e' e colocando o valor dela no método que configura estado como parâmetro e executando ele
          /> 
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
