import Logo from "../../assets/Logo.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { StyledMain } from "./style";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";

export function Login() {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Insira um e-mail").email("E-mail inválido"),
    password: yup.string().required("Insira uma senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  function toRegisterPage() {
    console.log("teste");
    navigate("/register");
  }

  return (
    <StyledMain>
      <div>
        <img src={Logo} alt="KenzieHub" />
      </div>
      <section>
        <h2>Login</h2>
        <Form action="submit" onSubmitFunction={handleSubmit(onSubmit)}>
          <label>Email:</label>
          <input placeholder="Digite seu e-mail" {...register("email")} />
          <label>Senha:</label>
          <input placeholder="Digita sua senha" {...register("password")} />
          <button type="submit">Entrar</button>
        </Form>
        <p>Ainda não possuí uma conta?</p>
        <Button
          text="Cadastre-se"
          onClickFunction={() => {
            toRegisterPage();
          }}
        ></Button>
      </section>
    </StyledMain>
  );
}
