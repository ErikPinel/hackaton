import { createSlice } from "@reduxjs/toolkit";

export const loginReducer = createSlice({
  name: "counter",
  initialState: { nameValue: false, openValue: false, logValue: false},
  reducers: {
    regisOpened: (state) => {
      state.nameValue = true;
    },
    regisNotOpened: (state) => {
      state.nameValue = false;
    },
    loginOpened: (state) => {
      state.openValue = true;
    },
    loginNotOpened: (state) => {
      state.openValue = false;
    },
    logged: (state) => {
      state.logValue = true;
    },
    notLogged: (state) => {
      state.logValue = false;
    },
  },
});

export const { regisOpened,regisNotOpened,loginOpened,loginNotOpened, logged, notLogged,changeName} = loginReducer.actions;
export const selectName = (state) => state.login.nameValue;
export const selectOpen = (state) => state.login.openValue;
export const selectLog = (state) => state.login.logValue;

export default loginReducer.reducer;