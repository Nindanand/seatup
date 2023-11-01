import { PriceDisplay } from "./PriceDisplay";
import { QuantityInput } from "./QuantityInput";

export const CartItem = ({ item }) => {
  return (
    <div
      className="flex gap-5 flex-col lg:flex-row bg-merah text-white
                p-7 rounded-lg w-full justify-items-center"
    >
      <div className="rounded-lg self-center flex-shrink-0">
        <img src={item.image} alt=""></img>
      </div>
      <div className="flex flex-col gap-2 pl-5 lg:pl-10 pr-5 justify-evenly flex-grow">
        <div className="text-2xl font-extrabold">{item.name}</div>
        <div className="">{item.variant}</div>
        <div className="my-3 text-xl text-broken2white">
          <PriceDisplay value={item.price} />
        </div>
        <input type="text"
          className="p-3 rounded-lg bg-broken2white bg-opacity-20 focus:outline-none"
          defaultValue={item.notes}
        >
        </input>
      </div>
      <QuantityInput item={item} />
    </div>
  );
};