import * as yup from "yup";

export const cadastroSchema = yup
  .object({
    name: yup
      .string()
      .min(4, " tamanho mínimo: 4 caracteres")
      .max(20, " tamanho máximo: 20 caracteres")
      .matches(/^[a-zA-Z0-9_]*$/, "Apenas letras, números ou _ são permitidos")
      .required(" campo obrigatório"),
    email: yup
      .string()
      .email("formato permitido ex123@email.com")
      .required(" campo obrigatório"),
    status: yup.string().required(" campo obrigatório"),
  })
  .required();
