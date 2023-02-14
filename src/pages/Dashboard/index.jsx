import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { StyledMain } from "./style";

export function Dashboard() {
  const { loading, setLoading, user, setUser, userLogout, userID } =
    useContext(UserContext);

  const userToken = JSON.parse(localStorage.getItem("KenzieHub@TOKEN")) || null;

  useEffect(() => {
    if (!userID) {
      userLogout();
    } else {
      async function getUser() {
        try {
          setLoading(true);
          const response = await api.get(`/users/${userID}`);
          setUser(response.data);
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
    <>
      <Header>
        <Button
          onClickFunction={() => {
            userLogout();
          }}
        >
          Sair
        </Button>
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
                <h2>{user?.name}</h2>
                <p>{user?.course_module}</p>
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
