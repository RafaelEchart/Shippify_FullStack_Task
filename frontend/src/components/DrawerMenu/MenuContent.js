import React from 'react';
import { NavLink } from 'react-router-dom';


import './style.css';

const MenuContent = ({closeMenu}) =>  (
    <>
      <nav className="nav_container">
      <ul className="ul_menu_container">

              <NavLink to="/" className="menu-options" onClick={closeMenu}>List of Drivers</NavLink>
              <NavLink to="/empty_route" className="menu-options" onClick={closeMenu}>New Vehicle</NavLink>

      </ul>
      </nav>
    </>
  );

export default MenuContent;
