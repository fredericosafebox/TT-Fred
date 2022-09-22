import { IChildren } from "../../interfaces/IChildren";
import { StyledH1 } from "./styles";

function Logo({ children }: IChildren) {
  return <StyledH1>{children}</StyledH1>;
}

export default Logo;
