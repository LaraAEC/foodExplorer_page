import { Routes, Route } from 'react-router-dom';

import { AdminHome } from '../pages/Admin/AdminHome';
import { AdminNewDish } from '../pages/Admin/AdminNewDish';
import { AdminDishEdit} from '../pages/Admin/AdminDishEdit';
import { AdminDishDetails } from '../pages/Admin/AdminDishDetails';
import { AdminMenu } from '../pages/Admin/AdminMenu';



export function AppAdminRoutes() {
  

  return (
    <Routes>

      <Route path="/" element={ <AdminHome />} />
      <Route path="/new" element={ <AdminNewDish />} />
      <Route path="/edit/:id" element={ <AdminDishEdit />} />
      <Route path="/details/:id" element={ <AdminDishDetails />} />
      <Route path="/menu" element={ <AdminMenu />} />
    
    </Routes>
  )
}