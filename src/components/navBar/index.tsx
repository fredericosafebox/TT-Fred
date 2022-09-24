import Logo from "../logo";
import { StyledNav } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../interfaces/IStates";
import increment from "../../store/counter/actions/counter.increment.action";
import decrement from "../../store/counter/actions/counter.decrement.action";

function NavBar() {
  const dispatch = useDispatch();
  const isDashboard = useSelector((state: RootState) => state.cadastro);
  return (
    <StyledNav>
      <Logo>
        Mighty
        <span> List</span>
      </Logo>
      {/* {isDashboard && <h1>RENDERIZAR MENU</h1>} */}
    </StyledNav>
  );
}

export default NavBar;
