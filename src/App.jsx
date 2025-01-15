import { useState } from 'react'
import ListaProductos from './components/pages/ListaProductos'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import Detalles from './components/pages/Detalles'

import Home from './pages/Home';

const NotFound = () => <h2>404: Página no Encontrada</h2>

function App() {
  
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>Acerca de</h1>} />
          <Route path="/services" element={<h1>Servicios</h1>} />
          <Route path="/contact" element={<h1>Contacto</h1>} />
          <Route path="/detalle/:id" element={<Detalles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
