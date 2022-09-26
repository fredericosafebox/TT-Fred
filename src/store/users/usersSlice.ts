import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IUser";

const initialState = {
  users: <IUser[]>[],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    update(state, action: PayloadAction<IUser[]>) {
      state.users = [...state.users, ...action.payload];
    },
    load(state, action: PayloadAction<IUser[]>) {
      state.users = [...state.users, ...action.payload];
    },
  },
});

export const { load, update } = usersSlice.actions;
export default usersSlice.reducer;
