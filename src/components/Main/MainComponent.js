import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ImageGallery.css'; // Archivo CSS para los estilos

const ImageGallery = () => {
    const [responseText, setResponseText] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [inputUserName, setInputUserName] = useState('');

    const getPhotosByUserName = async () => {
        // Verificar si el documento de la cookie está vacío
        if (!document.cookie) {
            window.location.href = '/'; // Redirigir a la página principal
            return;
        }
    
        setIsLoading(true);
        try {
            const response = await fetch('https://appcvds2.azurewebsites.net/api/login/username', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });
            if (!response.ok) {
                throw new Error('Error fetching response');
            }
            const responseData = await response.json(); // Convertir la respuesta a JSON
            console.log('Response data:', responseData); // Muestra el JSON en la consola
            const name = responseData.name; // Extraer el valor de "name" del JSON
            setResponseText(name); // Guardar el valor de "name" en el estado
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://appcvds2.azurewebsites.net/api/login/logout', {
                method: 'POST',
                credentials: 'include'
            });
            if (!response.ok) {
                throw new Error('Error logging out');
            }
            // Limpiar la cookie de autenticación
            document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            // Redirigir a la página de login
            window.location.href = '/login'
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleInputChange = (event) => {
        setInputUserName(event.target.value);
    };

    return (
        <div className="image-gallery-container">
            <h1 className="gallery-title">Mi Armario</h1>
            <div className="input-section">
                <label htmlFor="userNameInput" className="input-label">Enter Username:</label>
                <input
                    type="text"
                    id="userNameInput"
                    value={inputUserName}
                    onChange={handleInputChange}
                    placeholder="Enter username..."
                    className="input-field"
                />
                <button onClick={getPhotosByUserName} className="get-photos-button">Get Photos</button>
            </div>
            {isLoading && <p className="loading-message">Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            <div className="response-text">
                {responseText ? (
                    <p>{responseText}</p>
                ) : (
                    <p>No response yet</p>
                )}
            </div>
            <button onClick={handleLogout} className="logout-button">Logout</button>
            <Link to="/calendar" className="calendar-link">
                <button className="calendar-button">Go to Calendar</button>
            </Link>
        </div>
    );
};

export default ImageGallery;
