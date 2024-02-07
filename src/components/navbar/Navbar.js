import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        
        <div className="fs-4">AYI GROUP</div>
      </span>


      <ul className="nav nav-pills">
      <Link to="/home "className="btn btn-outline-primary btn-sm">Home</Link>
        <li className="nav-item"><a href="#" className="nav-link">Sobre Nosotros</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Nuestro Socios</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Preguntas Frecuentes</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contactanos</a></li>
      </ul>
    </header>
  </div>  
  )
}

export default Navbar
