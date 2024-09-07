// redux/slices/apiSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async thunks
export const fetchCandlestickData = createAsyncThunk(
  'charts/fetchCandlestickData',
  async () => {
    const response = await axios.get('/api/candlestick-data/');
    return response.data;
  }
);

export const fetchLineChartData = createAsyncThunk(
  'charts/fetchLineChartData',
  async () => {
    const response = await axios.get('/api/line-chart-data/');
    return response.data;
  }
);

export const fetchBarChartData = createAsyncThunk(
  'charts/fetchBarChartData',
  async () => {
    const response = await axios.get('/api/bar-chart-data/');
    return response.data;
  }
);

export const fetchPieChartData = createAsyncThunk(
  'charts/fetchPieChartData',
  async () => {
    const response = await axios.get('/api/pie-chart-data/');
    return response.data;
  }
);

interface ChartState {
  candlestickData: [];
  lineChartData: [];
  barChartData: [];
  pieChartData: [];
  loading: boolean;
  error: string | null;
}

const initialState: ChartState = {
  candlestickData: [],
  lineChartData: [],
  barChartData: [],
  pieChartData: [],
  loading: false,
  error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCandlestickData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCandlestickData.fulfilled, (state, action) => {
        state.candlestickData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCandlestickData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch candlestick data';
      })
      .addCase(fetchLineChartData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLineChartData.fulfilled, (state, action) => {
        state.lineChartData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchLineChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch line chart data';
      })
      .addCase(fetchBarChartData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBarChartData.fulfilled, (state, action) => {
        state.barChartData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchBarChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch bar chart data';
      })
      .addCase(fetchPieChartData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPieChartData.fulfilled, (state, action) => {
        state.pieChartData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPieChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch pie chart data';
      });
  },
});

export default apiSlice.reducer;
