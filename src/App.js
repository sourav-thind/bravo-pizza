
import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header.js';
import './App.css';
import Homepage from './components/Homepage/Homepage.js';
import Footer from './components/footer/Footer.js';
import FooterSocials from './components/footer/FooterSocials.js';

function App() {
  const [isModalActive, setIsModalActive] = useState(false);

  const showModal = () => {
    setIsModalActive(!isModalActive);
  };
  const hideMenu = () => {
    setIsModalActive(false);
  };
  return (
<BrowserRouter>
    <Header  showModal={showModal} isModalActive={isModalActive} hideMenu={hideMenu} />
    <Routes>
        <Route path="/" element={<Homepage showModal={showModal} isModalActive={isModalActive} hideMenu={hideMenu} />} />
    </Routes>
    <FooterSocials/>
   <Footer/>
</BrowserRouter>
  );
}

export default App;
