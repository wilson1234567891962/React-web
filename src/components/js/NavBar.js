import React from 'react';
import logo from '../images/logo.svg'
import '../styles/Navbar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="https://www.google.com" >
            <img className="Navbar__brand-logo" src={logo} alt="" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;