import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../componentes/styles/CartWidget.css";

const CartWidget = () => {
  const { totalItems } = UseCartContext();

  return (
    <Link to="/cart">
      <div className="cart-widget">
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        <div className="qty-display">{totalItems}</div>
      </div>
    </Link>
  );
};

export default CartWidget;
