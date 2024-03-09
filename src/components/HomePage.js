import React, { useState } from 'react';
import { FaFacebookF, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';
import ContentPage from './contentPage';
import './HomePage.css'; // Import CSS file for styling

function HomePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="homePageBackground">
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid bg-transparent">
          <a className="navbar-brand " href="/">Sudhanshu Thapa</a>
          <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Link</a>
              </li>
              <li className="nav-item dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <a className="nav-link dropdown-toggle text-white" href="/" role="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-white" href='/' aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success text-white" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <ContentPage />
      <div className="SocialLinks">
        <h1>This is the links </h1>
        <div className="linkContainer">
          <ul className='linkBox'>
              <a className='linkOne ' aria-current="page" href="/"><FaFacebookF /></a>
              <a className='linkOne ' aria-current="page" href="/"><FaGithubSquare /></a>
              <a className='linkOne ' aria-current="page" href="/"><FaInstagramSquare /></a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
