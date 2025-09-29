import React, { use } from 'react';

const User2 = ({ user2Promise }) => {
    const users = use(user2Promise);
    console.log(users);
    return (
        <div>
            <p>This is The User Number Two!</p>
        </div>
    );
};

export default User2;