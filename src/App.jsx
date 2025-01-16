import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import Detalles from './components/pages/Detalles'

import Home from './pages/Home';
import AcercaDe from './pages/AcercaDe';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';


const NotFound = () => <h2>404: Página no Encontrada</h2>

function App() {
  
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AcercaDe />} />
          <Route path="/services" element={<Servicios />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/detalle/:id" element={<Detalles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
