import { createContext, useContext, useState, useEffect } from 'react';


// Crio o contexto
const CartContext = createContext({});


// Crio o provedor do contexto
function CartProvider({ children }) {
 
  const [cart, setCart] = useState([]);

  
  return (
    <CartContext.Provider value={ {
      cart,
      setCart
    } }
      > 
      {children} 
    </CartContext.Provider>
  )
}

//inicializando meu contexto e identificando qual contexto será usado
//retorno meu contexto selecionado já inicializado
function useCart() {
  const context = useContext(CartContext); 
  return context; 
}

export { CartProvider, useCart }; 

