import { Link } from 'react-router-dom';
import '../css/navbar.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import { useCarrito } from '../context/CarritoContext.jsx';
import SearchBar from './Searchbar.jsx';

function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { carrito, agregarProducto, vaciarCarrito } = useCarrito();

 
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    vaciarCarrito();
    navigate('/login');
  };
 
  return (
    <nav className='navbar'>
      <button>{user?.username || 'invitado'}</button>
      <Link to="/home"><button>Inicio</button></Link>
      {user && user.admin ? (
        <Link to="/managment"><button>Gestión</button></Link>
      ) : (
        <>
          <Link to="/ShoppingCart"><button>Carrito</button></Link>
          <SearchBar/>
        </>
       
      )}

      <button onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  );
}

export default Navbar;
