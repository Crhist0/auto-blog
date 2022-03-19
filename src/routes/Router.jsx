import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appbar from '../components/Appbar/Appbar';
import { Repo } from '../pages/Repo/Repo';
import { About } from '../pages/About/About';
import { Landing } from '../pages/Landing/Landing';

export const Router = () => {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/repo" element={<Repo />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};
