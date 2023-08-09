import { Routes, Route } from 'react-router-dom';

import { UserHome } from '../pages/User/UserHome';
import { UserDishDetails } from '../pages/User/UserDishDetails';
import { UserMenu } from '../pages/User/UserMenu';
import { UserRequest } from '../pages/User/UserRequest';
import { UserPayment } from '../pages/User/UserPayment';



export function AppUserRoutes() {
  

  return (
    <Routes>

      <Route path="/" element={ <UserHome />} />
      <Route path="/details/:id" element={ <UserDishDetails />} />
      <Route path="/menu" element={ <UserMenu />} /> 
      <Route path="/request" element={ <UserRequest />} />
      <Route path="/payment" element={ <UserPayment />} />
      
    </Routes>
  )
}