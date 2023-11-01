import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";


export default function Navbar({login}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const location  = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");

  const handleProfil = () => {
    if (window.performance) {
      if (login) {
        return (
          <>
            <i className=" opacity-75"></i><span className="text-xl ">Profil</span>
          </>
        );
      } else {
        return (
          <>
            <i className=" opacity-75"></i><span className="text-xl ">Daftar</span>
          </>
        );
      }
    }
  }

  return (
    <>
      <nav className="sticky z-50 top-0 flex flex-wrap items-center justify-between px-2 py-3 500 navbar-seatup shadow-xl">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between min-w-full">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              className="text-2xl font-extrabold leading-relaxed inline-block whitespace-nowrap text-white"
              to={"/"} 
            >
            SeatUp
            </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faCoffee} />
            </button>
          </div>
          <div
            className={
                "lg:flex flex-grow items-center text-xl text-center " +
                (navbarOpen ? " flex pt-4" : " hidden")
              }
              id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink 
                  className={`flex items-center text-xs py-3 px-3 font-extrabold hover:opacity-75 ${splitLocation[1] === "" ? "rounded-full py-3 px-7 text-black bg-kuning" : " text-white"}`}
                  to={"/"}
                >
                  <i className="opacity-75 "></i><span className="text-xl ">Beranda</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`flex items-center text-xs py-3 px-3 font-extrabold hover:opacity-75 ${splitLocation[1] === "products" ? "rounded-full py-3 px-7 text-black bg-kuning" : " text-white"}`}
                  to={"/products"}
                >
                  <i className=" opacity-75"></i><span className="text-xl ">Menu</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`flex items-center text-xs py-3 px-3 font-extrabold hover:opacity-75 ${splitLocation[1] === "cart" ? "rounded-full py-3 px-7 text-black bg-kuning" : " text-white"}`}
                  to={"/cart"}
                >
                  <i className=" opacity-75"></i><span className="text-xl ">Keranjang</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`flex items-center text-xs py-3 px-3 font-extrabold hover:opacity-75 ${splitLocation[1] ===( login ? "profil" : "register" )? "rounded-full py-3 px-7 text-black bg-kuning" : " text-white"}`}
                  to={login ? "/profil" : "/register"}
                >
                  {e => handleProfil(e)}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
