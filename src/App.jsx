import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import ProtectedPage from './pages/ProtectedPage';
import './css/app.css'
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import { UserProvider } from './UserContext';

function App() {
  return (
    <>
    <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register/>}/>
        <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
        
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </UserProvider>
      
    </>
  );
}

export default App;
