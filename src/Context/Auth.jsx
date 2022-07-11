import { createContext, useState } from "react";

export const userContext = createContext({
  user: null,
  setuser: () => null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const value = { user, setUser };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
