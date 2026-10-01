import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Gutters from './pages/Gutters';
import Colours from './pages/Colours';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import ScrollToTop from "./components/ScrollToTop.jsx";
import Services from "./pages/Services.jsx";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
            <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gutters" element={<Gutters />} />
              <Route path="/colours" element={<Colours />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
          <FloatingWhatsApp />
          <BackToTop />
          <Footer />
        </div>
      </Router>
  );
}

export default App;