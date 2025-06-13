import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import { UserService } from '../core/UserService.js';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState('');
    const navigate = useNavigate();
    const servicio = new UserService();

    const registrarse = (e) => {
        e.preventDefault();
        if(admin === 'Admin'){
            servicio.createAdmin(email, password); 
        }else{
            servicio.createClient(email, password);
        }
        navigate('/login')
        
    }
    return (
        <div className='container'>
            <form>
                <div className='campo'>
                    <label>Email:</label>
                    <input
                        type="email"
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
                <label>
                    <input type="radio" name="admin" value="Admin" onChange={(e) => setAdmin(e.target.value)}/>
                    Admin
                </label>
                <button type='submit' onClick={registrarse}>Registrarse</button>
            </form>
        </div>

    );
}

export default Login;
