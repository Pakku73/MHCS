import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Rejoindre from '../pages/Rejoindre';
import Entreprise from '../pages/Entreprise';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/rejoindre" element={<Rejoindre />} />
      <Route path="/notre-entreprise" element={<Entreprise />} />
    </Routes>
  );
};
