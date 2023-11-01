import Success from "../img/success.png";
import { Link } from "react-router-dom";


const NotificationPage = () => {
    return (
        <div className="fixed w-full h-screen -mt-3 bg-merah">
            <div className="flex -mt-10 h-full items-center justify-center">
                <div className="flex-col box-content rounded-xl w-1/3 h-2/3 pt-8 flex justify items-center bg-white drop-shadow-lg">
                    <img className="my-6 w-1/6" src={Success} alt="" />
                    <h1 className="flex font-bold text-merah lg:text-2xl flex-col"> Pembayaran Berhasil </h1>
                    <div className=" flex flex-col my-10 w-5/6 h-2/3 bg-kuning2 rounded-xl drop-shadow-lg">
                        <div className="h-2/3">
                            <div className="flex flex-col lg:flex-row pt-10 mx-10">
                                <h1 className="flex-1 font-medium lg:text-xl">Nomor Order</h1>
                                <h1 className="flex-2 font-medium lg:text-xl">A109928817762S</h1>
                            </div>
                            <div className="flex flex-col lg:flex-row mx-10">
                                <h1 className="flex-1 font-medium lg:text-xl">Metode Pembayaran</h1>
                                <h1 className="flex-2 font-medium lg:text-xl">Bank</h1>
                            </div>
                            <div className="flex flex-col lg:flex-row mx-10">
                                <h1 className="flex-1 font-medium lg:text-xl">Kursi Reguler</h1>
                                <h1 className="flex-2 font-medium lg:text-xl">A1</h1>
                            </div>
                        </div>
                        <div className="flex flex-col h-1/3 gap-3">
                            <div className="border-t border-abu2"></div>
                            <div className="flex flex-col lg:flex-row mx-10">
                                <h1 className="flex-1 font-medium lg:text-xl">Total</h1>
                                <h1 className="flex-2 font-medium lg:text-xl">Rp26.400,00</h1>
                            </div>
                            <div className="flex flex-col lg:w-11/12 mx-5 font-bold items-center">
                                <Link to={"/"} className="bg-kuning text-black rounded-lg w-full py-2 text-center">Tutup</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NotificationPage;