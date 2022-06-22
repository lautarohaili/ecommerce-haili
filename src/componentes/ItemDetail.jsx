import { useEffect, useState } from "react";
import { UseCartContext } from "../context/CartContext";
import BuyButtons from "./BuyButtons";
import ItemCount from "./ItemCount";
import "./styles/ItemDetail.css";

export default function ItemDetail({ item }) {
  const [inputType, setInputType] = useState("itemCount");
  const { qtyInCart, addToCart, checkQtyInCart } = UseCartContext();

  const onAdd = (quantity) => {
    addToCart({ ...item, quantity });
    setInputType("buyButtons");
  };
  useEffect(() => {
    checkQtyInCart(item);
  });

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
            item={item}
            currentStock={item.stock - qtyInCart}
            onAdd={onAdd}
          />
        ) : (
          <BuyButtons />
        )}
      </div>
    </div>
  );
}
