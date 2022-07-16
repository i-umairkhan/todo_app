import { createContext, useState } from "react";

// context to store data of user
export const userContext = createContext({
  user: null,
  setUser: () => null,
});

// provider for userContext
export const UserProvider = ({ children }) => {
  // state to user loged in data
  const [user, setUser] = useState(null);
  const value = { user, setUser };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
