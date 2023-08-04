import React from "react";
import { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header(){
  var [extendIcon , setExtend] = useState(false)

  function iconChange(){
      setExtend( current => !current)
  }

    return(<header>
    <div className='z-10'>
        <nav>
        <a href="/">
            <div class="logo">
                <h1 className="textLogo">
                    <img src="./assets/logo.png" alt="" /> AHMED_SMC
                </h1>
            </div>
        </a>
            <div>
                <ul id='navbar' className={extendIcon === true ? "#navbar active" : "#navbar"}>
                    <li id="navLink">
                        <NavLink to="/about-me">About</NavLink>
                    </li>
                    <li id="navLink">
                        <NavLink to="/courses">Services</NavLink>
                    </li>
                    <li id="navLink">
                        <NavLink to="/psychology">Psychology</NavLink>
                    </li>
                    <li id="navLink">
                        <NavLink to="/contact-me">Contact Me</NavLink>
                    </li>
                    <li id="navLink">
                        <NavLink to="/disclaimer">Disclaimer</NavLink>
                    </li>
                    {/* <li><a  name="about" href="#about" onClick={onClick}>
                    About
                    </a>
                    </li>
                    <li><a name="skills" href="#skills" onClick={onClick}>

                    Courses
                    </a></li>
                    <li><a name="projects" href="#projects" onClick={onClick}>
                    Testimonials
                    </a></li>
                    <li><a name="projects" href="#projects" onClick={onClick}>
                    Psychology
                    </a></li>
                    <li><a name="projects" href="#projects" onClick={onClick}>
                    Contact Us
                    </a></li> */}
                </ul>
            </div>
            <div id="mobile">
            <button onClick={iconChange}><i id="bar" className={ extendIcon === true ? "fas fa-times icon" : "fa-sharp fa-solid fa-bars icon"} ></i></button>
            </div>

        </nav>
        <hr className='hr' style={{backgroundColor: '#282829'}}></hr>
    </div>
    </header>)
}

export default Header;