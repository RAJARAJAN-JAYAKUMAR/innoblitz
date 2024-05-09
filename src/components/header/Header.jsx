import React from "react";
import './Header.css'
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-info p-3 text-dark navcont border border-secondary">
        <div className="container-fluid">
          {/* Logo on the left */}
          <a className="navbar-brand " href="#">
            <img src="/Innoblitz_logo.png" alt="Bootstrap" width="64" height="60" />
          </a>

          {/* Navigation links on the right */}
          <div className="collapse navbar-collapse  justify-content-end font-weight-bold" id="navbarNav">
            <ul className="navbar-nav">
                {/* home */}
              <li className="nav-item">
                <a className="nav-link active fs-5" href="#">
                  Home
                </a>
              </li>
              {/* Product */}
              <li className="nav-item">
                <a className="nav-link fs-5" href="#">
                  Product
                </a>
              </li>
              {/* About */}
              <li className="nav-item">
                <a className="nav-link fs-5" href="#">
                  About
                </a>
              </li>
              {/* Register */}
              <li className="nav-item">
                <a className="nav-link fs-5" href="#">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
