import {configureStore, createSlice} from "@reduxjs/toolkit";

const jokesSlice = createSlice({
  name: "jokes",
  initialState: {
    total: 0,
  },
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const {setTotal} = jokesSlice.actions;
const store = configureStore({
  reducer: {
    jokes: jokesSlice.reducer,
  },
});

export default store;