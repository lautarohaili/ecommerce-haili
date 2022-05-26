import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeCarousel from "../carousel/HomeCarousel";
import ItemList from "../ItemList";
import Loader from "../loaders/Loader";

import "./styles/ItemListContainer.css";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch("/data/data.json")
        .then((response) => response.json())
        .then((data) => setItems(data))
        .catch((err) => console.log(err))
        .finally(() => setLoader(false));
    }, 1000);
  }, []);

  return (
    <div className="itemListContainer">
      <HomeCarousel />
      {loader ? <Loader /> : <ItemList items={items} id={id} />}
    </div>
  );
}