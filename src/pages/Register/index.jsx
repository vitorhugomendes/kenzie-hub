import { useContext } from "react";
import { api } from "../../services/api";
import { UserContext } from "../../providers/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import { StyledMain } from "./style";
import { Form } from "../../components/Form";
import { formSchema } from "./validations";
import { Input } from "../../components/Input";

export function Register() {
  const { navigate } = useContext(UserContext);

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
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <>
      <Header>
        <Link to={"/"}>Voltar</Link>
      </Header>
      <StyledMain>
        <section>
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa</p>
          <Form onSubmitFunction={handleSubmit(userRegister)}>
            <Input
              label="Nome"
              id="name"
              type="text"
              register={register}
              placeholder="Digite aqui seu nome"
              error={errors?.name?.message}
            ></Input>
            <Input
              label="Email"
              id="email"
              type="email"
              register={register}
              placeholder="Digite aqui seu email"
              error={errors?.email?.message}
            ></Input>

            <Input
              label="Senha"
              id="password"
              type="password"
              register={register}
              placeholder="Digite aqui sua senha"
              error={errors?.password?.message}
            ></Input>

            <Input
              label="Confirmar senha"
              id="confirmPassword"
              type="password"
              register={register}
              placeholder="Confirme sua senha"
              error={errors?.confirmPassword?.message}
            ></Input>

            <Input
              label="Bio"
              id="bio"
              type="text"
              register={register}
              placeholder="Fale sobre você"
              error={errors?.bio?.message}
            ></Input>

            <Input
              label="Contato"
              id="contact"
              type="text"
              register={register}
              placeholder="Opção de contato"
              error={errors?.contact?.message}
            ></Input>

            <label htmlFor="module">Selecionar Módulo</label>
            <select id="module" {...register("course_module")}>
              <option value="Primeiro módulo">Primeiro módulo</option>
              <option value="Segundo módulo">Segundo módulo</option>
              <option value="Terceiro módulo">Terceiro módulo</option>
              <option value="Quarto módulo">Quarto módulo</option>
            </select>

            <Button type={"submit"}>Cadastrar</Button>
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
