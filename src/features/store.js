import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./counter/productSlice";
import { productApi } from "./Api/productApi";
import { exclusiveApi } from "./Api/exclusiveApi";
export const store = configureStore({
  reducer: {
    cartProduct: productSlice,
    [productApi.reducerPath]: productApi.reducer,
    [exclusiveApi.reducerPath]: exclusiveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(exclusiveApi.middleware),
});
