import React, { useState } from 'react';
import ShowLandingPage from './components/ShowLandingPage';
import ShoppingPage from './components/ShoppingPage';
import Header from './components/Reusable/Header';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateToShoppingPage = () => {
    setCurrentPage('shopping');
  };

  const navigateToLandingPage = () => {
    setCurrentPage('landing');
  };

  return (
    <div>
      <Header navigateToShoppingPage={navigateToShoppingPage} navigateToLandingPage={navigateToLandingPage} />
      {currentPage === 'landing' && <ShowLandingPage onNavigate={navigateToShoppingPage} />}
      {currentPage === 'shopping' && <ShoppingPage onNavigate={navigateToLandingPage} />}
    </div>
  );
}

export default App;
