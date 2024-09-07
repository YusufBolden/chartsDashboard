import { configureStore } from '@reduxjs/toolkit';
import candlestickReducer from './slices/candlestickSlice'; // Importing the reducers

// Configure the Redux store
export const store = configureStore({
  reducer: {
    candlestickData: candlestickReducer, // Add your reducers here
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

// Export the store and RootState for use in components
export default store;
