// redux/slices/chartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the chart data types
interface ChartState {
    candlestickData: any[];
    lineChartData: any[];
    barChartData: any[];
    pieChartData: any[];
}

const initialState: ChartState = {
    candlestickData: [],
    lineChartData: [],
    barChartData: [],
    pieChartData: []
};

const chartSlice = createSlice({
    name: 'charts',
    initialState,
    reducers: {
        setCandlestickData(state, action: PayloadAction<any[]>) {
            state.candlestickData = action.payload;
        },
        setLineChartData(state, action: PayloadAction<any[]>) {
            state.lineChartData = action.payload;
        },
        setBarChartData(state, action: PayloadAction<any[]>) {
            state.barChartData = action.payload;
        },
        setPieChartData(state, action: PayloadAction<any[]>) {
            state.pieChartData = action.payload;
        },
    }
});

export const {
    setCandlestickData,
    setLineChartData,
    setBarChartData,
    setPieChartData
} = chartSlice.actions;

export default chartSlice.reducer;
