import ornamen_kiri from "../img/ornamen_kiri.png";
import ornamen_kanan from "../img/ornamen_kanan.png";
import homepage_btn1 from "../img/homepage_btn1.png";
import homepage_btn2 from "../img/homepage_btn2.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HomepageHeader = () => {
  return (
    <>
      <div className="flex bg-kuning h-44 items-center justify-center w-full">
        <img
          src={ornamen_kanan}
          alt=""
          className="invisible md:visible absolute right-0"
        ></img>
        <h1 className="text-3xl font-extrabold mt-8">Selamat datang, semua!</h1>
        <img
          src={ornamen_kiri}
          alt=""
          className="invisible md:visible absolute left-0"
        ></img>
      </div>
      <div className="absolute -mt-10 flex justify-center w-full">
        <button className=" bg-merah text-white h-20 font-extrabold py-3 rounded-3xl px-20 text-3xl drop-shadow-xl">
          SeatUp
        </button>
      </div>
    </>
  );
};

const HomepageCard = ({ image, text, link }) => {
  return (
    <div className="flex flex-col gap-0 border-merah border-4 rounded-3xl">
      <img alt="" src={image} className="h-3/12"></img>
      <Link
        to={link}
        className="bg-merah m-2 text-white font-bold rounded-3xl text-xl p-2 text-center"
      >
        {text}
      </Link>
    </div>
  );
};

const Homepage = () => {

  return (
    <>
      <HomepageHeader />
      <div className="flex flex-row justify-evenly mt-16 flex-wrap gap-5 p-3">
        <HomepageCard
          image={homepage_btn1}
          text="Menu Hari Ini"
          link="/products"
        />
        <HomepageCard
          image={homepage_btn2}
          text="Cek Ketersediaan Kursi"
          link="/seat"
        />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
