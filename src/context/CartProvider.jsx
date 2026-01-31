import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeOne = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]); 
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const getQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  console.log("CARRITO ACTUAL:", cart);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeOne,
      clearCart,
      getTotal,
      getQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;