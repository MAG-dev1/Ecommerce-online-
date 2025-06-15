import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';
import './css/app.css'
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { UserProvider } from './context/UserContext';
import { CarritoProvider } from './context/CarritoContext';
function App() {
  return (
    <>
    <UserProvider>
      <CarritoProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register/>}/>
        <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        
       
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
       
       
        <Route path="*" element={<Login />} />
        
      </Routes>

      </CarritoProvider>
    </UserProvider>
      
    </>
  );
}

export default App;
