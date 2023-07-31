import { createContext, useState, useEffect } from 'react';

import { useAuth } from '../hooks/auth';

import { api } from '../services/api';

// Crie o contexto
const RequestContext = createContext();


// Crie o provedor do contexto
export function RequestProvider({ children }) {
 
  const { user } = useAuth();
  
  let [ number, setNumber ] = useState(0);

  function Decrement(number) {
    if(number == 0) {
      setNumber(number);
    } else {
      setNumber(number - 1);
    }
  };

  function Increment(number) {
    setNumber(number + 1);
  };

  function handleInclude(number, title, price) {
    if (number === 0) {
      alert("É necessário selecionar a quantidade de itens.");
    } 
    else {
      const amount = number;
      const priceAsNumber = parseFloat(price.replace("R$", ""));
      const total = priceAsNumber * amount; 

      setTotal(total); 

      const includedItem = {
        amount,
        title,
        price,
        total
      };

      setAllIncludedItems(prevItems => [...prevItems, includedItem]);
      
    }

  }

  

  // Passe o estado e as funções relevantes através do contexto
  const contextValue = {
    number,
    Decrement,
    Increment,
    handleInclude
  
  };

  return (
    <RequestContext.Provider value={contextValue}>
      {children}
    </RequestContext.Provider>
  );
}

export default RequestContext;
