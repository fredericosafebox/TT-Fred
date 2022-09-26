import Logo from "../logo";
import Link from "next/link";
import { StyledNav } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../interfaces/IStates";
import { initiate, finish } from "../../store/loader/loaderSlice";
import Loading from "../loading";
import { HiHome, HiUserAdd } from "react-icons/hi";
import SearchBar from "../navSearch";
import SearchButtons from "../navButtons";

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
          <button
            className="app__home--btn"
            onClick={() => dispatch(initiate())}
          >
            <HiHome size={27} />
          </button>
        </Link>
      ) : (
        <>
          {" "}
          <SearchBar />
          <SearchButtons />
          <Link href={"/register"}>
            <button onClick={() => dispatch(initiate())}>
              <HiUserAdd size={27} />
            </button>
          </Link>
        </>
      )}
      {isLoading.isLoading && <Loading />}
    </StyledNav>
  );
}

export default NavBar;
