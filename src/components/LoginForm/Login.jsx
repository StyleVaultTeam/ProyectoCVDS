import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = { email, password };

        try {
            const response = await fetch('https://appcvds2.azurewebsites.net/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const jsonRespones = await response.json();
                document.cookie = "authToken="+jsonRespones.token;
            } else {
                if (response.status === 403) {
                    setErrorMessage('CONTRASEÑA INCORRECTA');
                } else if (response.status === 404) {
                    setErrorMessage('USUARIO INCORRECTO');
                } else {
                    setErrorMessage('Error desconocido');
                }
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            setErrorMessage('Error de red');
        }
    };

    return(
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {errorMessage && <div className="error">{errorMessage}</div>}
                <div className="input-box">
                    <input type="text" placeholder="Usuario" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Contraseña" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className='icon'/>
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default LoginForm;
