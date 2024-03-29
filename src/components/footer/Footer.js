import React from 'react'
import icono from "./descarga__1_-removebg-preview.png"

const Footer = () => {
  return (
    <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p class="col-md-4 mb-0 text-body-secondary">&copy; 2024 Company, Inc</p>
  
      <span 
      className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
       <img src={icono} height="140"/>
      </span>
  
      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Trainee program</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Socios</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Preguntas</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contactanos</a></li>
      </ul>
    </footer>
      
    </div>
  )
}

export default Footer
