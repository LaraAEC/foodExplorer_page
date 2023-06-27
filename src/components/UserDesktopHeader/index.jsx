import { Container, Search } from './styles';

import LogoSvg from '../../assets/logo.svg';
import ReceiptSvg from '../../assets/receipt.svg';
import SearchSvg from '../../assets/search.svg';
import SignOutSvg from '../../assets/signOut.svg';


export function UserDesktopHeader() {
  return (
    <Container>
      <div id="box">
        <div id="title">
          <img
            src={ LogoSvg }
            alt="Imagem de 'polígono azul'."
          />
          <h1>food explorer</h1>
        </div> 

        <div className="Search">
          <img
            src={ SearchSvg }
            alt="Imagem de 'lupa'."
          />
          <Search
            placeholder="Busque por pratos ou ingredientes"
            //onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="OrderButton">
          <img
            src={ ReceiptSvg }
            alt="Imagem de 'recibo/recebido'."
          />
        <button>
          <p>Pedidos (0)</p>
        </button> 
        </div>

        <img
          src={SignOutSvg}
          alt="Imagem de 'colchete com seta indicando para fora'."
          />

      </div>
    </Container>
  );
}