import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../src/Redux/loginReducer";

export default configureStore({
  reducer: {
    login: loginReducer
  }
});