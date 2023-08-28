import React, { createContext, useState } from 'react';

type UserContextProviderProvider = {
    children: React.ReactNode;
};
type AuthUser = {
    username: string;
    token: string;
};
type UserContextType = {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const userContext = createContext({} as UserContextType);
const UserContextProvider = ({ children }: UserContextProviderProvider) => {
    const [user, setUser] = useState<null | AuthUser>(null);
    return (
        <div>
            <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>
        </div>
    );
};

export default UserContextProvider;
