import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router';
import Profil from './component/Profil';
import Seat from './component/Seat';
import Homepage from './component/Homepage';
import Login from './component/Login';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Error from './component/Error';
import Register from './component/Register';
import LoadingPayment from './component/LoadingPayment';
import { useState } from 'react';
import PaymentPage from './component/PaymentPage';
import NotificationPage from './component/NotificationPage';
import Products from './component/Products';
import OrderMode from './component/OrderMode'


function App() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <Navbar login={login}/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/seat' element={<Seat />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/loading-payment' element={<LoadingPayment />} />
        <Route path='/login' element={login ? <Profil /> : <Login setLogin={setLogin}/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/notification' element={<NotificationPage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/order-mode' element={<OrderMode />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
