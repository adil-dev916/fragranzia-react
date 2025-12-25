import { createContext, useEffect, useState } from "react";
import { ourProducts } from "../assets/assets";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    setProducts(ourProducts);
    setSearchQuery(ourProducts);
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

  const getCartCount = () => {
    let totalCount = 0;
    for(const item in cartItems){
      totalCount += cartItems[item];
    }
    return totalCount;
  }
  return (
    <AppContext.Provider
      value={{ products, navigate, searchQuery, setSearchQuery, cartItems, addToCart, updateCartItem, removeCartItem, getCartCount }}>
      {children}
    </AppContext.Provider>
  );
};
