import exp from 'constants'
import React from 'react'
import  './navbar.css';

export const Navbar = () => {
  return (
    <nav className="mainNav">
      <ul>
        <li><h4>Home</h4></li>
        <li><h4>About</h4></li>
        <li><h4>Login</h4></li>
        <li><h4>Signin</h4></li>
      </ul>
    </nav>
  );
}
export default Navbar;