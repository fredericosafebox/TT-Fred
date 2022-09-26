import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import cadastro from "./cadastro/cadastroSlice";
import users from "./users/usersSlice";
import validator from "./validator/validatorSlice";
import loader from "./loader/loaderSlice";
import filteredData from "./filter/filterSlice";
import filterValidator from "./validator/filterValidator";

const reducers = combineReducers({
  cadastro,
  users,
  validator,
  loader,
  filteredData,
  filterValidator,
});

export function makeStore() {
  const store = configureStore({ reducer: reducers });
  return store;
}

export const wrapper = createWrapper(makeStore);
