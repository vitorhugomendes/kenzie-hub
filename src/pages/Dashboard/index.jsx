import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { StyledMain } from "./style";
import { Link } from "../../components/Link";

export function Dashboard() {
  const { loading, user, userLogout } = useContext(UserContext);

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
            <section className="user-info__section">
              <div>
                <h2>{user?.name}</h2>
                <p>{user?.course_module}</p>
              </div>
            </section>

            <section className="user-techs__section">
              <div>
                <div>
                  <h3>Tecnologias</h3>
                  <button>+</button>
                </div>
                <ul>
                  {user?.techs.map(({ title, status }) => {
                    return (
                      <li>
                        <h2>{title}</h2>
                        <p>{status}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
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
