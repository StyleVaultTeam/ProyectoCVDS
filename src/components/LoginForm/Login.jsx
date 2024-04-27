import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";


const LoginForm = () => {
    return(
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Usuario" required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Contraseña" required />
                    <FaLock className='icon'/>
                </div>
                <button type="sumbit">Iniciar Sesion</button>
            </form>
        </div>
    );
};

export default LoginForm;

