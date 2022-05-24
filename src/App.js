import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./componentes/Cart";
import ItemDetailContainer from "./componentes/containers/ItemDetailContainer";
import ItemListContainer from "./componentes/containers/ItemListContainer";
import CartContextProv from "./context/CartContext";
import NavBar from "./componentes/navBar/NavBar";
import "./App.css";

function App() {
  return (
    <CartContextProv>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProv>
  );
}

export default App;
