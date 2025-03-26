
import { createContext, useContext } from "react";
import { user } from "../data/user";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (username, password) => {
    const user = users.find(
      (u) =>
        u.UserUsername.toLowerCase() === username.toLowerCase() &&
        u.UserPassword === password
    );

    if (user) {
      setCurrentUser(user);
      return { success: true, user };
    } else {
      return { success: false, msg: "Invalid username or password" };
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

  export const useAuth = () => {
    const value = useContext(AuthContext);
    if (!value) {
      throw new Error("useAuth must be wrapped inside AuthContextProvider");
    }
    return value;
  };