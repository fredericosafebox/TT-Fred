import Logo from "../logo";
import { StyledNav } from "./styles";
function NavBar() {
  return (
    <StyledNav>
      <Logo>
        Mighty
        <span> List</span>
      </Logo>
      <button>Sair</button>
    </StyledNav>
  );
}

export default NavBar;
