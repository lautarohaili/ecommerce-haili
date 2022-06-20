/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useCartContext } from "../../context/CartContext";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../carrito/CartItem.css";

export default function CartItem({ item }) {
  const { deleteItem } = useCartContext();

  function removeItem() {
    deleteItem(item.id);
  }
  return (
    <div>
      <div className="cart">
        <li className="cart-item">
          <img
            className="cart-item__img"
            src={item.img}
            style={{ width: 100 }}
          />
          {item.name} - Precio: {item.price} - cantidad: {item.count}
          <button
            className="cart-item__delete"
            onClick={() => removeItem(item.id)}
          >
            <FontAwesomeIcon icon={faTimes} color={"#1d1d1d"} size={"1x"} />
          </button>
        </li>
      </div>
    </div>
  );
}
