import { PriceDisplay } from "../Cart/PriceDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { CartData } from "../Cart/Cart";


export const RincianMenu = ({item}) => {
    const { setItems } = useContext(CartData);

    const dispatch = (type) => {
        setItems({ type, payload: item.id });
    };
    const CircularButton = ({text, onClick}) => {
        return (
            <>
                <button 
                    className="relative w-12 h-12 xl:w-16 xl:h-16 mx-3 mr-3 rounded-full flex justify-center items-center text-center p-5 shadow-xl bg-kuning hover:bg-opacity-75" 
                    onClick={onClick}>
                    {text}
                </button>
            </>
        )
    }
    
    return(
        <div className="bg-merah text-abu font-extrabold p-10 my-4 rounded-3xl flex flex-col lg:flex-row lg:justify-evenly h-full ">
            <div className="flex flex-col">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-col flex-1 flex items-center lg:items-start">
                        <h1 className="text-lg xl:text-4xl mb-4 xl:mb-9 ">{item.name}</h1>   
                        <p className=" text-sm xl:text-lg xl:w-4/5 mb-5 xl:mb-8 font-medium text-center lg:text-start ">
                            {item.description}
                        </p>
                        <input type="text w-full"
                            className="p-3 rounded-lg bg-broken2white bg-opacity-20 focus:outline-none w-full mb-4 text-center lg:text-start"
                            defaultValue={item.notes}
                        >
                        </input>
                    </div>
                    <div className="flex flex-col flex-1 items-center xl:my-3 justify-center">
                        <div className="lg:px-4 lg:py-4 mb-4 text-center">
                            <img src={item.image} className="h-60 w-60 xl:h-80 xl:w-80" alt=""></img>
                        </div>
                    </div>
                </div>
                    <div className="flex flex-col justify-center lg:justify-evenly items-center lg:flex-row w-full">
                        <div className="flex flex-col justify-center items-center lg:items-start w-6/12">
                            <h2 className="xl:mb-8 text-md xl:text-lg mb-2">
                                <PriceDisplay value={item.quantity * item.price} />
                            </h2>
                            <button className="bg-kuning text-black w:full lg:w-1/4 px-6 py-2 flex content-center justify-center lg:justify-evenly xl:mb-16 rounded-3xl items-center mb-3 shadow-xl hover:bg-opacity-75">
                                <FontAwesomeIcon icon={faPencil} className={"pr-3"}/>
                                Edit
                            </button>
                        </div>
                        <div className=" flex flex-row text-black justify-center items-center w-4/12 flex-[1_1_0]">
                            <CircularButton text={"-"} onClick={() => dispatch("decrement")}/>
                            <h1 className="text-xl xl:text-2xl self-center text-abu px-3">{item.quantity}</h1>
                            <CircularButton text={"+"} onClick={() => dispatch("increment")}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}