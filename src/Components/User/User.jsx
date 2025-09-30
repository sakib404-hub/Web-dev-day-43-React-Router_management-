import React from 'react';
import { useLoaderData } from 'react-router';
import UserCard from './UserCard';

const User = () => {
    const users = useLoaderData();
    return (
        <div className='space-y-4'>
            {
                users.map((user) => <UserCard
                    key={user.id}
                    user={user}></UserCard>)
            }
        </div>
    );
};

export default User;