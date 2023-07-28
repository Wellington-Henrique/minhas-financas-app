import { createContext, useEffect, useState } from "react";

import { UserData } from "../interfaces/Usuario";

interface UserContextType {
    currentUser: UserData | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<UserData | null>>;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children } : React.PropsWithChildren<{}>) => {
    const [ currentUser, setCurrentUser ] = useState<UserData | null>(null);

    useEffect(() => {
        if (currentUser)
            localStorage.setItem("@my-finances/user", JSON.stringify(currentUser));
        else
            localStorage.removeItem("@my-finances/user");
    }, [ currentUser ]);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
}
