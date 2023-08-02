import{ useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container, Search } from './styles';

import LogoSvg from '../../assets/logo.svg';
import ReceiptSvg from '../../assets/receipt.svg';
import SearchSvg from '../../assets/search.svg';
import SignOutSvg from '../../assets/signOut.svg';


export function UserDesktopHeader({ onChange }) {
  const { signOut } = useAuth(); 
  const navigate = useNavigate();


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
            placeholder="Busque por pratos ou ingredientes."
            onChange={onChange}
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