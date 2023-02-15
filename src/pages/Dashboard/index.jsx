import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterTechModal } from "../../components/RegisterTechModal";
import { Form } from "../../components/Form";
import { formSchema } from "./validations";
import { Input } from "../../components/Input";
import { StyledMain } from "./style";

export function Dashboard() {
  const { loading, user, userLogout } = useContext(UserContext);
  const {
    techRegister,
    registerTechModal,
    openRegisterTechModal,
    closeRegisterTechModal,
  } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

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
            {registerTechModal ? (
              <RegisterTechModal
                title={"Cadastrar Tecnologia"}
                closeFunction={closeRegisterTechModal}
              >
                <Form onSubmitFunction={handleSubmit(techRegister)}>
                  <Input
                    label="Nome"
                    id="title"
                    type="text"
                    register={register}
                    placeholder="Nome da Tecnologia"
                    error={errors?.title?.message}
                  ></Input>
                  <label htmlFor="status">Selecionar Status</label>
                  <select id="status" {...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                  </select>
                  <Button type={"submit"}>Cadastrar Tecnologia</Button>
                </Form>
              </RegisterTechModal>
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
                    console.log(id);
                    return (
                      <li key={id}>
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
