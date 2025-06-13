import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function ProtectedPage() {
  const isAuth = localStorage.getItem('auth') === 'true';

  if (!isAuth) return <Navigate to="/login" />;

  return (
    <div>
        <Navbar/>
        <h2>Zona Protegida</h2>
    </div>
    
);
}

export default ProtectedPage;
