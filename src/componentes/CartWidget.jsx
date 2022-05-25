import { Link } from "react-router-dom";
import "../componentes/styles/CartWidget.css";

import logoCarrito from "./image/carrito.png";

export default function CartWidget() {
  return (
    <Link to="/cart">
      <div className="cartWidget">
        <span className="cartWidget__icon">
          <img src={logoCarrito} alt="fireSpot" />
        </span>
        <span className="cartWidget__counter">0</span>
      </div>
    </Link>
  );
}
