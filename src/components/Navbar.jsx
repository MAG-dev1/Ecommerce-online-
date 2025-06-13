import { Link } from 'react-router-dom';
import '../css/navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar({props}) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user'); // o tu token
    navigate('/login');
  };

  return (
    <nav className='navbar'>
      <button>{props.username}</button>
      <Link to="/home"><button>Inicio</button></Link> 
      <Link to="/protected"><button>Carrito</button></Link>  
      <button onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  );
}

export default Navbar;
