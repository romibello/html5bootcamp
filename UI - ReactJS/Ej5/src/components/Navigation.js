import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto"> 
          <li className="nav-item"><NavLink to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink to="/addmovie">Add Movie</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navigation;