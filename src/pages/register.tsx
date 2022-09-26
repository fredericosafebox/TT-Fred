import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isCadastro, isDashboard } from "../store/cadastro/cadastroSlice";
import Header from "../components/header";

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
    </>
  );
}

export default Register;
