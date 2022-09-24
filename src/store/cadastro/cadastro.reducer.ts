import { IAction } from "../../interfaces/IAction";

const initialState = true;

function cadastroReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case "cadastro/pageDashboard":
      return !state;
    default:
      return state;
  }
}

export default cadastroReducer;
