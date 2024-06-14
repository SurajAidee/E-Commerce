import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  product: [],
  products: [],
  message: "",
  value: 0,
};

// Define actions
const increment = createAction("increment");
const decrement = createAction("decrement");
const incrementByAmount = createAction("counter/incrementByAmount");
const productCreateRequest = createAction("productCreateRequest");
const productCreateSuccess = createAction("productCreateSuccess");
const productCreateFail = createAction("productCreateFail");
const getAllProductsRequest = createAction("getAllProductsRequest");
const getAllProductsSuccess = createAction("getAllProductsSuccess");
const getAllProductsFailed = createAction("getAllProductsFailed");
const deleteProductRequest = createAction("deleteProductRequest");
const deleteProductSuccess = createAction("deleteProductSuccess");
const deleteProductFailed = createAction("deleteProductFailed");
const clearErrors = createAction("clearErrors");

export const productReducer = createReducer(initialState, (builder) => {
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
    .addCase(productCreateRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(productCreateSuccess, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.success = true;
    })
    .addCase(productCreateFail, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })

    // get all products
    .addCase(getAllProductsRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(getAllProductsSuccess, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase(getAllProductsFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

    // delete product of a shop
    .addCase(deleteProductRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(deleteProductSuccess, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase(deleteProductFailed, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(clearErrors, (state) => {
      state.error = null;
    });
});
