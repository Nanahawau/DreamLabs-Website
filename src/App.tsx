import React from 'react';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hertitude from './pages/hertitude/Hertitude';
import Mavin from './pages/mavin/Mavin';
import Evos from './pages/evos/Evos';
import Alo from './pages/alo/Alo';
import ChezRo from './pages/chez-ro/ChezRo';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hertitude" element={<Hertitude />} />
        <Route path="/mavin" element={<Mavin />} />
        <Route path="/chez-ro" element={<ChezRo />} />
        <Route path="/evos" element={<Evos />} />
        <Route path="/alo" element={<Alo />} />

        <Route path="/page/:id" element={<Layout />} />
      </Routes>
    </div>
  );
};

export default App;
