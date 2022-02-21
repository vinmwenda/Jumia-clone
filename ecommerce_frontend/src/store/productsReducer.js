import { createSlice } from "@reduxjs/toolkit";
//import configureAppStore from "./storeConfiguration";
//store.dispatch(actions.productLoaded({description:"product one"}))

const slice = createSlice({
  name: "products",
  initialState: {
    details: {},
    list: [],
  },
  reducers: {
    productDetails: (state, action) => {
      state.details = { ...action.payload };
    },
    apiCallSuccessiful: (state, action) => {
      state.list.push(...action.payload);
    },
  },
});

export const { apiCallSuccessiful, productDetails } = slice.actions;
export default slice.reducer;

// const store = configureAppStore();

// store.dispatch({
//   type: "apiCallBegan",
//   payload: {
//     url: "/api/products",
//     onSuccess: "apiCallSuccesiful",
//     onError: "apiCallFailed",
//   },
// });
