import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ShowLandingPage from './components/ShowLandingPage';
import ShoppingPage from './components/ShoppingPage';
import Header from './components/Reusable/Header';
import MyCloset from './components/MyCloset/MyCloset';
import Garment from './components/MyGallery/Garment';
import OutfitsStylesReferences from './components/OutfitsStylesReferences/OutfitsStylesReferences';
import RecommendationSection from './components/RecommendationSection/RecommendationSection';
import NotFound from './components/NotFound/NotFound';
import PhotoUploadScreen from './components/PhotoUploadScreen';
import LoginVault from './components/LoginForm/LoginVault';
import Main from './components/Main/MainComponent';
import ImageGallery from './components/ChargeImages';
import CalendarPage from './components/CalendarPage';
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
      <Header />
      <AppRoutes />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
    </BrowserRouter>
  );
}

function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (document.cookie === '' && (location.pathname === '/main'||location.pathname === '/upload')) {
      navigate('/login');
    }
  }, [navigate, location.pathname]);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<ShowLandingPage />} />
        <Route path="shopping" element={<ShoppingPage />} />
        <Route path="styles" element={<OutfitsStylesReferences />} />
        <Route path="recommendation" element={<RecommendationSection />} />
        <Route path="myCloset" element={<MyCloset />} />
        <Route path="Garment" element={<Garment />} />
        <Route path="*" element={<NotFound />} />
        <Route path="upload" element={<PhotoUploadScreen/>} />
        <Route path="login" element={<LoginVault/>} />
        <Route path="charge" element={<ImageGallery/>} />
        <Route path="calendar" element={<CalendarPage/>} />
        <Route path="main" element={<Main/>} /> {/* Ruta protegida */}
      </Route>
    </Routes>
  );
}

export default App;
