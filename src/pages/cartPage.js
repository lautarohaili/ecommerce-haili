import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartListItem from "../componentes/carrito/CartListItem";

import "../pages/styles/cartPage.css";

export default function CartPage() {
  const { totalItems, orderId, createOrder } = useCartContext();
  const [orderSent, setOrderSent] = useState(false);

  function sendOrder() {
    setOrderSent(true);
    createOrder();
  }

  if (!totalItems) {
    return (
      <div className="cart">
        <main className="display-page">
          <div className="tittle-page">
            <h1>Tu carrito de compras</h1>
          </div>
        </main>
        {orderSent ? (
          <div className="cart-info">
            <h1>Pedido enviado! Nro de pedido: {orderId}</h1>
          </div>
        ) : (
          <div className="cart-vacio">
            <h3>Tu carrito está vacío</h3>
            <p>¿Todavia no sabés qué comprar?</p>
          </div>
        )}
        <Link to="/">
          <button className="button-menu">Volver al menú</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <CartListItem sendOrder={sendOrder} />
    </div>
  );
}

/*
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

export default CartPage; */
