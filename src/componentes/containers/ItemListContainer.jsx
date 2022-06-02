import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeCarousel from "../carousel/HomeCarousel";
import ItemList from "../ItemList";
import Loader from "../loaders/Loader";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import "./styles/ItemListContainer.css";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");
    if (!id) {
      getDocs(queryCollection)
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
    } else {
      const queryCollectionFilter = query(
        queryCollection,
        where("categoria", "==", id)
      );
      getDocs(queryCollectionFilter)
        .then((resp) =>
          setItems(resp.docs.map((el) => ({ id: el.id, ...el.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoader(false));
    }
  }, [id]);

  return (
    <div className="itemListContainer">
      <HomeCarousel />
      {loader ? <Loader /> : <ItemList items={items} id={id} />}
    </div>
  );
}

/*  
  useEffect(() => {

setTimeout(() => {
  fetch("/data/data.json")
    .then((response) => response.json())
    .then((data) => setItems(data))
    .catch((err) => console.log(err))
    .finally(() => setLoader(false));
}, 1000);
  }, []);


  const queryCollectionFilter = query(
      queryCollection,
      where("categoria", "==", "categoria")
    );

    getDocs(queryCollectionFilter)
      .then((resp) =>
        setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, []);

*/
