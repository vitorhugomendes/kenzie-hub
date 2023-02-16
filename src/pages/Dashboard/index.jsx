import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "../../components/Modal";
import { formSchema } from "./validations";
import { StyledMain } from "./style";

export function Dashboard() {
  const { loading, user, userLogout } = useContext(UserContext);
  const {
    techRegister,
    techEdit,
    techDelete,
    registerTechModal,
    openRegisterTechModal,
    closeRegisterTechModal,
    techID,
    techTitle,
    setTechTitle,
    editTechModal,
    openEditTechModal,
    closeEditTechModal,
  } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { title: techTitle },
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    reset({
      title: techTitle,
    });
  }, [techTitle]);

  function submitEditTech(formData) {
    techEdit(formData, techID);
  }

  return (
    <>
      <Header>
        <div>
          <Button
            onClickFunction={() => {
              userLogout();
            }}
          >
            Sair
          </Button>
        </div>
      </Header>
      <StyledMain>
        {loading ? (
          <section>
            <h2>Carregando...</h2>
          </section>
        ) : (
          <>
            {registerTechModal ? (
              <Modal
                title={"Cadastrar Tecnologia"}
                closeFunction={closeRegisterTechModal}
                register={register}
                handleSubmit={handleSubmit(techRegister)}
                error={errors?.title?.message}
              ></Modal>
            ) : null}

            {editTechModal ? (
              <Modal
                title={"Tecnologia Detalhes"}
                closeFunction={closeEditTechModal}
                register={register}
                handleSubmit={handleSubmit(submitEditTech)}
                error={errors?.title?.message}
                onClickFunction={() => {
                  techDelete(techID);
                }}
                disabled={true}
              ></Modal>
            ) : null}
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
                  <Button onClickFunction={openRegisterTechModal}>+</Button>
                </div>
                <ul>
                  {user?.techs.map(({ id, title, status }) => {
                    return (
                      <li
                        key={id}
                        onClick={() => {
                          setTechTitle(title);
                          openEditTechModal(id);
                        }}
                      >
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
