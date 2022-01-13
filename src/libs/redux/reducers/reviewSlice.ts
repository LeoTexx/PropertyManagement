import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReviews = createAsyncThunk("reviews/status", async () => {
  const response = await axios.get(
    "https://interview-task-api.bookiply.io/reviews"
  );
  return response.data;
});

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
  },
});

export default reviewSlice;
