import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "../reducers/reviewSlice";

const store = configureStore({
  reducer: {
    reviews: reviewSlice.reducer,
  },
});

export default store;
