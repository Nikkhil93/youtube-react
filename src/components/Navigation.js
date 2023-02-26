import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import HAMBURGER_MENU from '../logos/three-horizontal-lines-outline-icon.svg'
import YOUBTUBE_LOGO from '../logos/youtube-logo.svg';
import { closeMenu, toggleMenu } from "../utils/appSlice";
import NavigationItems from "./NavigationItems";

const Navigation = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();
  const [displayType, setDisplayType]= useState('');
  const dispatch = useDispatch();
 

  useEffect(()=>{
    location.pathname === '/'? setDisplayType(''): setDisplayType('Overlay')
  }, [location])

  return (
    <>
      {displayType === 'Overlay'?<div className= {(!isMenuOpen ? 'hidden': isMenuOpen? 'fixed left-0 top-0 bg-white z-[100]':'')}>
          {isMenuOpen && <div className='flex items-center'>
            <img
                className='mx-4 my-2 h-11 cursor-pointer p-2 rounded-full'
                alt="menu"
                src= {HAMBURGER_MENU}
                onClick = {() =>  dispatch(toggleMenu())}
              />
              <a href="/">
                <img
                  className='h-6 cursor-pointer'
                  alt="logo"
                  src= {YOUBTUBE_LOGO}
                />
              </a>
          </div>}
        <NavigationItems isMenuOpen={isMenuOpen} />
      </div>: <NavigationItems isMenuOpen={isMenuOpen} />}
      {displayType === 'Overlay' && isMenuOpen && <div className=" w-full h-full fixed right-0 top-0 bg-black opacity-50 z-[90] "  onClick= {()=> dispatch(closeMenu())}></div>}
    </>
  );
};

export default Navigation;
