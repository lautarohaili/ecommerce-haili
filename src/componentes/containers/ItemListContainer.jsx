import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import HomeCarousel from "../carousel/HomeCarousel";
import ItemList from "../ItemList";
import Loader from "../loaders/Loader";
import Footer from "../footer/Footer";
import Payments from "../payments/Payments";

import "./styles/ItemListContainer.css";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");
    const queryCollectionFilter = id
      ? query(queryCollection, where("categoria", "==", id))
      : queryCollection;

    getDocs(queryCollectionFilter)
      .then((resp) => resp.docs.map((el) => ({ id: el.id, ...el.data() })))
      .then((data) =>
        data.sort((a, b) => {
          if (a.categoria > b.categoria) {
            return 1;
          }
          if (a.categoria < b.categoria) {
            return -1;
          }
          return 0;
        })
      )
      .then((sorted) => setItems(sorted))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, [id]);

  return (
    <div className="itemListContainer">
      <HomeCarousel />
      <Payments />
      <div className="titulo-items">
        <h2>Nuestros Productos</h2>
      </div>
      {loader ? <Loader /> : <ItemList items={items} id={id} />}
      <Footer />
    </div>
  );
}
