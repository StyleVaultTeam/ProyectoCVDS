import React from 'react';
import ShowLandingPage from './components/ShowLandingPage';
import ShoppingPage from './components/ShoppingPage';
import Header from './components/Reusable/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyCloset from './components/MyCloset/MyCloset';
import OutfitsStylesReferences from './components/OutfitsStylesReferences/OutfitsStylesReferences';
import RecommendationSection from './components/RecommendationSection/RecommendationSection';
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<ShowLandingPage />} />
          <Route path="shopping" element={<ShoppingPage />} />
          <Route path="styles" element={<OutfitsStylesReferences />} />
          <Route path="recommendation" element={<RecommendationSection />} />
          <Route path="myCloset" element={<MyCloset />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
    </BrowserRouter>
  );
}

export default App;
