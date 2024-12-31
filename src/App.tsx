import React from 'react';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hertitude from './pages/hertitude/Hertitude';
import Mavin from './pages/mavin/Mavin';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hertitude" element={<Hertitude />} />
        <Route path="/mavin" element={<Mavin />} />

        <Route path="/page/:id" element={<Layout />} />
      </Routes>
    </div>
  );
};

export default App;
