import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

async function fetchProducts() {
  const baseURL = "https://dummyjson.com/products";

  return (await axios.get(baseURL)).data.products;
}

const getDefaultCart = (products) => {
  let cart = {};
  for (let i = 0; i < products.length; i++) {
    cart[products[i].id] = 0;
  }
  return cart;
};

const ShoppingContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    fetchProductsData();
  }, []);

  const [cartItems, setCartItemsState] = useState(
    JSON.parse(localStorage.getItem("myCartItems") ?? "{}")
  );

  if (!products || !products.length) return null;

  function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const addToCart = (itemId) => {
    setCartItemsState((prev) => {
      const newCart = {
        ...prev,
        [itemId]: (prev[itemId] ?? 0) + 1,
      };
      saveToLocalStorage("myCartItems", newCart);
      return newCart;
    });
  };

  const decreaseQuantity = (itemId) => {
    setCartItemsState((prev) => {
      const newCart = {
        ...prev,
        [itemId]: (prev[itemId] ?? 0) - 1,
      };
      saveToLocalStorage("myCartItems", newCart);
      return newCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItemsState((prev) => {
      const newCart = {
        ...prev,
        [itemId]: 0,
      };
      saveToLocalStorage("myCartItems", newCart);
      return newCart;
    });
  };

  const removeAll = () => {
    setCartItemsState(() => {
      const newCart = {};
      saveToLocalStorage("myCartItems", newCart);
      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItems,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    removeAll,
    getTotalCartAmount,
  };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShoppingContextProvider;
