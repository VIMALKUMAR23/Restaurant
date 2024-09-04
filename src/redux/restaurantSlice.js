import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//Api call or asyncronous function call using Thunk
//args - slice-name/Thunk-name
const fetchRestaurant = createAsyncThunk("restaurantSlice/fetchRestaurant", () => {
  const result = axios.get("/restaurant.json").then((response) => response.data);
  console.log("response from thunk");
  console.log(result);
  return result;
});

const restaurantSlice = createSlice({
  name: "restaurantSlice",
  initialState: {
    loading: false, //pending state that means, api call in progress
    allRestaurant: [], // resolve stage
    error: "", //rejected state - returns errror
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurant.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
      state.loading = false;
      state.allRestaurant = action.payload;
      state.searchRestaurant = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRestaurant.rejected, (state, action) => {
      state.loading = false;
      state.allRestaurant = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    searchRestaurant: (state, action) => {
      state.allRestaurant.restaurants = state.searchRestaurant?.restaurants.filter((item) =>
        item.neighborhood.toLowerCase().includes(action.payload)
      );
    },
  },
});

export default restaurantSlice.reducer;
export const { searchRestaurant } = restaurantSlice.actions;
//add
export { fetchRestaurant };
// Redux is a Syncronous operation
// But Api call or file read or write ,etc are Asynchronous operations
// to deal with Asynchronous operation in redux , we are using Redux Thunk
// Thunk is not part of Slice ,separate method in redux Toolkit
