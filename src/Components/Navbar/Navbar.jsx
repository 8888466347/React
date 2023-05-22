import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='Navbar'> 
      <header>
<div className="header-wrapper">
  <div class="logo-wrapper">
    <a href="#" className="logo"><img src="/logo192.png" alt="logo here"/></a>
      <div class="mobile-toggle">
         <span></span>
         <span></span>
         <span></span>
      </div>
  </div>

     <div className="navigation">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
              <li><a href="about">About us</a></li>
                <li><a href="services">Services</a></li>
            <li><a href="contact">Contact us</a></li>
          </ul>
        </nav>
     </div>
</div>
</header>
    </div>
  )
}

export default Navbar
