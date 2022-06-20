import CartItem from "./CartItem";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

import "../carrito/CartListItem.css";

export default function CartListItem() {
  const { cartList, deleteCart } = useCartContext();

  const total = cartList.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  const totalItems = cartList.reduce(
    (acc, item) => (acc = acc + item.count),
    0
  );

  return (
    <>
      <div className="cart-container">
        <div className="cart">
          <div>
            {cartList.map((el) => (
              <CartItem key={el.id} item={el} />
            ))}
          </div>
          {cartList.length ? (
            <div className="cart-total">
              <h3 className="total-unidades">Unidades: {totalItems}</h3>
              <h3 className="totalCompra">Total: ${total}</h3>

              <button className="button-clear" onClick={deleteCart}>
                Vaciar Carrito
              </button>
              <Link
                to="/form"
                className="btn-outline button-clear"
                style={{ textDecoration: "none" }}
              >
                Realizar Compra
              </Link>
            </div>
          ) : (
            <div className="carrito-vacio">
              <h3>Tu carrito está vacío</h3>
              <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
              <Link to={"/"}>
                <button className="button-menu">Ir a la tienda</button>
              </Link>
            </div>
          )}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
