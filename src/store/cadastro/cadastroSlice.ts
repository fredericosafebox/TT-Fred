import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cadastro: false,
};

const cadastroSlice = createSlice({
  name: "cadastro",
  initialState,
  reducers: {
    isCadastro(state) {
      state.cadastro = true;
    },
    isDashboard(state) {
      state.cadastro = false;
    },
  },
});

export const { isCadastro, isDashboard } = cadastroSlice.actions;
export default cadastroSlice.reducer;
