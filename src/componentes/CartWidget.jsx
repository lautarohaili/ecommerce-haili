/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { useCartContext } from "../context/CartContext";

import Cart from "../componentes/image/carrito2.png";

import "../componentes/styles/CartWidget.css";

const CartWidget = () => {
  const { cartList } = useCartContext();

  const totalItems = cartList.reduce(
    (acc, item) => (acc = acc + item.count),
    0
  );

  return (
    <div className="cart-widget">
      <img src={Cart} className="carrito" />

      <div className="qty-display">{totalItems}</div>
    </div>
  );
};

export default CartWidget;
