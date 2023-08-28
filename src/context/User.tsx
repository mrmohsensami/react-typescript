import React, { useContext } from 'react';
import { userContext } from './UserContext';

const User = () => {
    const userInfo = useContext(userContext);
    const handleLogin = () => {
        userInfo.setUser({
            username: 'user@gmail.com',
            token: 'token',
        });
    };
    const handleLogout = () => {
        userInfo.setUser(null);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>username is: {userInfo?.user?.username}</p>
            <p>token is: {userInfo?.user?.token}</p>
        </div>
    );
};

export default User;
