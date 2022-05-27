import { useState } from "react";
import "./styles/ItemCount.css";

export default function ItemCount({
  item,
  initial,
  stock,
  onAdd,
  handleInputType,
}) {
  const [quantity, setQuantity] = useState(initial);

  function increase() {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }
  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  function addToCart() {
    onAdd(quantity, item.name);
    handleInputType();
  }

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          id="less"
          className="count-container__button"
          onClick={decrease}
        >
          -
        </button>
        <span className="count-container__qty">{quantity}</span>
        <button
          id="plus"
          className="count-container__button"
          onClick={increase}
        >
          +
        </button>
      </div>

      <button className="count-container__button" onClick={addToCart}>
        Agregar al Carrito
      </button>
    </div>
  );
}
