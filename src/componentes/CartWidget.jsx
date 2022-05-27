import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

import "../componentes/styles/CartWidget.css";

const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;
  return (
    <Link to="/cart">
      <div className="cart-widget">
        <FontAwesomeIcon icon="" size="2x" color="white" />
        <div className="qty-display">{cart.length}</div>
      </div>
    </Link>
  );
};

export default CartWidget;
