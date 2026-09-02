import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import Colours from './pages/Colours';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
            <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/colours" element={<Colours />} />
              <Route path="/about" element={<About />} />
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