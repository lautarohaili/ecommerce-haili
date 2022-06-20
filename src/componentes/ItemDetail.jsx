import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import BuyButtons from "./BuyButtons";
import ItemCount from "./ItemCount";
import "./styles/ItemDetail.css";

export default function ItemDetail({ item }) {
  const [inputType, setInputType] = useState("itemCount");
  const { addToCart } = useCartContext();

  function onAdd(count) {
    addToCart({ ...item, count: count });
    handleInputType();
  }
  function handleInputType() {
    setInputType("buyButtons");
  }

  return (
    <div className="product-detail">
      <img className="product-detail__img" src={item.img2} alt="" />
      <div className="product-detail__info">
        <h2 className="itemDetail__title">{item.name}</h2>
        <p className="itemDetail__description">{item.description}</p>
        <p className="itemDetail__description">{item.description2}</p>
        <p className="itemDetail__description">{item.description3}</p>
        <ul className="info-grid">
          <li>Precio:</li>
          <li>${item.price}</li>
          <li>Stock:</li>
          <li>{item.stock}</li>
        </ul>
        {inputType === "itemCount" ? (
          <ItemCount
            initial={1}
            stock={item.stock}
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
