import { Routes, Route } from 'react-router-dom';

import { UserHome } from '../pages/User/UserHome';
import { UserDishDetails } from '../pages/User/UserDishDetails';
import { UserMenu } from '../pages/User/UserMenu';


export function AppUserRoutes() {
  

  return (
    <Routes>

      <Route path="/" element={ <UserHome />} />
      <Route path="/details/:id" element={ <UserDishDetails />} />
      <Route path="/menu" element={ <UserMenu />} /> 

    </Routes>
  )
}