import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className='MainGrayLine'></div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
