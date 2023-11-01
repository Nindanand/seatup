import React from "react";
import SearchImg from "../img/search-icon.png";
import Makanan1 from "../img/products/menu-pic-1.png";
import Makanan2 from "../img/products/menu-pic-2.png";
import Makanan3 from "../img/products/menu-pic-3.png";
import Makanan4 from "../img/products/menu-pic-4.png";
import Makanan5 from "../img/products/menu-pic-5.png";
import Makanan6 from "../img/products/menu-pic-6.png";
import IconDelete from "../img/products/delete-icon.png";
import Arrow from "../img/products/arrow.png";
import { Link } from "react-router-dom";

const MenuCard = ({ image, name, price, desc }) => {
    return (
        <button className="rounded-3xl transition ease-in-out duration-500 filter transform md:hover:scale-110 z-60">
            <div className="relative h-96 w-auto">
                <div className="flex justify-end">
                    <div className="absolute w-9 h-9 md:w-12 md:h-12 -mt-5 -mx-5 md:-mt-6 md:-mx-6 xl:w-16 xl:h-16 rounded-full flex justify-center items-center text-center font-bold text-2xl p-2 shadow-xl bg-kuning hover:brightness-110 z-10">
                        +
                    </div>
                </div>

                <img
                    alt=""
                    src={image}
                    className="absolute z-0 w-auto h-full object-cover rounded-lg"
                />

                <div className="relative h-full w-full flex flex-col justify-end p-8 sm:pl-8 text-white bg-gradient-to-t from-black rounded-lg">
                    <div className="flex flex-col justify-end h-full w-full text-left">
                        <div className="relative font-montserrat font-bold text-3xl md:text-2xl flex justify-start tracking-wide">
                            {name}
                        </div>
                        <div className="relative font-semibold text-xl md:text-md lg:text-base flex justify-start brightness-90">
                            {price}
                        </div>
                        <div className="relative font-light text-sm md:text-sm flex justify-start brightness-75">
                            {desc}
                        </div>
                    </div>
                </div>

            </div>
        </button>
    );
};

const MenuList = ({ name, quantity }) => {
    return (
        <>
            <div className="flex flex-col gap-3 w-full h-auto ">
                <div className="flex flex-row gap-5 w-full h-full">
                    <div className="lg:text-xs font-semibold xl:text-lg">{name}</div>
                    <div className="bg-gray-500 px-3 rounded-full text-slate-200 lg:text-xs xl:text-lg">
                        x{quantity}
                    </div>
                </div>
                <img
                    alt=""
                    src={IconDelete}
                    className="object-contain absolute right-32 lg:right-16 xl:right-20"
                />
                <div className="border-b-2 border-opacity-20 border-black"></div>
            </div>
        </>
    );
};

