import bottom from "../img/bottom.png";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Chair = ({ label, booked }) => {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    if (!booked) {
      setSelected(!selected);
    }
  };
  const getColorClass = () => {
    if (booked) {
      return "bg-merah text-abu";
    } else if (selected) {
      return "bg-lightbiru";
    }
    return "hover:bg-hijautua bg-hijau";
  };

  return (
    <div
      className={`${getColorClass()} select-none cursor-pointer w-12 h-12 text-center font-bold p-3 rounded-lg justify-center`}
      onClick={() => handleClick()}
    >
      {label}
    </div>
  );
};

const Table = ({ nama_tabel }) => {
  return (
    <div class="flex flex-col gap-2">
      <div class="flex justify-between gap-3">
        <Chair label={nama_tabel + "1"} />
        <Chair label={nama_tabel + "2"} />
      </div>
      <div class="border-2 border-black w-40 h-16 rounded-lg p-3"></div>
      <div class="flex justify-between gap-3">
        <Chair label={nama_tabel + "3"} booked={true} />
        <Chair label={nama_tabel + "4"} />
      </div>
    </div>
  );
};

const Table2 = ({ nama_tabel }) => {
  return (
    <div class="flex flex-col gap-2">
      <div class="flex justify-center gap-3">
        <Chair label={nama_tabel + "1"} />
      </div>
      <div class="border-2 border-black w-16 h-16 rounded-lg p-3"></div>
      <div class="flex justify-center gap-3">
        <Chair label={nama_tabel + "2"} />
      </div>
    </div>
  );
};

const Table3 = ({ nama_tabel }) => {
  return (
    <div class="flex flex-col gap-2">
      <div class="flex justify-between gap-5">
        <Chair label={nama_tabel + "1"} />
        <Chair label={nama_tabel + "2"} />
        <Chair label={nama_tabel + "3"} />
        <Chair label={nama_tabel + "4"} />
      </div>
      <div class="border-2 border-black h-16 rounded-lg p-3"></div>
      <div class="flex justify-between gap-9">
        <Chair label={nama_tabel + "5"} />
        <Chair label={nama_tabel + "6"} />
        <Chair label={nama_tabel + "7"} />
        <Chair label={nama_tabel + "8"} />
      </div>
    </div>
  );
};

const Seat = () => {
  return (
    <div className="flex flex-col w-full h-1/3">
      <div className="flex pt-5 font-extrabold text-merah text-3xl justify-center">
        {" "}
        Pilih Kursi
      </div>
      <div className="flex items-center justify-center">
        <div className="flex pt-4 pb-6 justify-between items-center w-9/12">
          <div className="flex items-center justify-center w-52 h-10 text-black bg-abu rounded-full text-center font-bold drop-shadow-md">
            <div className="flex basis-1/4 w-full">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div className="flextext-l">16 - 11 - 2022</div>
            <img src={bottom} className="w-7" alt=""></img>
          </div>
          <div className="flex w-44 cursor-pointer">
            <label
              for="check"
              className="flex items-center justify-around gap-4 bg-abu relative cursor-pointer w-52 h-10 rounded-full shadow-inner"
            >
              <FontAwesomeIcon icon={faUser} className="ml-2 z-10" />
              <FontAwesomeIcon icon={faUsers} className="z-10 mr-1" />
              <input type="checkbox" id="check" className="sr-only peer" />
              <span className="z-0 w-5/12 h-4/5 bg-white absolute rounded-full left-2 top-1 peer-checked:bg-white peer-checked:left-24 transision-all duration-300"></span>
            </label>
          </div>
          <div className="flex items-center justify-center w-52 h-10 text-black bg-abu rounded-full text-center font-bold drop-shadow-md">
            <div className="flex basis-1/4 w-full ">
              <FontAwesomeIcon icon={faClock} className="text-2xl" />
            </div>
            <div className="flextext-l"> 12:30 - 13:30</div>
            <img src={bottom} className="w-7" alt=""></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-row rounded-xl w-9/12 p-8 border-2 border-black">
          <div className="flex flex-col w-11/12 gap-10">
            <div className="flex justify-end">
              <div class="border-2 border-black rounded-lg p-6 w-52 flex justify-center items-center font-bold text-merah text-xl">
                Kasir
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <div className="flex w-1/12 justify-center items-center">
                <div className="flex flex-row gap-x-2">
                  <div className="rounded-xl w-12 border-2 border-black gap-y-10 gap-x-5"></div>
                  <div className="flex flex-col gap-5">
                    <Chair label="A1" />
                    <Chair label="A2" />
                    <Chair label="A3" />
                    <Chair label="A4" />
                    <Chair label="A5" />
                    <Chair label="A6" />
                    <Chair label="A7" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-11/12 gap-10">
                <div className="flex flex-row justify-between">
                  <Table nama_tabel={"B"} />
                  <Table nama_tabel={"C"} />
                  <Table nama_tabel={"D"} />
                  <Table nama_tabel={"E"} />
                  <Table2 nama_tabel={"F"} />
                  <Table2 nama_tabel={"G"} />
                </div>
                <div className="flex flex-row justify-between">
                  <Table nama_tabel={"H"} />
                  <Table nama_tabel={"I"} />
                  <Table nama_tabel={"J"} />
                  <Table nama_tabel={"K"} />
                  <Table2 nama_tabel={"L"} />
                  <Table2 nama_tabel={"M"} />
                </div>
                <div className="flex flex-row justify-between items-center gap-3">
                  <Table nama_tabel={"N"} />
                  <Table nama_tabel={"O"} />
                  <Table3 nama_tabel={"P"} />
                  <Table3 nama_tabel={"Q"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="flex px-20 pt-4 pb-6 gap-x-10 w-10/12 justify-between">
          <div className="flex flex-row gap-x-10">
            <div className="flex gap-x-5">
              <div className="flex rounded-md box-content bg-merah h-10 w-10"></div>
              <div className="flex items-center font-medium text-l">
                Tidak Tersedia
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="flex rounded-md box-content bg-hijau h-10 w-10"></div>
              <div className="flex items-center font-medium text-l">
                Tersedia
              </div>
            </div>
            <div className="flex gap-x-5">
              <div className="flex rounded-md box-content bg-lightbiru h-10 w-10"></div>
              <div className="flex items-center font-medium text-l">
                Pilihanmu
              </div>
            </div>
          </div>
          <div>
            <Link to="/checkout" className="flex px-10 h-10 items-center box-content hover:bg-kuningtua bg-kuning rounded-full">
              <div className="flex justify-center items-center font-extrabold">
                Lanjut ke Checkout
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat;
