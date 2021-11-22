import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// import { useNavigate  } from "react-router-dom";
//import Login from "./pages/Login";
// import { FaInstagramSquare } from "react-icons/fa";
const Navbar = () => {
  // const history = useNavigate();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  // const routeChange = () =>{ 
  //   console.log("jbcdshjg");
  //   let path = `Home`; 
    // history.push(path);
  // }
  
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <b>NIKE</b>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <span onClick={event =>  window.location.href=''}>Home</span>
            </li>
            <li>
              <span onClick={event =>  window.location.href='Login'}>Login</span>
            </li>
            <li>
              <span onClick={event =>  window.location.href='Register'}>Register</span>
            </li>
            <li>
              <span onClick={event =>  window.location.href='Cart'}>Cart</span>
            </li>
            
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
  
            <span><FaFacebookSquare className="Facebook" /></span>
            </li>
            <li>
            <span><FaInstagramSquare className="instagram" /></span>
            </li>
            <li>
            <span><FaYoutubeSquare className="youtube" /></span>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <span onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </span>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;