export default function Products() {
    return (
        <div>
            {/* header */}
            <div className="flex flex-col overflow-hidden h-100 w-full">
                <div className="bg-products-header bg-cover h-1/4 w-screen sm:h-3/5 lg:h-5/6">
                    <div className="flex relative justify-center h-10 rounded-full bg-white drop-shadow-xl w-3/5 mt-28 mx-auto mb-5 lg:mb-12 py-auto sm:mt-64 sm:h-14 lg:h-16 lg:mt-72 lg:w-3/4">
                        <form action="#" className="w-full relative flex flex-wrap">
                            <label className="block text-gray-400">
                                <span className="absolute pt-1 px-2 w-5/6 md:pt-3 lg:pt-4 lg:px-6">
                                    <img
                                        src={SearchImg}
                                        className="scale-50 lg:scale-100"
                                        alt="search-icon"
                                    />
                                </span>

                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    className="pr-96 bg-transparent absolute text-gray-400 justify-center h-10 ml-10 focus:outline-none text-xs font-regular sm:text-sm md:h-14 md:text-semibold lg:h-16 lg:text-lg lg:ml-20"
                                    placeholder="Lagi mau makan apa?"
                                ></input>
                            </label>
                        </form>
                    </div>
                </div>

                {/* contents */}
                <div className="flex flex-col lg:flex-row">
                    <div className="relative flex-col px-10 sm:px-20 lg:pl-32 pt-16 lg:w-3/4 h-100 mb-16">
                        <div className="font-bold text-2xl pb-5">Kategori</div>

                        <div className="font-semibold flex flex-col flex-1 lg:flex-row gap-2 justify-between pb-12">
                            <select className="bg-merah text-white rounded-xl pl-6 py-3 pr-56">
                                <option>Makanan</option>
                                <option>Minuman</option>
                                <option>Cemilan</option>
                                <option>Semua</option>
                            </select>

                            <select className="bg-kuning2 text-slate-400 rounded-xl pl-6 py-3 pr-20">
                                <option>Sortir Berdasarkan: Paling Laris</option>
                                <option>Sortir Berdasarkan: Harga</option>
                            </select>
                        </div>

                        <div className="grid md:grid-cols-2 xl:grid-cols-3 md:gap-10 gap-7">
                            <MenuCard
                                image={Makanan1}
                                name="Nasi Kuning"
                                price="Rp10.000,00"
                                desc="Nasi kuning ini enak sekali dilengkapi dengan lauk yang lezat."
                            />
                            <MenuCard
                                image={Makanan2}
                                name="Olive Fried Chicken"
                                price="Rp12.000,00"
                                desc="Siapa sih yang tidak tahu dengan makanan ini?"
                            />
                            <MenuCard
                                image={Makanan3}
                                name="Ayam Rizky"
                                price="Rp23.000,00"
                                desc="Menu yang satu ini disajikan dengan tekstur yang lembut dan bumbu gurih."
                            />
                            <MenuCard
                                image={Makanan4}
                                name="Bakso"
                                price="Rp10.000,00"
                                desc="Bakso dengan kuah yang gurih dan daging yang berserat."
                            />
                            <MenuCard
                                image={Makanan5}
                                name="Mie Goreng"
                                price="Rp11.000,00"
                                desc="Mie goreng yang lembut ini siap disantap untuk menghilangkan rasa laparmu."
                            />
                            <MenuCard
                                image={Makanan6}
                                name="Nasi Goreng Berkah"
                                price="Rp23.000,00"
                                desc="Makanan yang satu ini disajikan hangat dengan banyak santapan."
                            />
                            <MenuCard
                                image={Makanan6}
                                name="Nasi Goreng"
                                price="Rp14.000,00"
                                desc="Makanan yang satu ini disajikan hangat dengan banyak santapan."
                            />
                            <MenuCard
                                image={Makanan6}
                                name="Nasi Goreng"
                                price="Rp14.000,00"
                                desc="Makanan yang satu ini disajikan hangat dengan banyak santapan."
                            />
                        </div>
                    </div>
                    {/*recap pesanan*/}
                    <div className="bg-transparent w-full h-100 lg:mt-52 px-20 pb-10 lg:pr-10 lg:pl-3 lg:w-1/4 lg:sticky lg:top-10 lg:justify-center">
                        <h1 className="text-3xl md:text-4xl xl:text-5xl font-black border-b-4 mb-5 xl:pl-5 px-2 pb-2 border-opacity-20 border-black text-gray-500">
                            Daftar Pesanan
                        </h1>

                        <div className="flex flex-col gap-5 font-semibold text-gray-500 bg-slate-200 rounded-3xl h-auto w-100 shadow-md lg:px-7 px-10 py-5">
                            <MenuList name="Ayam Rizky" quantity="1" />
                            <MenuList name="Nasi Goreng Berkah" quantity="1" />
                            <div className="-mx-4">
                                <div className="flex justify-between bg-gray-300 w-full h-auto rounded-xl py-2  px-4 align-text-bottom">
                                    <h1 className="font-extrabold text-2xl lg:text-lg xl:text-2xl text-semibold">
                                        Subtotal
                                    </h1>
                                    <div className="align-center lg:text-sm xl:text-xl">
                                        Rp46.000,00
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/cart"
                            className="mt-5 bg-kuning rounded-full w-full h-14 shadow-xl flex
            focus:outline-none justify-center items-center text-center
            font-extrabold text-2xl lg:text-sm xl:text-lg 2xl:text-2xl p-2 hover:opacity-75"
                        >
                            <img
                                alt=""
                                src={Arrow}
                                className="absolute right-28 lg:right-14 lg:scale-75 xl:scale-100 xl:right-16"
                            />
                            Pesan Sekarang!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
