// The Slice contains everything that is related to the Counter
//     -> Actions
//     -> Reducer
//     -> State

import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
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
  // To do: Add Actions
  reducers: {},
});

// Because we're using createSlice from RTK
// We have access to a reducer for the counter
export default counterSlice.reducer;
