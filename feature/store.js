import { configureStore } from "@reduxjs/toolkit";
import adsSlice from "./service/adsSlice";

export const store = configureStore({
  reducer: {
    adsCount: adsSlice,
  },
});
