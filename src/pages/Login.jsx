import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import { UserService } from '../core/UserService.js';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const servicio = UserService.getInstance();
  const { setUser } = useContext(UserContext);

  const loguearse = (e) => {
    e.preventDefault();
   
    if (servicio.autenticar(email, password)) {
      localStorage.setItem('user', JSON.stringify(servicio.find(email))); //simulo que autentico un user
      setUser(servicio.find(email));
      navigate('/home');
    } 
    else{
      console.log('ese usuario no existe en el sistema!' + email, ", " + password);
    }
    
  };

  const registrarse = (e) =>{
    e.preventDefault();
    navigate('/registro');
  }

  return (
    <div className='container'>
         <form>
      <div className='campo'>
        <label>Email:</label>
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
      </div>
      <div className='campo'>
        <label>Contraseña:</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
      </div>
      <button type="submit" onClick={loguearse}>Iniciar sesión</button>
      <button type='submit' onClick={registrarse}>Registrarse</button>
    </form>
    </div>
   
  );
}

export default Login;

