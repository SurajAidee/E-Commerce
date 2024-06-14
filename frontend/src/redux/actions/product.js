import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
import { server } from "../../server";

const productCreateRequest = createAction("productCreateRequest");
const productCreateSuccess = createAction("productCreateSuccess");
const productCreateFail = createAction("productCreateFail");

// create product
export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch(productCreateRequest());

    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm,
      config
    );

    dispatch(productCreateSuccess(data.product));
    // console.log("Product data:", data.product);
    dispatch({
      type: "productCreateSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch(productCreateFail(error.response.data.message));
  }
};

// get All Products of a shop
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsRequest",
    });
    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );
    dispatch({
      type: "getAllProductsSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsFail",
      payload: error.response.data.message,
    });
  }
};

// delete product of a shop
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductRequest",
    });

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductFailed",
      payload: error.response.data.message,
    });
  }
};
