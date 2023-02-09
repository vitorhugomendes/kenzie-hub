import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { StyledMain } from "./style";
import { Form } from "../../components/Form";
import { formSchema } from "./validations";
import { api } from "../../services/api";

export function Register() {
  const navigate = useNavigate();

  function toLoginPage() {
    navigate("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function userRegister(data) {
    try {
      const response = await api.post("/users", data);
      toast("Usuário cadastrado com sucesso");
      toLoginPage();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  console.log(errors);

  return (
    <>
      <Header>
        <Button
          text={"Voltar"}
          onClickFunction={() => {
            toLoginPage();
          }}
        ></Button>
      </Header>
      <StyledMain>
        <section>
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa</p>
          <Form onSubmitFunction={handleSubmit(userRegister)}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <span>{errors?.name?.message}</span>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <span>{errors?.email?.message}</span>

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <span>{errors?.password?.message}</span>

            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirme a sua senha"
              {...register("passwordConfirmation")}
            />
            <span>{errors?.passwordConfirmation?.message}</span>

            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              id="bio"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <span>{errors?.bio?.message}</span>

            <label htmlFor="contact">Contato</label>
            <input
              type="text"
              id="contact"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <span>{errors?.contact?.message}</span>

            <label htmlFor="module">Selecionar Módulo</label>
            <select id="module" {...register("course_module")}>
              <option value="Primeiro módulo">Primeiro módulo</option>
              <option value="Segundo módulo">Segundo módulo</option>
              <option value="Terceiro módulo">Terceiro módulo</option>
              <option value="Quarto módulo">Quarto módulo</option>
            </select>

            <Button type={"submit"} text="Cadastrar"></Button>
          </Form>
        </section>
      </StyledMain>
      <ToastContainer
        position="top-right"
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
