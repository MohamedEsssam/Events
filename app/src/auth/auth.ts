import React, { useContext } from "react";

const UserContext = React.createContext({});

export function useAuth(): any {
  return useContext(UserContext);
}

export default UserContext;
