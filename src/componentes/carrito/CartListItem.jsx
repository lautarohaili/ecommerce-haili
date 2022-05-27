import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

import "../carrito/CartListItem.css";

const CartListItem = () => {
  const cartContext = useContext(CartContext);
  const { cart, deleteCartById, deleteCart } = cartContext;

  return (
    <section className="list-cart-container">
      {cart ? (
        cart.map((product) => {
          return (
            <CartItem
              key={product.id}
              item={product}
              deleteCartById={deleteCartById}
            />
          );
        })
      ) : (
        <p>cargando productos</p>
      )}
      {cart.length ? (
        <button className="button-primary button-clear" onClick={deleteCart}>
          Vaciar Carrito
        </button>
      ) : (
        <div>
          <h3>Tu carrito está vacío</h3>
          <p>¿Todavia no sabés qué comprar?</p>
        </div>
      )}
    </section>
  );
};

export default CartListItem;
