// redux/slices/candlestickSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface CandlestickState {
  data: [];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
const initialState: CandlestickState = {
  data: [],
  status: 'idle',
  error: null,
};

// Create the slice
const candlestickSlice = createSlice({
  name: 'candlestickData',
  initialState,
  reducers: {
    fetchCandlestickSuccess(state, action) {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    fetchCandlestickFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchCandlestickSuccess, fetchCandlestickFailure } = candlestickSlice.actions;
export default candlestickSlice.reducer;
