import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    const { id, name, email } = user;

    // loading Navigatior 
    const path = useNavigate();

    const handleButtonClick = () => {
        path('/users')
    }

    return (
        <div className=' bg-gray-900 p-4 rounded-lg flex flex-col items-center justify-center ml-10'>
            <p className='text-2xl font-bold'>This is the User Details Section</p>
            <div className='flex flex-col items-center justify-center'>
                <p>{id}</p>
                <p>{name}</p>
                <p>{email}</p>
                <p>{user.address.city}</p>
            </div>
            <button className='btn btn-primary mt-4 px-7 rounded-full'
                onClick={handleButtonClick}>Go Back</button>
        </div>
    );
};

export default UserDetails;