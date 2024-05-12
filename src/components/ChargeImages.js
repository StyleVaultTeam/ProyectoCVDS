import React, { useState } from 'react';

const ImageGallery = ({ userName }) => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputUserName, setInputUserName] = useState('');

  const getPhotosByUserName = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localwebapp:8080/api/photos/${inputUserName}`);
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
      <button onClick={getPhotosByUserName}>Get Photos</button>
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
