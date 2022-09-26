import { ModalWrapper } from "./styles";
import { IChildren } from "../../interfaces/IChildren";

function Modal({ children }: IChildren) {
  return <ModalWrapper>{children}</ModalWrapper>;
}

export { Modal };
