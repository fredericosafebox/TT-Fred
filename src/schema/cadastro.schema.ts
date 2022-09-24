import * as yup from "yup";

const cadastroSchema = yup
  .object({
    name: yup
      .string()
      .min(4, "* tamanho mínimo: 4 caracteres")
      .max(20, "* tamanho máximo: 20 caracteres")
      .lowercase("* apenas letras minúsculas")
      .required("* campo obrigatório"),
    email: yup
      .string()
      .email("* email inválido")
      .required("* campo obrigatório"),
    status: yup.string().required("* campo obrigatório"),
  })
  .required();
