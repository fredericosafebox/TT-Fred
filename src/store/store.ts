import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import cadastro from "./cadastro/cadastroSlice";
import users from "./users/usersSlice";
import validator from "./validator/validatorSlice";
import loader from "./loader/loaderSlice";

const reducers = combineReducers({
  cadastro,
  users,
  validator,
  loader,
});

function makeStore() {
  return configureStore({ reducer: reducers });
}

export const wrapper = createWrapper(makeStore);
