import React from 'react';
import { useNavigate } from 'react-router';

const UserCard = ({ user }) => {

    const path = useNavigate();
    const { id } = user;

    const handleBtnClick = () => {
        console.log('btnclicked!');
        path(`/users/${id}`);
    }

    return (
        <div className='flex flex-col items-center justify-center rounded-lg p-4 space-y-2 shadow-lg bg-gray-900' >
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.street} , {user.address.suite}, {user.address.city}</p>
            <button className='btn btn-primary rounded-lg mt-4'
                onClick={handleBtnClick}>UserDetails</button>
        </div>
    );
};

export default UserCard;