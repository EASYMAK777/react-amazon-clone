import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "../StateProvider/StateProvider";
import logo from "../img/blistlyfe-logo.jpg"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { auth } from "../Firebase/firebase";

function Navbar() {
    //uses state provider to add functionality to shopping basket
    // dispatch allows for appending and removing items from basket
    const [{ basket, user }, dispatch] = useStateValue();

    cont handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }

    // Console logging object in the shopping basket
    console.log(basket);
    
    return (
        <nav className="header">
            {/* logo on the left -> */}
            <Link to="/">
            <img className="header__logo"
                src = {logo}
                alt = "blist-lyfe-logo"
            />
            </Link>

            
                


            {/* Search box
            <div className="header__search" />
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" /> */}

            {/* <div className="header__title">
                <h1>Welcome to Blistlyfe</h1>
            </div> */}

            <div className="header__title">
            <h1>Blistlyfe</h1>
            </div>

            


            {/* 3 Links top right corner of nav */}
            <div className="header__nav">
                
                {/* 1st Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option1">Home</span>
                        
                    </div>
                </Link>

                {/* Login link */}

                <Link to="/login" className="header__link">
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__option1">{user ? 'Sign Out' : 'Sign In'}</span>
                        
                    </div>
                </Link>


                {/* 2nd Link */}
                <Link to="/order-online" className="header__link">
                    <div className="header__option">
                        <span className="header__option1"> Order</span>
                        <span className="header__option2">Online</span>
                    </div>
                </Link>
                
                {/* 3rd Link */}
                {/* <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option1">Your</span>
                        <span className="header__option2">Prime</span>
                    </div>
                </Link> */}

                
                {/* 3rd Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option1">FAQ</span>
                        
                    </div>
                </Link>

                {/* 4th Link */}
                <Link to="/checkout" className="header__link">
                    <div className="header_basket">
                        {/* Cart Icon */}
                        <ShoppingCartIcon 
                            fontSize="large"
                        />
                        {/* Number of Items in cart */}
                        <span className="header__option2_basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
            


            {/* Basket icon with a number */}
            
        </nav>
    )
}

export default Navbar
