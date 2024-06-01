import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const increment = createAction("increment");
const decrement = createAction("decrement");
const incrementByAmount = createAction("counter/incrementByAmount");

export const userReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.value++;
      })
      .addCase(decrement, (state, action) => {
        state.value--;
      })
      .addCase(incrementByAmount, (state, action) => {
        state.value += action.payload;
      });
  },
  {
    LoadUserRequest: (state) => {
      state.loading = true;
    },
    LoadUserSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    },
    LoadUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);
