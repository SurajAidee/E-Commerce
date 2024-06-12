import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  isSeller: false,
  seller: [],
  isLoading: false,
};

// Define actions
const increment = createAction("increment");
const decrement = createAction("decrement");
const incrementByAmount = createAction("counter/incrementByAmount");
const loadSellerRequest = createAction("LoadSellerRequest");
const loadSellerSuccess = createAction("LoadSellerSuccess");
const loadSellerFail = createAction("LoadSellerFail");
const clearErrors = createAction("clearErrors");

export const sellerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value++;
    })
    .addCase(decrement, (state) => {
      state.value--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    })
    .addCase(loadSellerRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(loadSellerSuccess, (state, action) => {
      state.isSeller = true;
      state.isLoading = false;
      state.seller = action.payload;
    })
    .addCase(loadSellerFail, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSeller = false;
    })
    .addCase(clearErrors, (state) => {
      state.error = null;
    });
});
