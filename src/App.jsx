import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Menu from './Menu/Menu';
import { Routes, Route } from "react-router-dom";
import About from './rounting/About';
import Home from './rounting/Home';
import Project from './rounting/Project';
import Expriences from './rounting/Expriences';
import Contact from './rounting/Contact';
import Demo from './rounting/Demo';
import DemoPage from './rounting/Demopage';

const App = () => {
  return (
    <div>
  
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/expriences" element={<Expriences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demoPage" element={<DemoPage />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      
    </div>
  );
};

export default App;
