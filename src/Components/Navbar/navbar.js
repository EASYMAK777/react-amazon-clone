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


            {/* 3 Links top right corner of nav */}
            <div className="headernav">
                
                {/* 1st Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Hello Juan</span>
                        <span>Sign-In</span>
                    </div>
                </Link>


                {/* 2nd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Hello Juan</span>
                        <span>Sign-In</span>
                    </div>
                </Link>
                
                {/* 3rd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Hello Juan</span>
                        <span>Sign-In</span>
                    </div>
                </Link>

                
                {/* 4th Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Hello Juan</span>
                        <span>Sign-In</span>
                    </div>
                </Link>
            </div>
            


            {/* Basket icon with a number */}
            
        </nav>
    )
}

export default Navbar
