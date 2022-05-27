import React from "react";
import CartListItem from "../componentes/carrito/CartListItem";

import "../pages/styles/cartPage.css";

const CartPage = () => {
  return (
    <main className="display-page">
      <div className="tittle-page">
        <h1>Tu carrito de compras</h1>
      </div>
      <div className="cart-items">
        <CartListItem />
      </div>
    </main>
  );
};

export default CartPage;
