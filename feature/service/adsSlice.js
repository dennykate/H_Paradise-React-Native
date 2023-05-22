import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reward: 0,
};

export const adsSlice = createSlice({
  name: "adsSlice",
  initialState,
  reducers: {
    increaseAmount: (state = []) => {
      state.reward += 1;
    },
  },
});

export const { increaseAmount } = adsSlice.actions;
export default adsSlice.reducer;
