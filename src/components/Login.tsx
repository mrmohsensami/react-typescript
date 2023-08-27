import React, { useState } from 'react';

type AuthUser = {
    username: string;
    token: string;
};

const Login = () => {
    const [isLogin, setIsLogin] = useState<AuthUser | null>(null);
    const handleLogin = () => {
        setIsLogin({
            username: 'test',
            token: 'eydasdasdsas',
        });
    };
    const handleLogout = () => {
        setIsLogin(null);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User is: {isLogin ? 'Login' : 'Logout'}</p>
        </div>
    );
};

export default Login;
