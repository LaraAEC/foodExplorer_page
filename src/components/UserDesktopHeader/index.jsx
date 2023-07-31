import { useState, useEffect } from 'react';
import{ useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, Search } from './styles';

import LogoSvg from '../../assets/logo.svg';
import ReceiptSvg from '../../assets/receipt.svg';
import SearchSvg from '../../assets/search.svg';
import SignOutSvg from '../../assets/signOut.svg';


export function UserDesktopHeader({onSearch}) {
  const { signOut } = useAuth(); 
  const navigate = useNavigate();

  const [dishes, setDishes] = useState([]); //criando meu estado das notas e será um array
  const [ingredients, setIngredients] = useState([]); //criando estado que recebe os ingredients digitados pelo usuário
  
  const [searchQuery, setSearchQuery] = useState(""); //criando meu estado que recebe o conteúdo digitado no input de pesquisa

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query); // Atualiza o estado com o valor da busca
    onSearch(query); // Chama a prop onSearch passando o valor da busca como argumento
  };

  function handleSignOut() { 
    navigate("/"); 
    signOut(); 
  }

  return (
    <Container>
      <div className="box">
        <div className="title">
          <img
            src={ LogoSvg }
            alt="Imagem de 'polígono azul'."
          />
          <h1>food explorer</h1>
        </div> 

        <div className="search">
          <img
            src={ SearchSvg }
            alt="Imagem de 'lupa'."
          />
          <Search
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        
        <div className="orderButton">
          <img className="receiptSvg"
            src={ ReceiptSvg }
            alt="Imagem de 'recibo/recebido'."
          />
          <button className="orderButtonButton"
          type="button"
          //onClick={handleButtonReceipt}
          >
            <p>Pedidos (0)</p>
          </button> 
        </div>

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