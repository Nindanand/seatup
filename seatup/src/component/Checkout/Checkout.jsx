import { useState, useReducer} from "react";
import cartDummyData from "../Cart/dummyData";
import { cartReducer } from "../Cart/Cart";
import { RincianMenu } from "./CheckoutMenu";
import { CartData } from "../Cart/Cart";
import { Dropdown } from "./Dropdown";
import { RincianPembayaran } from "./CheckoutCharge";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
    const [items, setItems] = useReducer(cartReducer, cartDummyData);

    const chargeBy = [
        {
            value:"tunai", 
            label:"Tunai"
        },
        {
            value:"gopay",
            label:"Gopay"
        },
        {
            value:"dana",
            label:"Dana"
        },
        {
            value:"transfer bank",
            label:"Transfer Bank"
        }
    ]

    const Promo = [
        {
            value:"12.12, 40% Diskon", 
            label:"12.12, 40% Diskon"
        },
        {
            value:"diskon gopay 5%",
            label:"Diskon Gopay 5%"
        }
    ]
    
    
    const itemComponents = items.map((item) => (
        <RincianMenu item={item} key={item.id} />
    ));


    return (
        <div className="checkout-container flex flex-col justify-center mx-6 my-24 xl:mx-12 xl:my-20 ">
            <div className="order flex flex-col lg:w-8/12 w-full mb-3 ">
                <h1 className="text-3xl xl:text-5xl font-extrabold  border-b-4 xl:mb-5 xl:pl-10 px-2 pb-2 border-opacity-20 border-black">Checkout</h1>
                <div className="customer text-md xl:text-2xl font-semibold opacity-75 xl:mb-16 xl:pl-10 lg:text-start text-center">
                    <h2>Ronggo Tsani Musyafa</h2>
                    <h2>085775184434</h2>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row"> 
                <CartData.Provider value={{ items, setItems }}>
                    <div className="flex flex-col lg:w-10/12 w-full">
                        {itemComponents}
                    </div>
                </CartData.Provider>
                <div className="flex flex-col lg:w-4/12 w-full mt-4 ">
                    <div className="sticky top-20 ">
                        <div className="pembayaran bg-merah xl:mx-7 rounded-2xl px-4 mx-3 h-max text-abu xl:mb-2 justify-center py-3">
                            <h1 className="text-xl xl:text-3xl font-extrabold xl:mx-7 xl:my-6 pb-2 border-b-kuning border-opacity-60 border-b-2 xl:pb-1">Total Pembayaran</h1>
                            <RincianPembayaran items={items}/>
                            
                        </div>
                        <div className="bg-merah rounded-2xl xl:mx-7 px-4 mx-3 mt-2 flex-col flex text-abu font-bold divide-y divide-kuning">
                            <Dropdown placeHolder={"Pilih Pembayaran"} options={chargeBy}/>
                            <Dropdown placeHolder={"Terapkan Promo"} options={Promo}/>
                        </div>
                        <div className="bg-merah mx-3 xl:mx-7 xl:px-2 text-center py-4 my-2 rounded-xl">
                            <Link 
                                className="text-lg xl:text-2xl font-extrabold xl:mx-7  xl:my-6 pb-2 text-abu xl:pb-1 hover:opacity-70"
                                to={"/payment"}
                            >
                                <FontAwesomeIcon icon={faMoneyBills} className="px-2 "/>
                                Proses Pembayaran
                                </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Checkout;