import { useContext } from "react";
import { CartData } from "./Cart";
import { CircularButton } from "./CircularButton";
import { PriceDisplay } from "./PriceDisplay";

export const QuantityInput = ({ item }) => {
  const { setItems } = useContext(CartData);

  const dispatch = (type) => {
    setItems({ type, payload: item.id });
  };
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-10">
      <div
        className="flex items-center justify-evenly rounded-full
      bg-broken2white bg-opacity-20 text-2xl py-2 px-3 gap-4"
      >
        <CircularButton text="-" onClick={() => dispatch("decrement")} />
        <h2 className="w-[2ch] text-center">{item.quantity}</h2>
        <CircularButton text="+" onClick={() => dispatch("increment")} />
      </div>
      <PriceDisplay value={item.quantity * item.price} />
    </div>
  );
};
