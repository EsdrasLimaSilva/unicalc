import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreType } from "../store";

type User = { username: string; course: string; imageUrl: string; email: string };

const initialState: { user: User | null; mode: string } = {
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

      setUser(state, action: PayloadAction<User>) {
         state.user = action.payload;
      },
   },
});

export const selectLogin = (store: StoreType) => store.login;
export const { changeToSignIn, changeToSignUp, setUser } = LoginSlice.actions;

export default LoginSlice.reducer;
