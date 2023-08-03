import { useState, useEffect } from 'react';
import{ useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';


import { Container, Search } from './styles';

import LogoSvg from '../../assets/logo.svg';
import ReceiptSvg from '../../assets/receipt.svg';
import SearchSvg from '../../assets/search.svg';
import SignOutSvg from '../../assets/signOut.svg';


export function AdminDesktopHeader({ onChange }) {
  const { signOut } = useAuth(); //desestruturando a função de logout de dentro do meu contexto
  const navigate = useNavigate();

  

  function handleSignOut() {
    navigate("/"); 
    signOut(); 
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
            <h1>Food explorer</h1>
            <p>admin</p>
          </div>
        </div> 


        <div className="search">
          <img
            src={ SearchSvg }
            alt="Imagem de 'lupa'."
          />
          <Search
            type="text"
            placeholder="Busque por pratos ou ingredientes."
            onChange={onChange}
          />
        </div>

        <button 
        type="button"
        className="newDishButton" 
        onClick={handleNewDishButton} 
        >
          <p>Novo prato</p>
        </button>
        
    
        <div className="ordersButton">
          <img className="receiptSvg"
            src={ ReceiptSvg }
            alt="Imagem de 'recibo/recebido'."
          />
          <button className="ordersButtonButton"
          type="button"
          //onClick={handleAllRequests}
          >
            <p>Pedidos (0)</p>
          </button> 
        </div>
       
        <button
        type="button"
        className="signOutButton"
        onClick={handleSignOut}>
          <img className="signOutSvg"
            src={SignOutSvg}
            alt="Imagem de 'colchete com seta indicando para fora'."
          />
        </button>
      </div>
    </Container>
  );
}