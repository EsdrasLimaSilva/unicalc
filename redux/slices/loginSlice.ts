import { createSlice } from "@reduxjs/toolkit";
import { StoreType } from "../store";

const initialState = {
   user: null,
   mode: "signin",
};

const LoginSlice = createSlice({
   name: "loginSlice",
   initialState,
   reducers: {
      changeToSignUp(state) {
         state.mode = "signup";
      },

      changeToSignIn(state) {
         state.mode = "signin";
      },
   },
});

export const selectLogin = (store: StoreType) => store.login;
export const { changeToSignIn, changeToSignUp } = LoginSlice.actions;

export default LoginSlice.reducer;
