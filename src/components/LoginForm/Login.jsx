import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock, FaEyeSlash, FaEye} from "react-icons/fa";

const LoginForm = () => {
    const [action, setAction] = useState('login');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState('');

    const registerLink = () => {
        setAction('register');
    }

    const loginLink = () => {
        setAction('login');
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setPasswordMatchError('Las contraseñas no coinciden');
        } else {
            setPasswordMatchError('');
            console.log('Contraseñas coinciden, enviar formulario');
        }
    }

    return (
        <div className={`wrapper ${action === 'register' ? 'active' : ''}`}>
            <div className={`form-box login ${action === 'register' ? 'active' : ''}`}>
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Usuario" required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Contraseña" required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Recuérdame</label>
                    </div>
                    <button type="submit">Iniciar Sesión</button>
                    <div className="register-link">
                        <p>¿No tienes cuenta?<a href="#" onClick={registerLink}>  Regístrate</a></p>
                    </div>
                </form>
            </div>

            <div className={`form-box register ${action === 'register' ? 'active' : ''}`}>
                <form onSubmit={handleSubmit}>
                    <h1>Crear Cuenta</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Nombre de Usuario" required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Contraseña"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        {passwordVisible ? (
                            <FaEye className='icon' onClick={togglePasswordVisibility} />
                        ) : (
                            <FaEyeSlash className='icon' onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    <div className="input-box">
                        <input
                            type={confirmPasswordVisible ? "text" : "password"}
                            placeholder="Confirmar contraseña"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                        {confirmPasswordVisible ? (
                            <FaEye className='icon' onClick={toggleConfirmPasswordVisibility} />
                        ) : (
                            <FaEyeSlash className='icon' onClick={toggleConfirmPasswordVisibility} />
                        )}
                    </div>
                    {passwordMatchError && <p className="error-message">{passwordMatchError}</p>}
                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Estoy de acuerdo con los términos y condiciones</label>
                    </div>
                    <button type="submit">Registrarme</button>
                    <div className="register-link">
                        <p>¿Ya tienes cuenta?<a href="#" onClick={loginLink}>  Iniciar Sesión</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
