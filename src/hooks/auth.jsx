import { createContext, useContext, useState, useEffect } from 'react'; 

import { api } from '../services/api'; 

import { toast } from "react-toastify";

//Crio o contexto
const AuthContext = createContext({});

//Crio o provedor do contexto
function AuthProvider({ children }) {
  const [data, setData] = useState({}); 

  const [dataDishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function signIn({ email, password }) { //função de verificação de autenticação dos dados email e password

    try { //enviando os dados para o BD e guardando sua resposta nesta constante
      setIsLoading(true);
      const response = await api.post("/sessions", { email, password }); //enviando os dados para o BD e guardando sua resposta nesta constante
      const { user, token } = response.data; //desestruturando de dentro da response somente o que me interessa
      setIsLoading(false);

      localStorage.setItem("@rocketfood:user", JSON.stringify(user)); // definindo um novo conteúdo dentro do meu local storage, passando o nome da chave e seu valor, e já transformando com o stringify o user de objeto para texto para poder ser lido e guardado no LocalStorage do navegador
      localStorage.setItem("@rocketfood:token", token);// definindo um novo conteúdo dentro do meu local storage, passando o nome da chave e seu valor. Como o token já é texto  não preciso fazer nenhum parse.


      api.defaults.headers.common['Authorization'] = `Bearer ${token}`; //inserindo um token do tipo Bearer, de autorização, no cabeçalho, por padrão de todas as requisições que o usuário fizer a partir de agora.
      setData({ user, token }); //configurando, atualizando, alterando meu estado data para os valores de user e token acima desestruturados


      toast.success(`Bem vindo(a), ${user.name}!` , {
        position: toast.POSITION.TOP_CENTER
      });


    } catch (error)  {
      setIsLoading(false);
      if (error.response){
        toast.error(`${error.response.data.message}` , {
          position: toast.POSITION.TOP_RIGHT
        });
      } else {
        toast.error("Não foi possível entrar.", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    }
  }

  function signOut() { //função de fazer logout da page Home, da minha Aplicação
    localStorage.removeItem("@rocketfood:token"); //removendo do Local storage o token
    localStorage.removeItem("@rocketfood:user"); //removendo do Local storage o usuário

    setData({}); //zerando os dados
  }

  //Lógica para o estado pegar os dados do user que ficaram no LocalStorage, mesmo havendo reload na page (pois no reload os estados somem, se este data sumir eu sou redirecionado para auth routes, não quero isso)
  useEffect(() => { //buscando as informações do local storage no navegador para permanecer após dar reload
    const token = localStorage.getItem("@rocketfood:token"); //buscando no Local Storage o token através de sua chave
    const user = localStorage.getItem("@rocketfood:user"); //buscando no Local Storage o user através de sua chave

    if(token && user) { //fazendo um if para garantir que tanto o token como o user foram informados
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`; //repete a execução da linha que coloca o token no cabeçalho
      
      setData({ //colocando dentro do meu estado data meu token e meu user, sendo este transformado de volta de string para objeto
        token,
        user: JSON.parse(user) //voltando os dados do usuário que estavam armazenados no tipo texto para o tipo objeto

      });
    }
  }, []);

  async function fetchDishes () {
    setIsLoading(true);
    const responseDish = await api.get("/dishes");
    setIsLoading(false);
    setDishes(responseDish.data);
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      fetchDishes,
      user: data.user,
      dataDishes,
      isLoading,
      setIsLoading
      }}
      > 
      {children} 
    </AuthContext.Provider>
  )
}

//inicializando meu contexto e identificando qual contexto será usado
//retorno meu contexto selecionado já inicializado
function useAuth() {
  const context = useContext(AuthContext); 
  return context;
}

export { AuthProvider, useAuth }; 
