import { Container, Form } from './styles';

import { HeaderSign } from '../../components/HeaderSign' 
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
   return (
      <Container>
        <div className="columnTitle">
          <HeaderSign />
        </div>

        <div className="columnLogin">
          <Form>
            <h2>Faça login</h2>
            <div className="wrap">
              <span>Email</span>
              <Input
                placeholder="Exemplo: exemplo@exemplo.com.br"
                type="text"
                //onChange={e => setEmail(e.target.value)} // capturando a mudança no 'e' e colocando o valor dela no método que configura estado como parâmetro e executando ele
              /> 
            </div>
          
            <div className="wrap">
              <span>Senha</span>
                <Input
                  placeholder="No mínimo 6 caracteres"
                  type="password"
                  //onChange={e => setPassword(e.target.value)}
              />
            </div>
              
          <div className="wrap">
            <Button title="Entrar"  /*onClick={handleSignIn}*//> 
          </div>

            <a href="#">
              Criar uma conta
            </a>
          </Form>
        </div>
      
        

         
      </Container>
   )
}
