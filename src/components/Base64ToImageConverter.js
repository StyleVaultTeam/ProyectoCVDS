import React, { useState } from 'react';

const Base64ToImageConverter = () => {
  const [base64String, setBase64String] = useState('');
  
  const getFileFromBase64 = (base64String) => {
    const img = new Image();
    img.src = base64String;
    return img;
  };
  
  const handleConvert = () => {
    const imgElement = getFileFromBase64(base64String);
    document.body.appendChild(imgElement);
  };

  return (
    <div>
      <h1>Convertir Base64 a Imagen</h1>
      <textarea id="payload" value={base64String} onChange={(e) => setBase64String(e.target.value)} />
      <button id="convert" onClick={handleConvert}>Convertir</button>
    </div>
  );
};

export default Base64ToImageConverter;