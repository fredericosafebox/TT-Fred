import { useEffect } from "react";
import { useDispatch } from "react-redux";
import goToCadastro from "../store/cadastro/actions/cadastro.action";
import goToDashboard from "../store/cadastro/actions/dashboard.action";
import Header from "../components/header";

function Register() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(goToCadastro());
    return () => {
      dispatch(goToDashboard());
    };
  }, []);
  return <Header />;
}

export default Register;
