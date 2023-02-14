import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const userID = JSON.parse(localStorage.getItem("KenzieHub@USERID")) || null;
  const userToken = JSON.parse(localStorage.getItem("KenzieHub@TOKEN")) || null;

  const navigate = useNavigate();

  function userLogout() {
    window.localStorage.clear();
    setUser(null);
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        setUser,
        navigate,
        userLogout,
        userID,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
