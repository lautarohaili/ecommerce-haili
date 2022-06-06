import React, { createContext, useContext, useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  where,
  query,
  documentId,
  writeBatch,
  getDocs,
} from "firebase/firestore";

const cartContext = createContext([]);

export function UseCartContext() {
  return useContext(cartContext);
}

export default function CartContextProv({ children }) {
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [orderId, setOrderId] = useState();

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
  function createOrder() {
    let order = {};

    order.buyer = {
      name: "Lautaro",
      email: "lautarohaili@gmail.com",
      phone: "1157744983",
    };
    order.total = totalPrice;
    order.items = cartList.map((item) => {
      const id = item.id;
      const name = item.name;
      const quantity = item.quantity;
      const newStock = item.stock - item.quantity;
      const price = item.price * item.quantity;
      return { id, name, quantity, newStock, price };
    });

    async function updateStocks() {
      const queryCollectionStocks = collection(db, "items");
      const queryUpdateStocks = query(
        queryCollectionStocks,
        where(
          documentId(),
          "in",
          cartList.map((item) => item.id)
        )
      );
      const batch = writeBatch(db);

      await getDocs(queryUpdateStocks)
        .then((resp) =>
          resp.docs.forEach((res) =>
            batch.update(res.ref, {
              stock: order.items.find((item) => item.id === res.id).newStock,
            })
          )
        )
        .catch((err) => console.log(err));

      batch.commit();
    }

    const db = getFirestore();
    const queryCollectionOrders = collection(db, "orders");
    addDoc(queryCollectionOrders, order)
      .then((resp) => setOrderId(resp.id))
      .then(() => updateStocks())
      .catch((err) => console.log(err))
      .finally(() => clearCart());
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        totalPrice,
        totalItems,
        orderId,
        addToCart,
        clearCart,
        clearItem,
        createOrder,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

/*
export const CartContext = createContext(null);

export function UseCartContext() {
  return useContext(CartContext);
}

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [orderId, setOrderId] = useState();


  const addToCart = (item, qty) => {
    if (cart.some((el) => el.id === item.id)) {
      const newCart = [...cart];
      newCart.forEach((el) => {
        if (el.id === item.id) {
          el.qty = el.qty + qty;
        }
      });
      console.log(newCart);

      updateCart([...newCart]);
    } else {
      let product = { ...item, qty };
      updateCart([...cart, product]);
    }
  };

  const deleteCartById = (id) => {
    const newCart = [...cart];
    let index = newCart.findIndex((el) => el.id === id);

    newCart.splice(index, 1);

    updateCart([...newCart]);
  };

  const deleteCart = () => {
    updateCart([]);
  };

  function updateCart(arr) {
    setCart(arr);
    setTotalPrice(
      arr
        .map((curr) => curr.qty * curr.qty)
        .reduce((acc, curr) => acc + curr, 0)
    );
    setTotalItems(
      arr.map((curr) => curr.qty).reduce((acc, curr) => acc + curr, 0)
    );
  }

  return (
    <CartContext.Provider
      value={{
        setCart,
        addToCart,
        totalPrice,
        totalItems,
        deleteCartById,
        deleteCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider; */
