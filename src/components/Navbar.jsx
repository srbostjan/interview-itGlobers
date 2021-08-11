import React from 'react'

const Navbar = () => (
  <header className="header">
    <nav>
      <div>
        <img src="https://itglobers.com/wp-content/uploads/2020/05/cropped-it-globers-logo.png" alt="logo" />
      </div>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="bar-btn"><img src="https://img.icons8.com/material-outlined/50/000000/menu--v3.png"/></label>
      <ul className="nav-menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Testimonios</a></li>
        <li><a href="#">Trabaja con nosotros</a></li>
      </ul>
    </nav>
  </header>
);
export default Navbar;