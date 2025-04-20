import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CollectionsPage from './pages/CollectionsPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;