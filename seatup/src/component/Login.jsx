import emailImg from "../img/login_em.png"
import passwordImg from "../img/login_password.png"
import passOn from "../img/login_pass.svg"
import passOff from "../img/login_pass_no.svg"
import googleIcon from "../img/login_google.png"
import ugmIcon from "../img/login_ugm.png"
import { useState } from 'react'
import { useNavigate } from "react-router"


const Login = ({ setLogin }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  let user;
  let pass;

  const users = {
    user1: {
      username1: 'ronggo1811@gmail.com',
      password1: 'ronggo',
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername('');
    setPassword('');
  }

  const toggle = () => {
    setOpen(!open)
  }


  const handleLogin = () => {
    if (username === users.user1.username1 && password === users.user1.password1) {
      setLogin(true);
      navigate('/profil')
    } else {
      navigate('/error')
    }
  }


  return (
    <div className="bg-[url(./img/login_bg.png)] bg-cover w-full h-screen">
      <div className="flex w-full justify-center items-center h-full">
        <div className="flex-col  gap-y-8 box-content rounded-xl px-20 py-10 flex justify-center items-center bg-brokenwhite drop-shadow-lg">
          <h1 className="text-black font-extrabold text-3xl ">Selamat Datang Kembali! </h1>
          <h1>Masuk untuk melanjutkan pesanan.</h1>
          <div className="pb-0">
            <form action="#" className="w-full" onSubmit={handleSubmit}>
              <label className="relative block mb-5">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <img src={emailImg}></img>
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="rounded-full  bg-abu text-gray-900 h-12 w-full pl-10 pr-36 p-2.5 focus:outline-none "
                  placeholder="Email"
                  required=""
                  onChange={e => setUsername(e.target.value)}
                  value={username}></input>
              </label>
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <img src={passwordImg}></img>
                </span>
                <input
                  type={(open === false) ? 'password' : 'text'}
                  name="password" id="password"
                  className="rounded-full px-4 py-2 bg-abu text-gray-900 h-12 w-full pl-10 pr-36 p-2.5 focus:outline-none "
                  placeholder="Kata Sandi"
                  required=""
                  onChange={e => setPassword(e.target.value)}
                  value={password}></input>
                <div className="absolute inset-y-0 right-4  flex items-center text-sm leading-5">
                  <div>
                    {
                      (open === false) ? <img src={passOff} onClick={toggle} /> :
                        <img src={passOn} onClick={toggle} />
                    }
                  </div>
                </div>
              </label>
            </form>
          </div>
          <div className="flex justify-between w-full" >
            <div className="flex items-center ">
              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"></input>
              <label htmlFor="default-checkbox" className="ml-2  text-gray-900">Ingat Saya</label>
            </div>
            <a className="font-bold text-merah" href="#"> Lupa Kata Sandi?</a>
          </div>
          <button
            type="submit"
            className="text-black hover:bg-kuningtua bg-kuning rounded-full px-6 py-3 font-extrabold w-62 items-center drop-shadow-lg  text-center "
            onClick={e => handleLogin(e)} >
            Masuk
          </button>
          <div className="relative flex  items-center w-full">
            <div className="flex-grow border-t border-darkerabu"></div>
            <span className="flex-shrink mx-4 ">atau masuk dengan</span>
            <div className="flex-grow border-t border-darkerabu"></div>
          </div>


          <div className="w-full flex items-center" >
            <button type="button" className="flex flex-row hover:bg-darkerabu items-center justify-center w-full px-4 py-2 text-black bg-white rounded-full  text-center  outline outline-2 outline-darkerabu">
              <div className="flex basis-5/12 items-center justify-center w-full">
                <img src={googleIcon} className="w-9"></img>
              </div>
              <div className="flex basis-7/12">
                Google
              </div>
            </button>
          </div>

          <div className="w-full flex items-center " >
            <button type="button" className="flex flex-row  hover:bg-darkbiru items-center justify-center w-full px-4 py-2 text-white bg-biru rounded-full  text-center  outline outline-2 outline-darkerabu font-bold">
              <div className="flex basis-4/12 items-center justify-center w-full pl-8">
                <img src={ugmIcon} className="w-9"></img>
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