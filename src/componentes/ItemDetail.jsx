import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import BuyButtons from "./BuyButtons";
import ItemCount from "./ItemCount";
import "./styles/ItemDetail.css";

export default function ItemDetail({ item }) {
  const [inputType, setInputType] = useState("itemCount");
  const { addToCart } = useCartContext();

  function onAdd(quantity) {
    addToCart({ ...item, quantity });
  }
  function handleInputType() {
    setInputType("buyButtons");
  }

  return (
    <div className="product-detail">
      <img className="product-detail__img" src={item.img} alt="" />
      <div className="product-detail__info">
        <h2 className="itemDetail__title">{item.name}</h2>
        <p className="itemDetail__description">{item.description}</p>
        <ul className="info-grid">
          <li>Precio:</li>
          <li>${item.price}</li>
          <li>Stock:</li>
          <li>{item.stock}</li>
        </ul>
        {inputType === "itemCount" ? (
          <ItemCount
            item={item}
            initial={1}
            stock={5}
            onAdd={onAdd}
            handleInputType={handleInputType}
          />
        ) : (
          <BuyButtons />
        )}
      </div>
    </div>
  );
}
