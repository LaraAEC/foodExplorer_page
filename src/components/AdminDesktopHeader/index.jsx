import { useAuth } from '../../hooks/auth';
import{ useNavigate } from 'react-router-dom';

import { Container, Search } from './styles';

import LogoSvg from '../../assets/logo.svg';
import ReceiptSvg from '../../assets/receipt.svg';
import SearchSvg from '../../assets/search.svg';
import SignOutSvg from '../../assets/signOut.svg';


export function AdminDesktopHeader() {
  const { signOut } = useAuth(); //desestruturando a função de logout de dentro do meu contexto
  const navigate = useNavigate();

  function handleSignOut() { //função disparada com interação do usuário
    navigate("/"); //levando o usuário para a tela inicial
    signOut(); //deslogar o usuário
  }

  function handleNewDishButton() { //função disparada com interação do usuário
    navigate("/new"); //levando o usuário para a tela de criar novo prato
  }

  return (
    <Container>
      <div className="box">

        <div className="title">
          <img className="logoSvg"
            src={ LogoSvg }
            alt="Imagem de 'polígono azul'."
          />

          <div className="wrapper">
            <h1>food explorer</h1>
            <p>admin</p>
          </div>
        </div> 


        <div className="search">
          <img
            src={ SearchSvg }
            alt="Imagem de 'lupa'."
          />
          <Search
            placeholder="Busque por pratos ou ingredientes"
            //onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        
          <button className="newDishButton" onClick={handleNewDishButton}
          type="button"
          >
            <p>Novo prato</p>
          </button> 
       

        <button type="button" className="signOutButton" onClick={handleSignOut}>
          <img className="signOutSvg"
            src={SignOutSvg}
            alt="Imagem de 'colchete com seta indicando para fora'."
          />
        </button>
      </div>
    </Container>
  );
}