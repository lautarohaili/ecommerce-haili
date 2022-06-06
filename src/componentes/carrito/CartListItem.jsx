import CartItem from "./CartItem";
import { UseCartContext } from "../../context/CartContext";

import "../carrito/CartListItem.css";

export default function CartListItem({ sendOrder }) {
  const { cartList, clearCart, totalPrice } = UseCartContext();

  return (
    <div className="cartList">
      <h1 className="cart__title">Su pedido:</h1>
      {cartList.map((el) => (
        <CartItem key={el.id} item={el} />
      ))}
      <p>{`El precio total es: $${totalPrice}`}</p>
      <button className="button-primary button-clear" onClick={clearCart}>
        Vaciar Carrito
      </button>
      <button className="button-primary button-clear" onClick={sendOrder}>
        Finalizar Compra
      </button>
    </div>
  );
}

/* const CartListItem = () => {
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
        <div>
          <button className="button-primary button-clear" onClick={deleteCart}>
            Vaciar Carrito
          </button>
          <button className="button-primary button-clear">
            Finalizar Compra
          </button>
        </div>
      ) : (
        <div>
          <h3>Tu carrito está vacío</h3>
          <p>¿Todavia no sabés qué comprar?</p>
        </div>
      )}
    </section>
  );
};

export default CartListItem; */
