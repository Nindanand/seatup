import passOn from "../img/login_pass.svg"
import passOff from "../img/login_pass_no.svg"
import googleIcon from "../img/login_google.png"
import ugmIcon from "../img/login_ugm.png"
import { useState } from 'react'

const Login = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="bg-[url(./img/login_bg.png)] bg-cover h-screen -mt-3">
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="flex-col w-3/12 gap-y-8 box-content rounded-xl px-20 py-10 flex justify-center items-center bg-brokenwhite drop-shadow-lg">
          <h1 className="text-black font-extrabold text-3xl ">Buat Akun </h1>
          <div>
            <div class="w-full flex items-center gap-1">
              <div class="w-1/2 ">
                <div class="flex w-full">
                  <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                  <input type="text" class="w-full -ml-10 pl-5 pr-3 py-2 rounded-full bg-abu h-12 focus:outline-none" placeholder="Nama Depan"></input>
                </div>
              </div>
              <div class="w-1/2">
                <div class="flex w-full">
                  <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                  <input type="text" class="w-full -ml-10 pl-5 pr-3 py-2 rounded-full bg-abu h-12 focus:outline-none" placeholder="Nama Belakang"></input>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <form action="#" className="w-full">
              <label className="relative block">
                <input type="email" name="email" id="email" className="flex rounded-full  bg-abu text-gray-900 pl-5 h-12 w-full focus:outline-none" placeholder="Email" required=""></input>
              </label>
            </form>
          </div>
          <div className="w-full">
            <form action="#" className="w-full">
              <label className="relative block">
                <input type="tel" name="tel" id="phone" className="flex rounded-full  bg-abu text-gray-900 pl-5 h-12 w-full focus:outline-none" placeholder="Nomor Telepon" required=""></input>
              </label>
            </form>
          </div>

          <div className="w-full">
            <form action="#" className=" w-full">
              <label className="relative block">
                <input type={(open === false) ? 'password' : 'text'} name="password" id="password" className="flex rounded-full bg-abu text-gray-900 h-12 w-full pl-5 focus:outline-none" placeholder="Kata Sandi" required=""></input>
                <div className="absolute inset-y-0 right-4  flex items-center text-sm leading-5">
                  <div>
                    {
                      (open === false) ? <img src={passOff} onClick={toggle} alt="" /> :
                        <img src={passOn} onClick={toggle} alt="" />
                    }
                  </div>
                </div>
              </label>
            </form>
          </div>


          <div className="flex justify-center items-center w-full gap-2">
            Sudah memiliki akun?
            <a className="font-bold text-merah" href="/login"> Masuk</a>
          </div>

          <div>
            <button type="button" class="text-black hover:bg-kuningtua bg-kuning rounded-full px-6 py-3 font-extrabold  drop-shadow-lg  text-center ">Daftar</button>
          </div>


          <div className="relative flex  items-center w-full">
            <div className="flex-grow border-t border-darkerabu"></div>
            <span className="flex-shrink mx-4 ">atau daftar dengan</span>
            <div className="flex-grow border-t border-darkerabu"></div>
          </div>


          <div class="w-full flex items-center" >
            <button type="button" className="flex flex-row hover:bg-darkerabu items-center justify-center w-full px-4 py-2 text-black bg-white rounded-full  text-center  outline outline-2 outline-darkerabu">
              <div className="flex basis-5/12 items-center justify-center w-full">
                <img src={googleIcon} className="w-9" alt=""></img>
              </div>
              <div className="flex basis-7/12">
                Google
              </div>
            </button>
          </div>
          <div class="w-full flex items-center " >
            <button type="button" className="flex flex-row  hover:bg-darkbiru items-center justify-center w-full px-4 py-2 text-white bg-biru rounded-full  text-center  outline outline-2 outline-darkerabu font-bold">
              <div className="flex basis-4/12 items-center justify-center w-full pl-8">
                <img src={ugmIcon} className="w-9" alt=""></img>
              </div>
              <div className="flex basis-8/12 pl-6 ">SSO UGM</div>
            </button>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Login