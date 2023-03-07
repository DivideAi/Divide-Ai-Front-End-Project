import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login }from './pages/Login'
import { Register }from './pages/Register'
import { CounterPage } from './pages/CounterPage';
import { NamePeople } from './pages/NamePeople/';
import { ShareProducts } from './pages/ShareProducts';
import { Waiter } from './pages/Waiter';
import { SharedBill } from './pages/SharedBill';

export const Router = () =>(
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/counterpage' element={<CounterPage />} />
        <Route path='/namepeople' element={<NamePeople />} />
        <Route path='/shareproducts' element={<ShareProducts />} />
        <Route path='/waiter' element={<Waiter />} />
        <Route path='/sharedbill' element={<SharedBill />} />
    </Routes>
)