import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ItemDetailContainer from "./componentes/containers/ItemDetailContainer";
import ItemListContainer from "./componentes/containers/ItemListContainer";
import CartListItem from "./componentes/carrito/CartListItem";
import NuevoNavBar from "./componentes/navBar/NuevoNavBar";
import CartForm from "./pages/Form/Form";
import CartContextProv from "./context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <CartContextProv>
      <BrowserRouter>
        <div className="App">
          <NuevoNavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartListItem />} />
            <Route path="/form" element={<CartForm />} />

            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProv>
  );
}

export default App;
