import { Link } from 'react-router-dom'
import "./navbar.css" 
import logo from "../assets/white-logo.svg"

const Navbar = () =>{
    
    return(
        <nav>
            <div className='nav-container'>
            <img src={logo} alt = "Logo"/>
            <ul className='nav-links'>
                <li><Link to ="/Home"> Home</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link></li>
                <li><Link to="/Pricing">Pricing</Link></li>
                <li ><Link to="/Team">Team</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                
            </ul>
            </div>
        </nav>
    )

}
export default Navbar