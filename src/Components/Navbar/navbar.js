import React from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css"
import SearchIcon from '@material-ui/icons/Search';

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
            <div className="header__search" />
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />


            


            {/* 3 Links */}
            {/* Basket icon with a number */}
            
        </nav>
    )
}

export default Navbar
