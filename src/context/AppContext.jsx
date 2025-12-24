import { createContext, useEffect, useState } from "react";
import { ourProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    setProducts(ourProducts);
  }, []);

  const addToCart = (itemId) => {
    setCartItems(prev => {
      const updated = { ...prev };
      updated[itemId] = (updated[itemId] || 0) + 1;
      return updated;
    });
    toast.success("Added to cart");
  };

  const updateCartItem = (itemId, quantity) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: quantity,
    }));
    toast.success("Cart updated");
  };

  const removeCartItem = (itemId) => {
    setCartItems(prev => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });
    toast.success("Removed from cart");
  };

  return (
    <AppContext.Provider value={{ products, cartItems, addToCart, updateCartItem, removeCartItem }}>
      {children}
    </AppContext.Provider>
  );
};
