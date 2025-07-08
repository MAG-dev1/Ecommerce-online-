import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import { UserService } from '../core/UserService.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { Label } from '../styledComponents/StyledComponents.js';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState('');
    const navigate = useNavigate();
    const servicio = UserService.getInstance();
 

    const registrarse = (e) => {
        e.preventDefault();
        try {
            if (admin === 'Admin') {
                servicio.createAdmin(email, password);
            } else {
                servicio.createClient(email, password);
            }
        } catch (error) {
            toast.error('Error al registrarse: ' + error.message);
            return;
        }
        navigate('/login')

    }
    return (
        <div className='container'>
            <form>
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
                <Label>
                    <input type="radio" name="admin" value="Admin" onChange={(e) => setAdmin(e.target.value)} />
                    Admin
                </Label>
                <button type='submit' className="btn btn-primary" onClick={registrarse}>Registrarse</button>
            </form>
            <ToastContainer position="bottom-right" />
        </div>

    );
}

export default Login;
