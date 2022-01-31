import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo"/>
      </Link>
      <div className="header_search">
          <input className="header_searchInput" type="text"/>
          <SearchIcon className="header_searchIcon"/>
      </div>
      <div className="header__nav">
        <div className="header_option">
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign In</span>
        </div>
        <div className="header_option">
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>        
        </div>
        <div className="header_option">
            <span className='header__optionLineOne'>Yours</span>
            <span className='header__optionLineTwo'>Prime</span>                    
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
              <ShoppingBasketIcon/>
              <span className='header__optionLineTwo header__basketCount'>0</span>
          </div>        
        </Link>
    
      </div>
    </div>
  )
}

export default Header
