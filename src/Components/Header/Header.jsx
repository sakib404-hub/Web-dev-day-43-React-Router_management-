import React from 'react';

const Header = () => {
    return (
        <div>
            <p className='text-center'>This is the header</p>
            <nav className='flex gap-4 justify-center'>
                <a href="/">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact US</a>
                <a href="Mobiles">Mobiles</a>
                <a href="Laptops">laptops</a>
            </nav>
        </div>
    );
};

export default Header;