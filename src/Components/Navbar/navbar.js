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

    // Console logging object in the shopping basket
    console.log(basket);
    
    return (
        <nav className="header">
            {/* logo on the left -> */}
            <Link to="/">
            <img className="header__logo"
                src = "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/s150x150/105972792_805750909958786_504637890774604643_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=qvjKVESNLMoAX9dSCKr&tp=1&oh=1c64cc58031935bc9018df36b4e0cf05&oe=600D726B"
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
            <a href="https://fontmeme.com/fonts/marijuana-font/"><img src="https://fontmeme.com/permalink/201230/47530d0921ea1664ae19680ae0bcb309.png" 
             alt="marijuana-font" 
             border="0"/></a>
            </div>

            


            {/* 3 Links top right corner of nav */}
            <div className="header__nav">
                
                {/* 1st Link */}
                {/* <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__option1">Hello Juan</span>
                        <span className="header__option2">Sign-In</span>
                    </div>
                </Link> */}


                {/* 2nd Link */}
                {/* <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__option1"> Returns</span>
                        <span className="header__option2">& Orders</span>
                    </div>
                </Link> */}
                
                {/* 3rd Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__option1">Your</span>
                        <span className="header__option2">Prime</span>
                    </div>
                </Link>

                
                {/* 4th Link */}
                <Link to="/checkout" className="header__link">
                    <div className="header_basket">
                        {/* Cart Icon */}
                        <ShoppingBasketIcon />
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
