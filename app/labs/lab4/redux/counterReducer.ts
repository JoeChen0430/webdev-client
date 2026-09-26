"use client";

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 7 },
  reducers: {
    up: (state) => {
      state.count += 1;
    },
    down: (state) => {
      state.count -= 1;
    },
    // On your own: my own reset action
    resetToSeven: (state) => {
      state.count = 7;
    },
    // With AI: sample reset action
    reset: (state) => {
      state.count = 7;
    },
  },
});

export const { up, down, resetToSeven, reset } = counterSlice.actions;
export default counterSlice.reducer;
