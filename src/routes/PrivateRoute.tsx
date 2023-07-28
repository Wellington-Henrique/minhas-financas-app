import useUserContext from "../hooks/useUserContext";
import Login from "../pages/Login";

export const PrivateRoute = ({ children } : React.PropsWithChildren<{}>) => {
    const { currentUser } = useUserContext();

    return (
      currentUser ? children : <Login/>
    )
}