// src/context/CartContext.jsx
import { toast } from "react-hot-toast";
import { createContext, useContext, useState, useCallback, useEffect } from "react";

export const CartContext = createContext({});
const STORAGE_KEY = "my-cart";

export function CartProvider({ children }) {
  const [isCartOpen, setCartOpen] = useState(false);
  // ✅ 初始化：從 localStorage 讀取 cartItems
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ 每當 cartItems 改變時，自動寫入 localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  // const [cartItems, setCartItems] = useState([]);

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
    toast.success(`已加入「${item.title} - ${item.style} - ${item.size}」`);
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
  toast.success("已從購物車移除");
};

const clearCart = () => {
  setCartItems([]);
  toast("已訂購完成");
};

// 增加數量
const increaseQuantity = (index) => {
  setCartItems((prevItems) => {
    const updated = [...prevItems];
    updated[index].quantity += 1;
    return updated;
  });
};

// 減少數量（不低於 1）
const decreaseQuantity = (index) => {
  setCartItems((prevItems) => {
    const updated = [...prevItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    }
    return updated;
  });
};

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
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
