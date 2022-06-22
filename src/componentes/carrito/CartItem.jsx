/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseCartContext } from "../../context/CartContext";

import "../carrito/CartItem.css";

export default function CartItem({ item }) {
  const { clearItem } = UseCartContext();

  return (
    <div>
      <div className="cart">
        <li className="cart-item">
          <img
            className="cart-item__img"
            src={item.img}
            style={{ width: 100 }}
          />
          {item.name} - Cantidad: {item.quantity} - Subtotal: $
          {item.price * item.quantity}
          <button className="cart-item__delete" onClick={() => clearItem(item)}>
            <FontAwesomeIcon icon={faTimes} color={"#1d1d1d"} size={"1x"} />
          </button>
        </li>
      </div>
    </div>
  );
}
