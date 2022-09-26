import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isCadastro, isDashboard } from "../store/cadastro/cadastroSlice";
import Header from "../components/header";
import Form from "../components/formCadastro";
import { finish } from "../store/loader/loaderSlice";

function Register() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isCadastro());
    return () => {
      dispatch(isDashboard());
    };
  }, []);
  return (
    <>
      <Header />
      <Form />
    </>
  );
}

export default Register;
