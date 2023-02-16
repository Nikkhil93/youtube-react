import React from 'react';
import { Outlet } from "react-router-dom";

import Navigation from './Navigation';

const Homepage = () => {
  return (
    <>
      <Navigation />
      <div className='w-[calc(100%_-_10rem)]'>
        <Outlet />
      </div>
    </>
  )
}

export default Homepage