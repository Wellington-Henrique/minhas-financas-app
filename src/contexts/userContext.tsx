import { createContext, useEffect, useState } from "react";

import { UserData } from "../interfaces/Usuario";

interface AuthenticatedUserData {
    token: string
    user: UserData
}

interface UserContextType {
    currentUser: AuthenticatedUserData | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<AuthenticatedUserData | null>>;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children } : React.PropsWithChildren<{}>) => {
    const [ currentUser, setCurrentUser ] = useState<AuthenticatedUserData | null>(null);

    useEffect(() => {
        const userCache = localStorage.getItem("@my-finances/user");

        if (userCache)
            setCurrentUser(JSON.parse(userCache));
    }, []);

    useEffect(() => {
        if (currentUser)
            localStorage.setItem("@my-finances/user", JSON.stringify(currentUser));
    }, [ currentUser ]);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
}
