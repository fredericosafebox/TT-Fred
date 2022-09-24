import { configureStore, combineReducers } from "@reduxjs/toolkit";

import counterReducer from "./counter/counter.reducer";
import cadastroReducer from "./cadastro/cadastro.reducer";

const reducers = combineReducers({
  counter: counterReducer,
  cadastro: cadastroReducer,
});

const store = configureStore({ reducer: reducers });

export default store;
