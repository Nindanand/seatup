import { Link } from "react-router-dom";

const HalfPage = ({ title, image, to, color }) => {
  console.log(image)
  return (
    <div className={`flex flex-col gap-3 h-full justify-center items-center w-1/2 ${image} bg-cover`}>
      <div className={`absolute bg-${color} top-0 w-1/2 h-screen opacity-50 z-30`}></div>
      <div className="text-8xl font-extrabold z-40">{title}</div>
      <Link to={to} className="rounded-full px-5 py-1 z-40 bg-black text-white text-2xl font-bold">
        Pesan Sekarang!
      </Link>
    </div>
  );
};

const OrderMode = () => {
  return (
    <div className="fixed -mt-5 flex place-items-center w-screen h-screen justify-items-center justify-between">
      <HalfPage title="Dine In" image="bg-[url(./img/dine_in.png)]" color="white" to="/seat" />
      <HalfPage title="Take Away" image="bg-[url(./img/take_away.png)]" color="kuning" to="/checkout" />
    </div>
  );
};

export default OrderMode;
