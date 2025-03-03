import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './counter/counterSlice'
import {productApi} from './Api/productApi'
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})