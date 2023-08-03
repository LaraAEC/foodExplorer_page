import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import MenuSvg from '../../assets/menu.svg';
import LogoSvg from '../../assets/logo.svg';
import ReceiptSvg from '../../assets/receipt.svg';

export function UserMobileHeader() {
  const navigate = useNavigate();

  function handleOpenMenu() { //funcionalidade de voltar com o botão 'voltar'
    navigate("/menu"); //para ser usado no botão de voltar e colocar o usuário na rota anterior
  }

  return (
    <Container>
      <div className="box">
       <button>
          <img className="menuSvg"
            src={ MenuSvg }
            alt="Imagem de 'menu'."
            onClick={handleOpenMenu}
          />
        </button>

        <div className="title">
          <img
            src={ LogoSvg }
            alt="Imagem de 'polígono azul'."
          />
          
            <h1>Food explorer</h1>

        </div> 

        <img
          src={ ReceiptSvg }
          alt="Imagem de 'recibo/recebido/pedido'."
        />
      </div>
    </Container>
  );
}
