import{ useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { Container, Form } from './styles';

import { HeaderSign } from '../../components/HeaderSign' 
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  //estruturando, criando estados, capturando os dados do input
  const [email, setEmail] = useState(""); //nome do estado, função que o modifica e valor do estado inicial.
  const [password, setPassword] = useState("");  //nome do estado, função que o modifica e valor do estado inicial.
  
  const { signIn } = useAuth(); //hook criado para inicializar e selecionar contexto e desestruturação da function SigIn de dentro do contexto inicializado e selecionado. Retirando dele a função que foi passada no provider.

  const navigate = useNavigate();

  function handleRegister() {
    navigate("/register");
  }

  function handleSignIn() {
    signIn({ email, password });
  }

   return (
      <Container>
     
          <div className="columnTitle">
            <HeaderSign />
          </div>

          <div className="columnLogin">
            <Form>   
              <div className="wrap">
                <div id="loginIn">
                  <h2>Faça login</h2>
                </div>

              <div className="Data">
                <span>Email</span>
                  <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    onChange={e => setEmail(e.target.value)} // capturando a mudança no 'e' e colocando o valor dela no método que configura estado como parâmetro e executando ele
                  /> 
              </div>

               <div className="Data">
                <span>Senha</span>
                  <Input
                      placeholder="No mínimo 6 caracteres"
                      type="password"
                      onChange={e => setPassword(e.target.value)}
                  />
               </div>
               
                <Button title="Entrar"  onClick={handleSignIn} /> 
               
                <button type="button" className="buttonSignUp" onClick={handleRegister}>
                  Criar uma conta
                </button>
              </div>
            </Form>
          </div> 
      </Container>
   )
}
