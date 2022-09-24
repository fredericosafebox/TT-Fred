import { IAction } from "../../interfaces/IAction";

const initialState = 0;

function counterReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;
