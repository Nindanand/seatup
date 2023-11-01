import { Link } from "react-router-dom";
import error_404 from "../img/error_404.png"


const Error = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="text-merah text-5xl font-extrabold mb-10">
          <h1>Ups!</h1>
        </div>
        <div className="w-[300px] h-[300px] rounded-full flex flex-initial justify-center items-center bg-merah drop-shadow-lg">
          <img src={error_404}></img>
        </div>
        <div className="text-merah text-5xl font-extrabold mt-10">
          <p>Halaman Tidak Ditemukan</p>
        </div>
        <div className="text-black text-2xl mt-10">
          <p>Halaman yang Anda cari tidak tersedia.</p>
        </div>
        <Link to={"/"} className="bg-kuning text-black rounded-full px-6 py-3 font-extrabold mt-10 drop-shadow-lg text-2xl">Kembali</Link>
      </div>
    </div>
  )
}

export default Error;