import { createSlice } from "@reduxjs/toolkit";
import { productsdata } from "../api/api"; // Ensure this is correct for your API

const initialState = {
  cartItems: [],  // Renamed for clarity, use cartItems for the state
  userInfo: null,  // Keep userInfo if needed for authentication or user info
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // This assumes action.payload is a product object.
      // If the product already exists, it can update the quantity.
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;  // Increment quantity if already in the cart
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // Add product with quantity 1
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setUserInfo: (state, action) => {
      
      state.userInfo = action.payload; // Add user information (optional)
    },
  },
});

export const { addToCart, removeFromCart, setUserInfo } = bazarSlice.actions;

export default bazarSlice.reducer;
