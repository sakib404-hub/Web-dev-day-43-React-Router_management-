import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <p className='text-center'>This is the header</p>
            <nav className='flex gap-4 justify-center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='Mobiles'>Mobiles</NavLink>
                <NavLink to='Laptops'>Laptops</NavLink>
                <NavLink to='#'>About us</NavLink>
                <NavLink to='users'>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;