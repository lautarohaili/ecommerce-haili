import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseCartContext } from "../../context/CartContext";

import "../carrito/CartItem.css";

export default function CartItem({ item }) {
  const { clearItem } = UseCartContext();

  function removeItem() {
    clearItem(item.id);
  }
  return (
    <div>
      <div className="cart-item__delete" onClick={() => removeItem(item.id)}>
        <FontAwesomeIcon icon={faTimes} color={"#1d1d1d"} size={"1x"} />
      </div>
      <div>
        <li>
          <img src={item.img} style={{ width: 60 }} />
          {item.name} - Precio: {item.price} - cantidad: {item.quantity}
        </li>
      </div>
    </div>
  );
}

/*
<article className="cart-item-card">
      <div className="cart-item__delete" onClick={() => clearItem(item.id)}>
        <FontAwesomeIcon icon={faTimes} color={"#1d1d1d"} size={"1x"} />
      </div>
      <div className="cart-item__img">
        <img src={item.img} />
      </div>
      <h2 className="cart-item__name">{item.name}</h2>
      <span className="cart-item__price">${item.price}</span>
      <span className="cart-item__qty">
        <strong>Cantidad:</strong> {item.quantity}
      </span>
      <span className="cart-item__qty">
        <strong>Total:</strong> ${item.quantity * item.price}
      </span>
    </article>
    */
