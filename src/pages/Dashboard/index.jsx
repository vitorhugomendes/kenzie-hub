import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { StyledMain } from "./style";

export function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(
    localStorage.getItem("KenzieHub@USERID") || null
  );
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();

  function userLogout() {
    window.localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    if (!user) {
      userLogout();
    } else {
      async function getUser() {
        try {
          setLoading(true);
          const response = await api.get(`/users/${JSON.parse(user)}`);
          setUserInfo(response.data);
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          setLoading(false);
        }
      }
      getUser();
    }
  }, []);

  const { name, course_module } = userInfo;

  return (
    <>
      <Header>
        <Button
          text="Sair"
          onClickFunction={() => {
            userLogout();
          }}
        ></Button>
      </Header>
      <StyledMain>
        {loading ? (
          <section>
            <h2>Carregando...</h2>
          </section>
        ) : (
          <>
            <section>
              <div>
                <h2>{name}</h2>
                <p>{course_module}</p>
              </div>
            </section>

            <div>
              <h2>{"Que pena! Estamos em desenvolvimento :("}</h2>
              <h3>
                Nosso time de kenzinhos está trabalhando na aplicação e em breve
                teremos novidades!
              </h3>
            </div>
          </>
        )}
      </StyledMain>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
