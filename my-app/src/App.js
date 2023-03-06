import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// I removed Layout stuff from this line
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import TOS from './pages/TOS';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<TOS />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
