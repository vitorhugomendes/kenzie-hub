import { createContext, useEffect, useState } from "react";
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

  async function userLogin(formData) {
    try {
      setLoading(true);
      const response = await api.post("/sessions", formData);
      setUser(response.data.user);
      window.localStorage.setItem(
        "KenzieHub@TOKEN",
        JSON.stringify(response.data.token)
      );
      window.localStorage.setItem(
        "KenzieHub@USERID",
        JSON.stringify(response.data.user.id)
      );
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  function userLogout() {
    window.localStorage.clear();
    setUser(null);
    navigate("/");
  }

  async function userRegister(formData) {
    try {
      const response = await api.post("/users", formData);
      toast("Usuário cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
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
        userLogin,
        userLogout,
        userRegister,
        userID,
        userToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
