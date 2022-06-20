import { useState } from "react";
import "./styles/ItemCount.css";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  function increase() {
    count < stock ? setCount(count + 1) : alert("No hay mas stock");
  }

  function decrease() {
    count > initial ? setCount(count - 1) : alert("El carrito está vacío");
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
        <span className="count-container__qty">{count}</span>
        <button
          id="plus"
          className="count-container__button"
          onClick={increase}
        >
          +
        </button>
      </div>

      <button className="count-container__agregar" onClick={() => onAdd(count)}>
        Agregar al Carrito
      </button>
    </div>
  );
}
