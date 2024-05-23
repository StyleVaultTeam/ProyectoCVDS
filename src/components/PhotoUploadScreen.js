import React, { useState, useEffect } from 'react';
import { FaTshirt } from 'react-icons/fa';
import { PiPantsFill } from 'react-icons/pi';
import { GiConverseShoe } from 'react-icons/gi';
import './photoupload.css';
 
function PhotoUploadScreen() {
  const [userName, setUserName] = useState('');
  const [selectedTypeclothe, setSelectedTypeclothe] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64String, setBase64String] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [responseText, setResponseText] = useState('');
 
  useEffect(() => {
    getUserName();
  }, []);
 
  const getUserName = async () => {
    if (!document.cookie) {
      window.location.href = '/login';
      return;
    }
 
    setIsLoading(true);
    try {
      const response = await fetch('https://appcvds2.azurewebsites.net/api/login/username', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Error fetching username');
      }
      const responseData = await response.json();
      const name = responseData.name;
      setUserName(name);
      setResponseText(name);
      setUploadError(null);
    } catch (error) {
      setUploadError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
 
  const handletypeClotheInputChange = (event) => {
    setSelectedTypeclothe(event.target.value);
  };
 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
 
    if (!file.type.match('image/*')) {
      setUploadError('Please select an image file.');
      return;
    }
 
    setSelectedFile(file);
    const reader = new FileReader();
 
    reader.onload = () => {
      const base64 = reader.result;
      setBase64String(base64);
    };
 
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
      setUploadError('Failed to read the selected image.');
    };
 
    reader.readAsDataURL(file);
  };
 
  const handleUpload = async () => {
    setIsUploading(true);
    setUploadError(null);
 
    if (!selectedFile || !base64String || !selectedTypeclothe) {
      setUploadError('Ingresa todos los datos.');
      setIsUploading(false);
      return;
    }
 
    const photosByUser = {
      userName: userName,
      typeClothe: selectedTypeclothe,
      photo64: base64String,
    };
    const authToken = document.cookie;
    const headers = {
      'Content-Type': 'application/json',
      'Set-cookie': document.cookie,
      'Authorization': authToken,
    };
 
    console.log('JSON data to be sent:', JSON.stringify(photosByUser));
 
    try {
      console.log(document.cookie);
 
      const response = await fetch('https://appcvds2.azurewebsites.net/api/photos', {
        method: 'POST',
        credentials: 'include',
        headers: headers,
        body: JSON.stringify(photosByUser),
      });
 
      if (response.ok) {
        setSelectedFile(null);
        setBase64String('');
        setSelectedTypeclothe('');
        setIsUploading(false);
      } else {
        const errorData = await response.json();
        setUploadError(errorData.message || 'Upload failed.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError('An error occurred during upload.');
    } finally {
      setIsUploading(false);
    }
  };
 
  return (
    <div className="wrapper">
      <h1>Upload Photo</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="input-box">
          <label htmlFor="username" className="username-label">Hola!</label>
          <span className="username">{userName}</span>
        </div>
        <div className="input-box">
          <label htmlFor="typeClothe">Tipo de ropa</label>
          <select id="typeClothe" value={selectedTypeclothe} onChange={handletypeClotheInputChange} required>
            <option value="" disabled>Selecciona un tipo de ropa</option>
            <option value="parte superior"><FaTshirt /> Parte Superior</option>
            <option value="parte inferior"><PiPantsFill /> Parte Inferior</option>
            <option value="zapatos"><GiConverseShoe /> Zapatos</option>
          </select>
        </div>
        <div className="input-box">
          <label htmlFor="image" className="image-button">Seleccionar Imagen</label>
          <input type="file" id="image" accept="image/*" onChange={handleFileChange} />
        </div>
        {base64String && (
          <div className="preview">
            <p>Preview:</p>
            <img src={base64String} alt="Selected" className="preview-image" />
          </div>
        )}
        {uploadError && <p className="error">{uploadError}</p>}
        <button type="button" disabled={isUploading} onClick={handleUpload} className="upload-button">
          {isUploading ? 'Subiendo...' : 'Subir'}
        </button>
      </form>
    </div>
  );
}
 
export default PhotoUploadScreen;