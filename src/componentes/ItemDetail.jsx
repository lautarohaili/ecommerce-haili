import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import BuyButtons from "./BuyButtons";
import { CartContext } from "../context/CartContext";
import "./styles/ItemDetail.css";

export default function ItemDetail({ item }) {
  const [inputType, setInputType] = useState("itemCount");
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  function onAdd(quantity) {
    addToCart({ ...item, quantity });
  }
  function handleInputType() {
    setInputType("buyButtons");
  }

  //console.log(cartList);

  return (
    <div className="product-detail">
      <img className="product-detail__img" src={item.img} alt="" />
      <div className="product-detail__info">
        <h2 className="itemDetail__title">{item.name}</h2>
        <p className="description">{item.description}</p>
        <ul className="info-grid">
          <li>Price:</li>
          <li>${item.price}</li>
          <li>Size:</li>
          <li>{item.size}</li>
          <li>Vendor:</li>
          <li>{item.vendor}</li>
          <li>Type:</li>
          <li>{item.type}</li>
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
