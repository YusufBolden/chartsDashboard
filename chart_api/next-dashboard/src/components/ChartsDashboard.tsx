import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  fetchCandlestickData,
  fetchLineChartData,
  fetchBarChartData,
  fetchPieChartData
} from '../redux/slices/apiSlice';
import CandlestickChart from './CandlestickChart';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import { CandlestickData, LineChartData, BarChartData, PieChartData } from '../types/chartTypes';

const ChartsDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const candlestickData = useSelector((state: RootState) => state.api.candlestickData) as CandlestickData[];
  const lineChartData = useSelector((state: RootState) => state.api.lineChartData) as LineChartData;
  const barChartData = useSelector((state: RootState) => state.api.barChartData) as BarChartData;
  const pieChartData = useSelector((state: RootState) => state.api.pieChartData) as PieChartData;
  const loading = useSelector((state: RootState) => state.api.loading);
  const error = useSelector((state: RootState) => state.api.error);

  useEffect(() => {
    dispatch(fetchCandlestickData());
    dispatch(fetchLineChartData());
    dispatch(fetchBarChartData());
    dispatch(fetchPieChartData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Charts Dashboard</h1>
      <div>
        <h2>Candlestick Chart</h2>
        <CandlestickChart data={candlestickData} />
      </div>
      <div>
        <h2>Line Chart</h2>
        <LineChart data={lineChartData} />
      </div>
      <div>
        <h2>Bar Chart</h2>
        <BarChart data={barChartData} />
      </div>
      <div>
        <h2>Pie Chart</h2>
        <PieChart data={pieChartData} />
      </div>
    </div>
  );
};

export default ChartsDashboard;
