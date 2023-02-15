import React from 'react';
import { Outlet } from "react-router-dom";

import Navigation from './Navigation';

const Homepage = () => {
  return (
    <>
      <Navigation />
        <Outlet />
    </>
  )
}

export default Homepage