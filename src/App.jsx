import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Home';
import WeiyuanZhiJia from './pages/WeiyuanZhiJia';
import Jiebies from './pages/Jiebies';
import Center from './pages/Center';
import Platform from './pages/Platform';
import Plan from './pages/Plan';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weiyuanzhijia" element={<WeiyuanZhiJia />} />
        <Route path="/jiebies" element={<Jiebies />} />
        <Route path="/center" element={<Center />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </BrowserRouter>
  );
}
