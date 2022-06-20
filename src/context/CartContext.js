import React, { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  //añadir al carrito//
  function addToCart(item) {
    const index = cartList.findIndex((product) => product.id === item.id);
    if (index !== -1) {
      toast("Agregaste " + item.name + " al carrito", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      let cantOld = cartList[index].count;
      cartList[index].count = cantOld += item.count;
      setCartList([...cartList]);
    } else {
      toast("Agregaste " + item.name + " al carrito");
      setCartList([...cartList, item]);
    }
  }
  //eliminar producto//
  const deleteItem = (id) => {
    const newCart = [...cartList];
    let index = newCart.findIndex((product) => product.id === id);
    newCart.splice(index, 1);

    setCartList([...newCart]);
  };

  //vaciar carrito//
  const deleteCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        deleteItem,
        addToCart,
        deleteCart,
      }}
    >
      <ToastContainer />
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
