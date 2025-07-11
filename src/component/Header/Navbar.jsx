import React from 'react'
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container nav-container'>

                <div className='logo-div'>
                    <NavLink to={"/"} className="logo"> explore the world</NavLink>
                </div>
                <div className='nav'>
                    <nav>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/about"}>About</NavLink>
                        <NavLink to={"/countries"}>Countries</NavLink>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Navbar