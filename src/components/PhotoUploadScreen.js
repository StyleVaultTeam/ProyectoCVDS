import React, { useState } from 'react';

function PhotoUploadScreen() {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedTypeclothe, setselectedTypeclothe] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64String, setBase64String] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleUserInputChange = (event) => {
    setSelectedUser(event.target.value);
  };
  
  const handletypeClotheInputChange = (event) => {
    setselectedTypeclothe(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  
    // Validate file type (optional)
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

    if (!selectedFile || !base64String||!selectedTypeclothe) {
      setUploadError('Ingresa todos los datos.');
      setIsUploading(false);
      return;
    }

    const photosByUser = {
      userName: selectedUser,
      typeClothe: selectedTypeclothe,
      photo64: base64String, // Base64-encoded image data
    };

    console.log('JSON data to be sent:', JSON.stringify(photosByUser)); // Log the JSON data

    try {
      console.log(document.cookie);
      const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*=\s*([^;]*).*$)|^.*$/, '$1');

      const response = await fetch('https://appcvds2.azurewebsites.net/api/photos', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `authToken=${authToken}` // Include authToken cookie in the request
      },
      body: JSON.stringify(photosByUser),
    });
      
      if (response.ok) {
        setSelectedUser('');
        setSelectedFile(null);
        setBase64String('');
        setselectedTypeclothe('');
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
    <div>
      <h1>Upload Photo</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={selectedUser}
          onChange={handleUserInputChange}
          required
        />
        <label htmlFor="typeClothe">Tipo de ropa:</label>
        <input
          type="text"
          id="typeClothe"
          value={selectedTypeclothe}
          onChange={handletypeClotheInputChange}
          required
        />
        <br />
        <label htmlFor="image">Imagen:</label>
        <input type="file" id="image" accept="image/*" onChange={handleFileChange} />
        <br />
        {base64String && (
          <div>
            <p>Preview:</p>
            <img src={base64String} alt="Selected" />
          </div>
        )}
        {uploadError && <p className="error">{uploadError}</p>}
        <button type="button" disabled={isUploading} onClick={handleUpload}>
          {isUploading ? 'Subiendo...' : 'Subir'}
        </button>
      </form>
    </div>
  );
}

export default PhotoUploadScreen;
