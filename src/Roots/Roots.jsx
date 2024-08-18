import React from 'react';
import Nav from '../component/Nav';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Roots = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Toaster/>
        </div>
    );
};

export default Roots;