import React, { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  function isInCart(id) {
    return cartList.some((el) => el.id === id);
  }
  function addToCart(item) {
    if (isInCart(item.id)) {
      let i = cartList.findIndex((el) => el.id === item.id);
      const newCartList = cartList;
      newCartList[i].quantity += item.quantity;
      updateCart(newCartList);
    } else {
      updateCart([...cartList, item]);
    }
  }
  function clearCart() {
    updateCart([]);
  }
  function clearItem(id) {
    const newCartList = cartList.filter((el) => el.id !== id);
    updateCart(newCartList);
  }
  function updateCart(arr) {
    setCartList(arr);
    setTotalPrice(
      arr
        .map((curr) => curr.quantity * curr.price)
        .reduce((acc, curr) => acc + curr, 0)
    );
    setTotalItems(
      arr.map((curr) => curr.quantity).reduce((acc, curr) => acc + curr, 0)
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        totalPrice,
        totalItems,
        addToCart,
        clearCart,
        clearItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
