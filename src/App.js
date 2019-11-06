import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Cards from './pages/cards';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Cards />
    </BrowserRouter>
  );
}

export default App;
