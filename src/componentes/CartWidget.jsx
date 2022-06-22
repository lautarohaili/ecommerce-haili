/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Cart from "../componentes/image/carrito2.png";
import { UseCartContext } from "../context/CartContext";

import "../componentes/styles/CartWidget.css";

export default function CartWidget() {
  const { totalItems } = UseCartContext();

  return (
    <div className="cart-widget">
      <img src={Cart} className="carrito" />

      <div className="qty-display">{totalItems}</div>
    </div>
  );
}
