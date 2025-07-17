import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "../features/userDetailslice";


export const store = configureStore({
  reducer: {
   app:userDetail
  },
});