import React, { useState } from 'react';

const Base64ToImageConverter = () => {
  const [base64String, setBase64String] = useState('');
  
  const getFileFromBase64 = (base64String) => {
    const img = new Image();
    img.src = base64String;
    return img;
  };
  
}

export default Base64ToImageConverter;