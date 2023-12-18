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

  //   const [cartItems, setCartItemsState] = useState(() => {
  //     // Get cart items from localStorage on component mount
  //     const storedCartItems = JSON.parse(
  //       "{}" ?? localStorage.getItem("cartItems") ?? "{}"
  //     );
  //     return { ...getDefaultCart(products), ...storedCartItems };
  //   });

  const [cartItems, setCartItemsState] = useState(
    JSON.parse(localStorage.getItem("myCartItems") ?? "{}")
  );

  const setCartItems = (itemId) => {
    // Update state and localStorage when cart items change

    setCartItemsState((prev) => {
      console.log("PREV ID: ", prev);
      const newCart = {
        ...prev,
        [itemId]: (prev[itemId] ?? 0) + 1,
      };
      localStorage.setItem("myCartItems", JSON.stringify(newCart));
      return newCart;
    });
  };

  const addToCart = (itemId) => {
    setCartItems(itemId);
    // setCartItems({
    //     ...prev,
    //     [itemId]: (prev[itemId] ?? 0) + 1,
    //   })
    // setCartItems((prev) => {
    //   console.log("PREV ID: ", prev);
    //   return {
    //     ...prev,
    //     [itemId]: (prev[itemId] ?? 0) + 1,
    //   };
    // });
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] - 1 : 0,
    }));
  };

  const contextValue = { cartItems, addToCart, deleteFromCart };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShoppingContextProvider;
