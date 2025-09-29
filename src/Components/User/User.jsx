import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <p>This Is the User!</p>
        </div>
    );
};

export default User;