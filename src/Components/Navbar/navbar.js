import React from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css"

function Navbar() {
    return (
        <nav className="header">
            {/* logo on the left -> */}
            <Link to="/">
            <img className="header___logo" 
            src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt = "amazon logo"
            />
            </Link>
            


            {/* Search box */}


            {/* 3 Links */}
            {/* Basket icon with a number */}
            
        </nav>
    )
}

export default Navbar
