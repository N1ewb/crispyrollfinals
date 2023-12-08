import React, { useState} from 'react';
import {Link} from 'react-router-dom'
import SearchIcon from '../images/search.svg';
import BookmarkIcon from '../images/bookmark.svg';
import UserIcon from '../images/user.svg';
import Crispyroll from '../images/crispyroll.png'

import './Header.css'

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <div className='header-container'>
        <div className='nav-bar'>
          <div className='logo-wrapper'>
            <Link to="/"><img src={Crispyroll} alt="crispyroll" /></Link>
          </div>
          <div className='burgir' onClick={toggleDropdown}>
            <div className=''>
              <p>Burgir</p>
            </div>
          </div>
          <div className='col'>
            <div className={`nav-links ${isDropdownVisible ? 'visible' : ''}`}>
                <Link to="#">Browse</Link>
                <Link to="#">Anime TVSeries</Link>
                <Link to="#">Anime Movies</Link>
                <Link to="#">News</Link>
            </div>
          </div>
          <div className='spacer'></div>
          <div className='user-action'>

            <Link to="/search"><img src={SearchIcon} alt="search" height="25px" width="25px" /></Link>
            
            <img src={BookmarkIcon} alt="bookmark" height="25px" width="25px" />
            <img src={UserIcon} alt="user icon" height="25px" width="25px" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;