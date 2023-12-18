import React from "react";
import "./cart.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ShopContext } from "../../context/ShoppingContext";
import CartItem from "./CartItem";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const baseURL = "https://dummyjson.com/products";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data.products);
    });
  }, []);
  const { cartItems, removeAll, getTotalCartAmount } = useContext(ShopContext);
  //   addToCart(1);
  console.log("Foulaaa outside ");
  console.log(cartItems);
  return (
    <div className="bg">
      <div className="Cart-Container">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <h5 className="Action" onClick={removeAll}>Remove all</h5>
        </div>
        {products.map((itemCart) => {
          if (cartItems[itemCart.id]) {
            return <CartItem data={itemCart} />;
          }
        })}
        <hr /> <br />
        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
              <div className="items"> {Object.keys(cartItems??{}).filter((key)=> cartItems[key] !== 0).length } items</div>
            </div>
            <div className="total-amount">$ {getTotalCartAmount()}</div>
          </div>
          <button className="button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
