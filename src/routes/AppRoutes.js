import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ProtectedRoute from '../components/ProtectedRoute';
import { useState } from 'react';

export default function AppRoutes() {
  const [username, setUsername] = useState('');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login onLogin={(name) => setUsername(name)} />} />
        <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
} 