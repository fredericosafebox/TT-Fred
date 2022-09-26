import { StyledFormWrapper } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cadastroSchema } from "../../schema/cadastro.schema";
import { FieldValues } from "react-hook-form/dist/types";
import { FiAlertCircle } from "react-icons/fi";
import { isAltered } from "../../store/validator/validatorSlice";
import { useDispatch } from "react-redux";
import { update } from "../../store/users/usersSlice";
import { IUser } from "../../interfaces/IUser";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(cadastroSchema) });

  function submitData(data: FieldValues) {
    const { name, email, status } = data;
    const newUser: IUser[] = [
      {
        id: uuidv4(),
        name,
        email,
        gender: "unknown",
        status,
      },
    ];

    dispatch(isAltered());
    dispatch(update(newUser));
    window.alert("Usuário cadastrado");
  }
  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="app__form--header">
          <h3>Novo Usuário</h3>
        </div>
        <div className="app__form--fields">
          <div className="app__form--fieldbox">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              {...register("name")}
            />
            {errors?.name && (
              <span className="errorRegister">
                <>
                  <FiAlertCircle /> {errors.name.message}
                </>
              </span>
            )}
          </div>
          <div className="app__form--fieldbox">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              {...register("email")}
            />
            {errors?.email && (
              <span className="errorRegister">
                <>
                  <FiAlertCircle /> {errors.email.message}
                </>
              </span>
            )}
          </div>
          <div className="app__form--fieldbox">
            <label htmlFor="status">Status</label>
            <select id="status" {...register("status")}>
              <option value="inactive">Inactive</option>
              <option value="active">Active</option>
            </select>
            {errors?.status && (
              <span className="errorRegister">
                <>
                  <FiAlertCircle /> {errors.status.message}
                </>
              </span>
            )}
          </div>
        </div>
        <div className="app__form--submit">
          <button>Cadastrar</button>
        </div>
      </form>
    </StyledFormWrapper>
  );
}

export default Form;
