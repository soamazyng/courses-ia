import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import DesenvolvimentoWeb from './pages/DesenvolvimentoWeb';
import AplicacoesMobile from './pages/AplicacoesMobile';
import SistemasEmpresariais from './pages/SistemasEmpresariais';
import ConsultoriaTI from './pages/ConsultoriaTI';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/desenvolvimento-web" element={<DesenvolvimentoWeb />} />
            <Route path="/aplicacoes-mobile" element={<AplicacoesMobile />} />
            <Route path="/sistemas-empresariais" element={<SistemasEmpresariais />} />
            <Route path="/consultoria-ti" element={<ConsultoriaTI />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
