import React, { useState, } from 'react';
import '../Popup/Navbar.css';
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { RiWalletLine, RiWalletFill } from "react-icons/ri";
import { RiBuildingLine, RiBuildingFill } from "react-icons/ri";
import { HiOutlineBriefcase, HiBriefcase } from "react-icons/hi";
import { NavLink, Outlet, useLocation } from 'react-router-dom';


function NavBar() {

  const location = useLocation();

  const [activeButton, setActiveButton] = useState();
  const handleButtonClick = (buttonName) => { setActiveButton(buttonName) };
  return (
    <>
      <div className="navigation-container ">
        <NavLink
          to='/'
          className={`navigation-button ${activeButton === 'home' ? 'active' : ''}`}
          onClick={() => handleButtonClick('/')}>
          {location.pathname === '/' ? (
            <AiFillHome color="#2CA6A4" size={20} />
          ) : (
            <AiOutlineHome color="white" size={20} />
          )}
          <h1 className='navigation-title'>Home</h1>
        </NavLink>
        <NavLink
          to='/Wallet'
          className={`navigation-button`}
          onClick={() => handleButtonClick('Wallet')}>
          {/* Activate react-icons */}
          {location.pathname === '/Wallet' ? (
            <RiWalletFill color="#2CA6A4" size={20} />
          ) : (
            <RiWalletLine color="white" size={20} />
          )}
          <h1 className='navigation-title'>Wallet</h1>
        </NavLink>
        <NavLink
          to='/Request'
          className={`navigation-button ${activeButton === 'request' ? 'active' : ''}`}
          onClick={() => handleButtonClick('request')}>
          {location.pathname === '/Request' ? (
            <RiBuildingFill color="#2CA6A4" size={20} />
          ) : (
            <RiBuildingLine color="white" size={20} />
          )}
          <h1 className='navigation-title'>Request</h1>
        </NavLink>
        <NavLink
          to='/Jobs'
          className={`navigation-button ${activeButton === 'jobs' ? 'active' : ''}`}
          onClick={() => handleButtonClick('jobs')}>
          {location.pathname === '/Jobs' ? (
            <HiBriefcase color="#2CA6A4" size={20} />
          ) : (
            <HiOutlineBriefcase color="white" size={20} />
          )}
          <h1 className='navigation-title'>Jobs</h1>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar