import { Container } from './styles';

import { FiSearch } from 'react-icons/fi';

import { Footer } from '../../../components/Footer'; 
import { Input } from '../../../components/Input';

import CloseSvg from '../../../assets/close.svg';


export function AdminMenu() {
   return (
      <Container>
        <div className="closeMenu">
          <img
            src={ CloseSvg }
            alt="imagem de um 'X'."
          />
          <a href="#">
            Menu
          </a>   
        </div>

        <div className="page">
          <Input
            placeholder="Busque por pratos ou ingredientes"
            type="text"
            icon={ FiSearch }
            //onChange={e => setEmail(e.target.value)} // capturando a mudança no 'e' e colocando o valor dela no método que configura estado como parâmetro e executando ele
          />

          <a href="#">
            Novo prato
          </a>

          <a href="#">
            Sair
          </a>
        </div>

        <Footer />
      </Container>
   )
}
