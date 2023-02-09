import * as yup from "yup";

export const formSchema = yup.object({
  name: yup.string().required("Insira um nome"),
  email: yup.string().required("Insira um e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/(\W|_)/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmação de senha deve ser igual a senha")
    .required("Confirmação de senha é obrigatória"),
  bio: yup.string().required("Insira sua bio"),
  contact: yup.string().required("Insira seu contato"),
});
