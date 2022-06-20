import React from "react";
import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import swal from "sweetalert";
import "../Form/Form.css";
import { Link } from "react-router-dom";

export const Form = () => {
  const db = getFirestore();
  const { cartList } = useCartContext();
  const total = cartList.reduce(
    (acc, item) => (acc = acc + parseFloat(item.price) * item.count),
    0
  );

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    emailConfirm: "",
    lastName: "",
    adress: "",
    city: "",
  });

  function handleInputChange(e) {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  }

  function newOrder(e) {
    e.preventDefault();
    let order = {};
    if (buyer.email === buyer.emailConfirm) {
      order.buyer = buyer;
      order.date = new Date();
      order.items = cartList.map((item) => {
        const id = item.id;
        const name = item.name;
        const price = item.price;
        const quantity = item.count;
        const stock = item.stock;

        return { id, name, price, quantity, stock };
      });

      order.total = total;

      const queryCollectionOrders = collection(db, "orders");

      setTimeout(() => {
        addDoc(queryCollectionOrders, order)
          .then((resp) =>
            swal({
              title: "¡Gracias por elegirnos " + buyer.name + "!",
              text:
                "La compra se ha realizado exitosamente. El ID de tu compra es " +
                resp.id,
              icon: "success",
            })
          )

          .catch((err) => console.log(err))
          .finally(() => {
            window.location.href = "/*";
          }, 8000);
      });
    } else {
      swal({
        title: "Completa bien los campos",
        icon: "error",
      });
    }
  }

  return (
    <div className="cartInfo">
      <div className="text-center py-5 mt-5">
        <h4 className="mt-5">
          Completa el formulario con tus datos para confirmar la compra.
        </h4>
      </div>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={(e) => newOrder(e)}>
            <input
              type="email"
              required
              placeholder="Mail"
              name="email"
              onChange={handleInputChange}
            />
            <input
              type="email"
              required
              placeholder="Confirme su Mail"
              name="emailConfirm"
              onChange={handleInputChange}
            />
            <input
              type="text"
              required
              placeholder="Nombre Completo"
              name="name"
              onChange={handleInputChange}
            />

            <input
              type="text"
              required
              placeholder="Dirección"
              name="adress"
              onChange={handleInputChange}
            />
            <input
              type="text"
              required
              placeholder="Localidad"
              name="city"
              onChange={handleInputChange}
            />

            <Link to="/*" className="button-home">
              <button>Volver</button>
            </Link>
            <button type="submit">
              <strong>Confirmar</strong>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
