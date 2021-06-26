import React from 'react';
import './Header.css'
import logo from '../public/logo.png'; 
import S

function Header() {
  return (
    <div> 
      <div className="Banner">
          <div className="nav">
            <img src={logo}  id="logo"/>
            <h5 className="site-name">Site</h5>
            <nav>
              <a href="#Home"> Home </a>
              <a href="#Shop"> Shop </a>
              <ShoppingCartIcon />
            </nav>
           </div>
      </div>
    </div>
  )
}

export default Header