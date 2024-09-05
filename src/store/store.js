import { configureStore } from "@reduxjs/toolkit"
import { datVeReducer } from "./datVe/slice"

export const store = configureStore({
  reducer: {
    datVeReducer,
  }
})