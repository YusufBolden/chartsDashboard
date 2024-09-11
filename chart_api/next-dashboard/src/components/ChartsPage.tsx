import React from 'react';
import CandlestickChart from '../components/CandlestickChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';

// Example data for all charts
const candlestickData = {
  x: ['2024-01-01', '2024-01-02', '2024-01-03'],
  open: [100, 110, 120],
  high: [110, 115, 125],
  low: [95, 105, 115],
  close: [105, 112, 122],
};

const barChartData = {
  x: ['Q1', 'Q2', 'Q3', 'Q4'],
  y: [10, 20, 15, 25],
};

const pieChartData = {
  labels: ['A', 'B', 'C'],
  values: [30, 50, 20],
};

const lineChartData = {
  x: ['Jan', 'Feb', 'Mar'],
  y: [30, 40, 35],
};

const ChartPage: React.FC = () => {
  return (
    <div>
      <h2>Candlestick Chart</h2>
      <CandlestickChart data={candlestickData} />

      <h2>Bar Chart</h2>
      <BarChart data={barChartData} />

      <h2>Pie Chart</h2>
      <PieChart data={pieChartData} />

      <h2>Line Chart</h2>
      <LineChart data={lineChartData} />
    </div>
  );
};

export default ChartPage;
