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
    <div className="itemCount">
      <button id="less" className="itemCount__minusBtn" onClick={decrease}>
        -
      </button>
      <span className="itemCount__quantity">{quantity}</span>
      <button id="plus" className="itemCount__plusBtn" onClick={increase}>
        +
      </button>

      <button className="count-container__button" onClick={addToCart}>
        Agregar al Carrito
      </button>
    </div>
  );
}
