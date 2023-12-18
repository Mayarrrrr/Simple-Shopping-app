import React from "react";
import { Trash } from "phosphor-react";
import './cart.css';
import { useContext } from "react";
import { ShopContext } from "../../context/ShoppingContext";

const CartItem = (props) => {
    const {id, title, price, images , brand } = props.data;
    const firstImage = images[0];
    const {addToCart, cartItems, decreaseQuantity,removeFromCart}= useContext(ShopContext);

    return ( 
        <div className="Cart-Items" key={id}>
        <div className="image-box">
            <img src={firstImage} style={{ height: "120px" }} alt={title} />
        </div>
        <div className="about">
            <h1 className="title">{title}</h1>
            <h3 className="subtitle">Brand : {brand}</h3>
        </div>
        <div className="counter">
            <div className="btn-cart" onClick={() => addToCart(id) }>+</div>
            <div className="count">{cartItems[id]}</div>
            <div className="btn-cart" onClick={() => decreaseQuantity(id) }>-</div>
        </div>
        <div className="prices">
            <div className="amount">$ {price}</div>
            <div className="remove" onClick={()=> removeFromCart(id)}><u><Trash size={32} color="red"/></u></div>
        </div>
    </div>
     );
}
 
export default CartItem;