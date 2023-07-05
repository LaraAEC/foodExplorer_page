import { Container, Search } from './styles';

import LogoSvg from '../../assets/logo.svg';
import ReceiptSvg from '../../assets/receipt.svg';
import SearchSvg from '../../assets/search.svg';
import SignOutSvg from '../../assets/signOut.svg';


export function UserDesktopHeader() {
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
            placeholder="Busque por pratos ou ingredientes"
            //onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="orderButton">
          <img className="receiptSvg"
            src={ ReceiptSvg }
            alt="Imagem de 'recibo/recebido'."
          />
          <button className="orderButtonButton"
          type="button"
          >
            <p>Pedidos (0)</p>
          </button> 
        </div>

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