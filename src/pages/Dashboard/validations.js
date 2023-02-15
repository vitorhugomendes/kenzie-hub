import * as yup from "yup";

export const formSchema = yup.object({
  title: yup.string().required("Insira um nome"),
});
