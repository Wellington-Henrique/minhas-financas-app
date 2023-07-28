import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export default () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext deve ser usado dentro de um UserProvider.');
  }
  
  return context;
};