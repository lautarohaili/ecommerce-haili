import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../carrito/CartItem.css";

const CartItem = ({ item, deleteCartById }) => {
  return (
    <article className="cart-item-card">
      <div
        className="cart-item__delete"
        onClick={() => deleteCartById(item.id)}
      >
        <FontAwesomeIcon icon={faTimes} color={"#1d1d1d"} size={"1x"} />
      </div>
      <div className="cart-item__img">
        <img src={item.img} />
      </div>
      <h2 className="cart-item__name">{item.name}</h2>
      <span className="cart-item__price">${item.price}</span>
      <span className="cart-item__qty">
        <strong>Cantidad:</strong> {item.qty}
      </span>
      <span className="cart-item__qty">
        <strong>Total:</strong> ${item.qty * item.price}
      </span>
    </article>
  );
};

export default CartItem;
