import React from 'react'
import "./css/header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';





function Header() {
  return (
    <>
      <div className='header'>
        <Link to='/'>
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className='header__logo' />
        </Link>

        <div className="header__search">
          <input type="text" />
          <SearchIcon className='header__searchIcon' />
        </div>

        <div className="header__nav"></div>
        <div className="header__option">
          <span className="header__optionone">Hello Nasir</span>
          <span className="header__optiontwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionone">Return</span>
          <span className="header__optiontwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionone">Your </span>
          <span className="header__optiontwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <Link to='/cart'>
          <ShoppingCartIcon />
          <span>
            2
          </span>
          </Link>
        </div>
      </div>

      <div className="header__bottom">
        <ul>
          <li>All</li>
          <li>Moblie</li>
          <li>Category</li>
          <li>Computer</li>
          <li>Cloths</li>
          <li>Shoes</li>
          <li>Electornics</li>

        </ul>
      </div>
    </>
  )
}

export default Header;