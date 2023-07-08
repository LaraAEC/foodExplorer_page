import { Container, Search } from './styles';

import LogoSvg from '../../assets/logo.svg';
import ReceiptSvg from '../../assets/receipt.svg';
import SearchSvg from '../../assets/search.svg';
import SignOutSvg from '../../assets/signOut.svg';


export function AdminDesktopHeader() {
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
        
        
          <button className="orderButton"
          type="button"
          >
            <p>Novo prato</p>
          </button> 
       

        <button type="button" className="signOutButton">
          <img className="signOutSvg"
            src={SignOutSvg}
            alt="Imagem de 'colchete com seta indicando para fora'."
          />
        </button>
      </div>
    </Container>
  );
}