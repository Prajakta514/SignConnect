import React from 'react';
import './Header.css';
import Logo2 from './Logo2.png';
import { FaUserPlus, FaBell, FaAngleDown } from 'react-icons/fa'; // Import React icons
import { useStateValue } from './StateProvider';

function Header() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="header" style={{ backgroundColor: '#A0E9FF' }}>
      <div className="header__left">
        <img className="logo" src={Logo2} alt="logo" />
      </div>

      <div className="header__center">
        <div className="header__info">
          <img className="avatar" src={user.photoURL} alt="avatar" />
          <h5>{user.displayName}</h5>
        </div>

        <div className="header__icons" style={{margin: '10px'}}>
          <FaUserPlus className="header__icon" size={24} />
          <FaBell className="header__icon" size={24} />
          <FaAngleDown className="header__icon" size={24} />
        </div>
      </div>
    </div>
  );
}

export default Header;
