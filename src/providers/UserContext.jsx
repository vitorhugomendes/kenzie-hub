import { createContext, useEffect } from "react";
import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

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

  useEffect(() => {
    if (!userID) {
      userLogout();
    } else {
      async function getUser() {
        try {
          setLoading(true);
          const response = await api.get(`/users/${userID}`);
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          setLoading(false);
        }
      }
      getUser();
    }
  }, []);

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
