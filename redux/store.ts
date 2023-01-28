import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import loginReducer from "./slices/loginSlice";

const store = configureStore({
   reducer: {
      login: loginReducer,
   },
});

export type StoreType = ReturnType<typeof store.getState>;
const makeStore = () => store;

export const storeWrapper = createWrapper(makeStore, { debug: false });
