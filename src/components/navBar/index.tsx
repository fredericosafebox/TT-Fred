import Logo from "../logo";
import Link from "next/link";
import { StyledNav } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../interfaces/IStates";
import { initiate, finish } from "../../store/loader/loaderSlice";
import Loading from "../loading";

function NavBar() {
  const dispatch = useDispatch();
  const isCadastro = useSelector((state: RootState) => state.cadastro);
  const isLoading = useSelector((state: RootState) => state.loader);
  return (
    <StyledNav>
      <Logo>
        Mighty
        <span> List</span>
      </Logo>

      {isCadastro.cadastro ? (
        <Link href={"/"}>
          <button onClick={() => dispatch(initiate())}>Home</button>
        </Link>
      ) : (
        <Link href={"/register"}>
          <button>Cadastrar</button>
        </Link>
      )}
      {isLoading.isLoading && <Loading />}
    </StyledNav>
  );
}

export default NavBar;
