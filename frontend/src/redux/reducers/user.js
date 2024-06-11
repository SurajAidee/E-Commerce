// import { createAction, createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isAuthenticated: false,
//   user: [],
//   value: 0,
// };

// const increment = createAction("increment");
// const decrement = createAction("decrement");
// const incrementByAmount = createAction("counter/incrementByAmount");

// export const userReducer = createReducer(
//   initialState,
//   (builder) => {
//     builder
//       .addCase(increment, (state, action) => {
//         state.value++;
//       })
//       .addCase(decrement, (state, action) => {
//         state.value--;
//       })
//       .addCase(incrementByAmount, (state, action) => {
//         state.value += action.payload;
//       });
//   },
//   {
//     LoadUserRequest: (state) => {
//       state.loading = true;
//     },
//     LoadUserSuccess: (state, action) => {
//       state.isAuthenticated = true;
//       state.loading = false;
//       console.log(action.payload);
//       state.user = action.payload;
//     },
//     LoadUserFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//       state.isAuthenticated = false;
//     },
//     clearErrors: (state) => {
//       state.error = null;
//     },
//   }
// );
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: [],
  value: 0,
  loading: false,
  error: null,
};

// Define actions
const increment = createAction("increment");
const decrement = createAction("decrement");
const incrementByAmount = createAction("counter/incrementByAmount");
const loadUserRequest = createAction("LoadUserRequest");
const loadUserSuccess = createAction("LoadUserSuccess");
const loadUserFail = createAction("LoadUserFail");
const clearErrors = createAction("clearErrors");

export const userReducer = createReducer(initialState, (builder) => {
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
    .addCase(loadUserRequest, (state) => {
      state.loading = true;
    })
    .addCase(loadUserSuccess, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(loadUserFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })
    .addCase(clearErrors, (state) => {
      state.error = null;
    });
});
