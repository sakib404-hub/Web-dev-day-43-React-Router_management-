import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex gap-3 justify-center my-10'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root; <h1>Hellow From Root!</h1>