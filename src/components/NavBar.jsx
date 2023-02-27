import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItem";
import "./NavBarStyle.css";

const NavBar = () => {
   let [clicked,setClicked]=useState(false)
  return (    
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">logo</h1>

        <div className="menu-icon" >
          <i className={clicked?"fas fa-times" : "fas fa-bars"} onClick={()=>setClicked(!clicked)}> </i>
        </div>

        <ul className={clicked ?"nav-menu active1":"nav-menu" }>
          {MenuItems.map((v, i) => (
            <li key={i} className={v.cName}>
              <Link to={v.url} onClick={()=>setClicked(!clicked)} >
                <i className={v.icon}></i>
                {v.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* <button>Sign Up</button> */}
      </nav>
    </>
  );
};

export default NavBar;
