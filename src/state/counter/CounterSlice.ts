// The Slice contains everything that is related to the Counter
//     -> Actions
//     -> Reducer
//     -> State

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// A Slice takes an object as a parameter
// 1 - it expects a key for the name of the slice
// 2 - it takes the initial State for the slices to start with
// 3 - reducers
const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Because we're using createSlice from RTK
// We have access to a reducer for the counter
export default counterSlice.reducer;
