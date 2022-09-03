import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../../AuthArea/Login/Login';
import Logout from '../../AuthArea/Logout/Logout';
import Register from '../../AuthArea/Register/Register';
import Home from '../../HomeArea/Home/Home';
import PageNotFound from '../PageNotFound/PageNotFound';

function Routing(): JSX.Element {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />




      <Route path="/home" element={<Home />} />
      {/* <Route path='/product-list' element={<ProductList/>}/>
          <Route path="/add-product" element={<AddProduct/>} /> */}




      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Routing;
