import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { StyledMain } from "./style";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { formSchema } from "./validations";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";

export function Login() {
  const { loading, setLoading, setUser, navigate } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  async function userLogin(data) {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
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

  return (
    <>
      <Header></Header>
      <StyledMain>
        {loading ? (
          <section>
            <h2>Carregando...</h2>
          </section>
        ) : (
          <section>
            <h2>Login</h2>
            <Form onSubmitFunction={handleSubmit(userLogin)}>
              <Input
                label="Email"
                id="email"
                type="email"
                register={register}
                placeholder="Digite seu e-mail"
                error={errors?.email?.message}
              ></Input>
              <Input
                label="Senha"
                id="password"
                type="password"
                register={register}
                placeholder="Digite sua senha"
                error={errors?.password?.message}
              ></Input>
              <Button type="submit">Entrar</Button>
            </Form>
            <p>Ainda não possuí uma conta?</p>
            <Link to={"/register"}>Cadastre-se</Link>
          </section>
        )}
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
