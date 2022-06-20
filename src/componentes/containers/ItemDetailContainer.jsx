import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ItemDetail from "../ItemDetail";
import Loader from "../loaders/Loader";

import "./styles/ItemDetailContainer.css";
import Footer from "../footer/Footer";

export default function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loader, setLoader] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const dbQuery = doc(db, "items", id);
    getDoc(dbQuery)
      .then((resp) => setItem({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, [id]);

  return (
    <>
      <div className="itemDetailContainer">
        {loader ? <Loader /> : <ItemDetail item={item} />}
        <div className="detalle-titulo">
          <h2>Especificaciones Tecnicas</h2>
        </div>
        <div className="detalle-producto">
          <div>
            <h3>{item.titulo1}</h3>
            <p> {item.info1}</p>
          </div>
          <div>
            <h3>{item.titulo2}</h3>
            <p> {item.info2}</p>
          </div>
          <div>
            <h3>{item.titulo3}</h3>
            <p> {item.info3}</p>
          </div>
          <div>
            <h3>{item.titulo4}</h3>
            <p> {item.info4}</p>
          </div>
          <div>
            <h3>{item.titulo5}</h3>
            <p> {item.info5}</p>
          </div>
          <div>
            <h3>{item.titulo6}</h3>
            <p> {item.info6}</p>
          </div>
          <div>
            <h3>{item.titulo7}</h3>
            <p> {item.info7}</p>
          </div>
          <div>
            <h3>{item.titulo8}</h3>
            <p> {item.info8}</p>
          </div>
          <div>
            <h3>{item.titulo9}</h3>
            <p> {item.info9}</p>
          </div>
        </div>
      </div>{" "}
      <div>
        <Footer />
      </div>
    </>
  );
}
