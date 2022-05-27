import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item, qty) => {
    if (cart.some((el) => el.id === item.id)) {
      const newCart = [...cart];
      newCart.forEach((el) => {
        if (el.id === item.id) {
          el.qty = el.qty + qty;
        }
      });
      console.log(newCart);

      setCart([...newCart]);
    } else {
      let product = { ...item, qty };
      setCart([...cart, product]);
    }
  };

  const deleteCartById = (id) => {
    const newCart = [...cart];
    let index = newCart.findIndex((el) => el.id === id);

    newCart.splice(index, 1);

    setCart([...newCart]);
  };

  const deleteCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        deleteCartById,
        deleteCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
