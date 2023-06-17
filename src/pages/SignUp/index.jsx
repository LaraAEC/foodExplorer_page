import { Container, Form } from './styles';

import { HeaderSign } from '../../components/HeaderSign' 
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
   return (
      <Container>
        <div className="columnTitle">
          <HeaderSign />
        </div>

        <div className="columnLogin">
          <Form>   
            <div className="wrap">
              <div id="loginIn">
                <h2>Crie sua conta</h2>
              </div>

              <span>Seu nome</span>
                <Input
                  placeholder="Exemplo: Juliana Frazão"
                  type="text"
                  //onChange={e => setEmail(e.target.value)} // capturando a mudança no 'e' e colocando o valor dela no método que configura estado como parâmetro e executando ele
              />

              <span>Email</span>
              <Input
                placeholder="Exemplo: exemplo@exemplo.com.br"
                type="text"
                //onChange={e => setEmail(e.target.value)} // capturando a mudança no 'e' e colocando o valor dela no método que configura estado como parâmetro e executando ele
              /> 
         
              <span>Senha</span>
                <Input
                  placeholder="No mínimo 6 caracteres"
                  type="password"
                  //onChange={e => setPassword(e.target.value)}
              />
      
              <Button title="Criar conta"  /*onClick={handleSignIn}*//> 
              <a href="#">
                Já tenho uma conta
              </a>
            </div>
          </Form>
        </div> 
      </Container>
   )
}
