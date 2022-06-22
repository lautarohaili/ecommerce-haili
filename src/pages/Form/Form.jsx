import { useState } from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/CartContext";

import "../Form/Form.css";

export default function CartForm() {
  const [customerData, setCustomerData] = useState({});
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [email2Error, setEmail2Error] = useState(false);
  const { createOrder } = UseCartContext();

  const handleChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
  };
  const dataManage = () => {
    setNameError(!customerData.name);
    setPhoneError(!customerData.phone);
    setEmailError(!customerData.email);
    setEmail2Error(!(customerData.email2 === customerData.email));
    if (
      customerData.name &&
      customerData.phone &&
      customerData.email &&
      customerData.email2 === customerData.email
    ) {
      createOrder(customerData);
    }
  };

  return (
    <div className="cartInfo">
      <div className="titulo-form text-center py-5 mt-5">
        <h2 className="mt-5">
          Completa el formulario con tus datos para terminar la compra:
        </h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <form action="">
            <input
              name="name"
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Nombre"
            />
            {nameError && (
              <span className="cartForm__error">Debe ingresar un nombre</span>
            )}
            <input
              name="phone"
              onChange={(e) => handleChange(e)}
              type="tel"
              placeholder="Teléfono"
            />
            {phoneError && (
              <span className="cartForm__error">Debe ingresar un teléfono</span>
            )}
            <input
              name="email"
              onChange={(e) => handleChange(e)}
              type="email"
              placeholder="Correo eléctronico"
            />
            {emailError && (
              <span className="cartForm__error">
                Debe ingresar un correo electrónico
              </span>
            )}
            <input
              name="email2"
              onChange={(e) => handleChange(e)}
              type="email"
              placeholder="Repita correo electrónico"
            />
            {email2Error && (
              <span className="cartForm__error">
                El correo electrónico no coincide
              </span>
            )}
            <textarea
              className="cartForm__textarea"
              name="comment"
              onChange={(e) => handleChange(e)}
              id=""
              cols="30"
              rows="10"
              placeholder="Escriba aquí sus comentarios..."
            ></textarea>
          </form>
          <Link to="/*">
            <button className="button-home">Volver</button>
          </Link>
          <button className="button-terminar" onClick={dataManage}>
            <strong>Confirmar</strong>
          </button>
        </div>
      </div>
    </div>
  );
}
