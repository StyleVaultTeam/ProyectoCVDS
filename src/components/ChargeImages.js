import React, { useState } from 'react';
import axios from 'axios'; // Importa Axios para realizar solicitudes HTTP

const ImageGallery = ({ userName }) => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputUserName, setInputUserName] = useState('');

  const getPhotosByUserName = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://appcvds2.azurewebsites.net/api/photos/${inputUserName}`);
      console.log('Response data:', response.data,inputUserName); // Muestra el JSON en la consola
      setPhotos(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching photos');
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleInputChange = (event) => {
    setInputUserName(event.target.value);
  };

  return (
    <div>
      <h1>Image Gallery</h1>
      <label htmlFor="userNameInput">Enter Username:</label>
      <input
        type="text"
        id="userNameInput"
        value={inputUserName}
        onChange={handleInputChange}
        placeholder="Enter username..."
      />
      <button onClick={() => getPhotosByUserName(inputUserName)}>Get Photos</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="image-grid">
        {photos.map((photo, index) => (
          <div key={index} className="image-item">
            {/* Muestra la imagen con el valor de photo.photo64 */}
            <img src={photo.photo64} alt={` ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
