import React, { createContext } from "react";
import { CartTotal } from "./CartTotal";
import { CartItem } from "./CartItem";
import cartDummyData from "./dummyData";
import { useReducer } from "react";

export const CartData = createContext();

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  const index = state.findIndex((item) => item.id === payload);
  const newState = [...state];

  if (type === "increment") {
    newState[index].quantity = newState[index].quantity + 1;
    console.log(newState[index].quantity)
  } else if (type === "decrement" && newState[index].quantity > 0) {
    newState[index].quantity = newState[index].quantity - 1;
  }
  return newState;
};

const Cart = () => {
  const [items, setItems] = useReducer(cartReducer, cartDummyData);
  const itemComponents = items.map((item) => (
    <CartItem item={item} key={item.id} />
  ));

  return (
    <div className="p-5 mt-2">
      <div className="font-extrabold text-2xl pb-5 border-b-black border-b-[1px]">
        Keranjang
      </div>
      <CartData.Provider value={{ items, setItems }}>
        <div className="flex flex-col py-5 w-full justify-between gap-3">
          {itemComponents}
        </div>
        <CartTotal />
      </CartData.Provider>
    </div>
  );
};

export default Cart;
