import { IChildren } from "../../interfaces/IChildren";
import { StyledList } from "./styles";

function UserList({ children }: IChildren) {
  return <StyledList>{children}</StyledList>;
}

export default UserList;
