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
import ProductManagment from './pages/admin/ProductManagment';
import ProductCreate from './pages/admin/ProductCreate';
import ProductDelete from './pages/admin/ProductDelete';
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
        <Route path="/managment" element={
            <ProtectedRoute>
              <ProductManagment/>
            </ProtectedRoute>
          } />
         <Route path="/create" element={
            <ProtectedRoute>
              <ProductCreate/>
            </ProtectedRoute>
          } />
           <Route path="/delete" element={
            <ProtectedRoute>
              <ProductDelete/>
            </ProtectedRoute>
          } />
       
        <Route path="*" element={<Login />} />
        
      </Routes>

      </CarritoProvider>
    </UserProvider>
      
    </>
  );
}

export default App;
