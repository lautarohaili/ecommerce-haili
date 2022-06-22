import { useState } from "react";
import "./styles/ItemCount.css";

export default function ItemCount({ currentStock, onAdd }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => quantity < currentStock && setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

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
        <span className="count-container__qty">
          {currentStock <= 0 ? 0 : quantity}
        </span>
        <button
          id="plus"
          className="count-container__button"
          onClick={increase}
        >
          +
        </button>
      </div>

      <button
        className="count-container__agregar"
        onClick={() => onAdd(quantity)}
        style={{
          pointerEvents: currentStock <= 0 && "none",
          opacity: currentStock <= 0 && "0.5",
        }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}
