import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ImageGallery.css'; // Archivo CSS para los estilos

const ImageGallery = () => {
    const [photos, setPhotos] = useState([]);
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
            const response = await fetch(`https://appcvds2.azurewebsites.net/api/photos/${inputUserName}`);
            if (!response.ok) {
                throw new Error('Error fetching photos');
            }
            const data = await response.json();
            console.log('Response data:', data, inputUserName); // Muestra el JSON en la consola
            setPhotos(data);
            setError(null);
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
            <div className="image-grid">
                {photos.map((photo, index) => (
                    <div key={index} className="image-item">
                        <img src={photo.photo64} alt={` ${index + 1}`} className="gallery-image" />
                        <p className="image-description">Type of Clothe: {photo.typeclothe}</p>
                    </div>
                ))}
            </div>
            <Link to="/calendar" className="calendar-link">
                <button className="calendar-button">Go to Calendar</button>
            </Link>
        </div>
    );
};

export default ImageGallery;
