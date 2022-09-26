import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../interfaces/IStates";
import { IUser } from "../../interfaces/IUser";
import { applyFilter, cleanFilter } from "../../store/filter/filterSlice";
import {
  isFiltered,
  isNotFiltered,
} from "../../store/validator/filterValidator";

function SearchButtons() {
  const { users } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  async function filtrarDados(button: string) {
    switch (button) {
      case "active":
        dispatch(
          applyFilter(users.filter((user: IUser) => user.status === "active"))
        );
        return dispatch(isFiltered());
      case "inactive":
        dispatch(
          applyFilter(users.filter((user: IUser) => user.status === "inactive"))
        );
        return dispatch(isFiltered());
      default:
        dispatch(cleanFilter());
        return dispatch(isNotFiltered());
    }
  }
  return (
    <div className="app__filter--wrapper">
      <button type="button" onClick={() => filtrarDados("all")}>
        All
      </button>
      <button type="button" onClick={() => filtrarDados("active")}>
        Actives
      </button>
      <button type="button" onClick={() => filtrarDados("inactive")}>
        Inactives
      </button>
    </div>
  );
}

export default SearchButtons;
