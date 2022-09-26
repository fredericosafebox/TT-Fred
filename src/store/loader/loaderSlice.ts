import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    initiate(state) {
      state.isLoading = true;
    },
    finish(state) {
      state.isLoading = false;
    },
  },
});

export const { initiate, finish } = loaderSlice.actions;
export default loaderSlice.reducer;
