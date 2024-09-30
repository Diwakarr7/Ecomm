import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductItemDetails from './components/ProductItemDetails';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      {/* routes */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductItemDetails />} />
      </Routes>
      <Footer />
      {/* footer */}
    </div>
  );
}

export default App;
