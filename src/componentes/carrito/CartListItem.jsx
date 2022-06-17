import CartItem from "./CartItem";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "../carrito/CartListItem.css";

export default function CartListItem({ sendOrder }) {
  const { cartList, clearCart, totalPrice } = useCartContext();

  return (
    <div className="cartList">
      <h1 className="cart__title">Su pedido:</h1>
      {cartList.map((el) => (
        <CartItem key={el.id} item={el} />
      ))}
      <div>
        <p>{`El precio total es: $${totalPrice}`}</p>
        <button className="button-primary button-clear" onClick={clearCart}>
          Vaciar Carrito
        </button>
        <Link to="/form" className="button-primary button-clear">
          <button>Finalizar Compra</button>
        </Link>
      </div>
    </div>
  );
}
