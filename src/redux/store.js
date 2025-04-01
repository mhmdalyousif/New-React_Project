import { configureStore } from "@reduxjs/toolkit";
import bazarReducer from './bazarSlice'; // Import bazarReducer once

const store = configureStore({
  reducer: {
    bazar: bazarReducer, // Use bazarReducer for the bazar state
  },
});

export default store; // Correctly exporting the store
