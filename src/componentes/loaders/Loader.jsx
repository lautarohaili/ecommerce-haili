import logoGrande from "../image/loadingCarrito.gif";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <img className="loader__img" src={logoGrande} alt="" />
      <h2 className="loader__text">Cargando...</h2>
    </div>
  );
}
