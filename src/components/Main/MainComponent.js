import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Base64ToImageConverter from '../Base64ToImageConverter'; // Importar el componente Base64ToImageConverter
import './ImageGallery.css'; // Archivo CSS para los estilos
import SliderMain from '../Slider/SliderMain';
import '../Slider/Slider.css';

const ImageGallery = () => {
    const [responseText, setResponseText] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [camisetas, setCamisetas] = useState([]);
    const [pantalones, setPantalones] = useState([]);

    useEffect(() => {
        // Cargar nombre de usuario al montar el componente
        getUserName();
    }, []);

    useEffect(() => {
        // Obtener fotos cada vez que el nombre de usuario cambie
        if (userName) {
            getPhotosByUserName();
        }
    }, [userName]);

    const getPhotosByUserName = async () => {
        // Verificar si el documento de la cookie está vacío
        if (!document.cookie) {
            window.location.href = '/login'; // Redirigir a la página principal
            return;
        }
    
        setIsLoading(true);
        try {
            const response = await fetch(`https://appcvds2.azurewebsites.net/api/photos/${userName}`, {
                method: 'GET',
                credentials: 'include'
            });
            if (!response.ok) {
                throw new Error('Error fetching photos');
            }
            const responseData = await response.json();
            // Filtrar fotos de camisetas y pantalones
            const camisetasArray = responseData.filter(item => item.typeClothe === 'parte superior');
            const pantalonesArray = responseData.filter(item => item.typeClothe === 'parte inferior');
            setCamisetas(camisetasArray);
            setPantalones(pantalonesArray);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const getUserName = async () => {
        // Verificar si la cookie está vacía
        if (!document.cookie) {
            window.location.href = '/login'; // Redirigir a la página principal
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
                throw new Error('Error fetching username');
            }
            const responseData = await response.json();
            const name = responseData.name;
            setUserName(name);
            setResponseText(name);
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

    return (
        <div className="image-gallery-container">
            <h1 className="gallery-title">Mi Armario</h1>
            <div className="input-section">
            <h2>Hola! {responseText}</h2>
            </div>
            {isLoading && <p className="loading-message">Loading...</p>}
            {error && <p className="error-message">Error: {error}</p>}
            <h2 className="pantalon-title">Parte Superior</h2>
            <div className="slider-container">
                <SliderMain arregloImagenes={camisetas} />
            </div>
            <h2 className="pantalon-title">Parte Inferior</h2>
            <div className="slider-container">
                <SliderMain arregloImagenes={pantalones} />
            </div>
            <Base64ToImageConverter /> {/* Render the Base64ToImageConverter component */}
            
            <button onClick={handleLogout} className="logout-button">Logout</button>
            <Link to="/calendar" className="calendar-link">
                <button className="calendar-button">Go to Calendar</button>
            </Link>
            <Link to="/upload" className="upload-link">
                <button className="upload-button">Upload Photos</button>
            </Link>
        </div>
    );
};

export default ImageGallery;