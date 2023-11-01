import Success from "../img/success.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingPayment from "./LoadingPayment";


const PaymentPage = () => {
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setCompleted(true)
        }, 2000)

    })

    return (

        <>
            {!completed ? (
                <LoadingPayment /> ) : (
                <div className="fixed w-full h-screen -mt-3 bg-merah">
                    <div className="flex -mt-10 h-full items-center justify-center">
                        <div className="felx flex-col box-content rounded-xl w-1/4 h-2/4 pt-8 flex justify items-center bg-white drop-shadow-lg">
                            <img className="my-4 w-1/6" src={Success} alt="" />
                            <h1 className="flex font-bold text-merah lg:text-2xl flex-col"> Pembayaran Berhasil </h1>
                            <div className=" flex flex-col my-10 w-5/6 h-3/4 bg-kuning2 rounded-xl drop-shadow-lg">
                                <div className="h-2/3">
                                    <div className="flex flex-col lg:flex-row pt-7 mx-10">
                                        <h1 className="flex-1 font-medium lg:text-medium">Nomor Order</h1>
                                        <h1 className="flex-2 font-medium lg:text-medium">A109928817762S</h1>
                                    </div>
                                    <div className="flex flex-col lg:flex-row mx-10">
                                        <h1 className="flex-1 font-medium lg:text-medium">Metode Pembayaran</h1>
                                        <h1 className="flex-2 font-medium lg:text-medium">Bank</h1>
                                    </div>
                                    <div className="flex flex-col lg:flex-row mx-10">
                                        <h1 className="flex-1 font-medium lg:text-medium">Kursi Reguler</h1>
                                        <h1 className="flex-2 font-medium lg:text-medium">A1</h1>
                                    </div>
                                </div>
                                <div className="flex flex-col h-2/5 gap-3">
                                    <div className="border-t border-abu2"></div>
                                    <div className="flex flex-col lg:flex-row mx-10">
                                        <h1 className="flex-1 font-medium lg:text-medium">Total</h1>
                                        <h1 className="flex-2 font-medium lg:text-medium">Rp52.060,00</h1>
                                    </div>
                                    <div className="flex flex-col lg:w-11/12 mx-5 font-bold items-center">
                                        <Link to={"/"} className="bg-kuning text-black rounded-lg w-full py-1 text-center">Tutup</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                )}
        </>

    )
}
export default PaymentPage;