// import { Link } from 'react-router-dom'
// import "./navbar.css" 
// import logo from "../assets/white-logo.svg"
// import {Menu, X} from "lucide-react"

// const Navbar = () =>{

//      const [isOpen, setIsOpen] = useState (false);
    
//     return(
//         <nav>
//             <div className='nav-container'>
//             <img src={logo} alt = "Logo"/>
//             <ul className='nav-links' style = {{ display:isOpen ? "none" :"flex"}} >
//                 <li><Link to ="/Home"> Home</Link></li>
//                 <li><Link to="/Services">Services</Link></li>
//                 <li><Link to="/Portfolio">Portfolio</Link></li>
//                 <li><Link to="/Pricing">Pricing</Link></li>
//                 <li ><Link to="/Team">Team</Link></li>
//                 <li><Link to="/Contact">Contact</Link></li> 
//             </ul>
//             </div>

//             {/* hamburger menu (always visible on small screens) */}
           
//  <button onClick={() => setIsOpen(!isOpen)} 
//             style={StyleSheet.hamburger}>
//                 {isOpen ? <X size = {28}/> : <Menu size = {28}/>}
//             </button>            

//             {IsOpen && (
//                 <div style={StyleSheet.mobileMenu}>
//                     <Link to= "/" style={StyleSheet.link} onClick={() => setIsOpen(false)}>Home</Link>
//                     <Link to= "/" style={StyleSheet.link} onClick={() => setIsOpen(false)}>Services</Link>
//                     <Link to= "/" style={StyleSheet.link} onClick={() => setIsOpen(false)}>Portfolio</Link>
//                     <Link to= "/" style={StyleSheet.link} onClick={() => setIsOpen(false)}>Pricing</Link>
//                     <Link to= "/" style={StyleSheet.link} onClick={() => setIsOpen(false)}>Team</Link>
//                     <Link to= "/" style={StyleSheet.link} onClick={() => setIsOpen(false)}>Contact</Link>

//                 </div>
//             )} 
//         </nav>
//     )

// }
// export default Navbar

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/white-logo.svg";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <img src={logo} alt="Logo" style={styles.logo} />

      {/* Desktop Links */}
      <div style={{ ...styles.links, display: isOpen ? "none" : "flex" }} className="desktop-links">
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>Services</Link>
        <Link to="/portfolio" style={styles.link}>Portfolio</Link>
        <Link to="/pricing" style={styles.link}>Pricing</Link>
        <Link to="/team" style={styles.link}>Team</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>

      {/* Hamburger Button (always visible on small screens) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={styles.hamburger}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>




      {/* Mobile Menu */}
      {isOpen && (
        <div style={styles.mobileMenu}>
          <Link to="/" style={styles.link} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" style={styles.link} onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/portfolio" style={styles.link} onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link to="/pricing" style={styles.link} onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/team" style={styles.link} onClick={() => setIsOpen(false)}>Team</Link>
          <Link to="/contact" style={styles.link} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#155cd6",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    width: "120px",
  },
  links: {
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    padding: "8px 12px",
    fontSize: "18px",
    fontWeight: 600,
  },
  hamburger: {
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    marginLeft: "auto",
  },
  mobileMenu: {
    position: "absolute",
    top: "60px",
    left: 0,
    width: "100%",
    background: "#155cd6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    gap: "15px",
  },
};

export default Navbar;