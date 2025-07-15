import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import { UserService } from '../core/UserService.js';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { Label } from '../styledComponents/StyledComponents.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const servicio = UserService.getInstance();
  const { setUser } = useContext(UserContext);
  
  const loguearse = (e) => {
    e.preventDefault();

     const form = e.target;
  if (!form.checkValidity()) {
    // Forzá que el navegador muestre los errores
    form.reportValidity();
    return;
  }

    try {

      let user = servicio.autenticar(email, password);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      navigate('/home');
      
    } catch (err) {
      console.log('ese usuario no existe en el sistema!' + email, ", " + password);
      toast.error('usuario o contraseña incorrectos');
    }



  };

  const registrarse = (e) => {
    e.preventDefault();
    navigate('/registro');
  }

  return (
    <div className='container'>
      <form onSubmit={loguearse}>
        <div className='campo'>
          <Label>Email:</Label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='campo'>
          <Label>Contraseña:</Label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
        <button type="button" className="btn btn-secondary w-100" onClick={registrarse}>Registrarse</button>
        <ToastContainer position="bottom-right" />
      </form>

    </div>

  );
}

export default Login;

