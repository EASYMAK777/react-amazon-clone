import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "../StateProvider/StateProvider";


function Navbar() {
    //uses state provider to add functionality to shopping basket
    // dispatch allows for appending and removing items from basket
    const [{ basket }, dispatch] = useStateValue();
    
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
            <div className="header__nav">
                
                {/* 1st Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__option1">Hello Juan</span>
                        <span className="header__option2">Sign-In</span>
                    </div>
                </Link>


                {/* 2nd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__option1"> Returns</span>
                        <span className="header__option2">& Orders</span>
                    </div>
                </Link>
                
                {/* 3rd Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option1">Your</span>
                        <span className="header__option2">Prime</span>
                    </div>
                </Link>

                
                {/* 4th Link */}
                <Link to="/chekcout" className="header__link">
                    <div className="header_basket">
                        {/* Cart Icon */}
                        <ShoppingBasketIcon />
                        {/* Number of Items in cart */}
    <span className="header__option2_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            


            {/* Basket icon with a number */}
            
        </nav>
    )
}

export default Navbar
