// src/context/CartContext.jsx

import { createContext, useContext, useState, useCallback } from "react";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);
  const toggleCart = useCallback(() => setCartOpen(prev => !prev), []);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(i =>
        i.id === item.id &&
        i.style === item.style &&
        i.size === item.size
      );
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += item.quantity;
        return updated;
      }
      return [...prev, item];
    });
    setCartOpen(true);
  };

const removeFromCart = (itemToRemove) => {
  setCartItems(prev =>
    prev.filter(item =>
      !(item.id === itemToRemove.id &&
        item.style === itemToRemove.style &&
        item.size === itemToRemove.size)
    )
  );
};

const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
