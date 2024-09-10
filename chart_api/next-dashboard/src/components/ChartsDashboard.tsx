// components/ChartsDashboard.tsx

import dynamic from 'next/dynamic';

// Dynamically import the chart components with ssr: false
const CandlestickChart = dynamic(() => import('./CandlestickChart'), { ssr: false });
const BarChart = dynamic(() => import('./BarChart'), { ssr: false });
const PieChart = dynamic(() => import('./PieChart'), { ssr: false });
const LineChart = dynamic(() => import('./LineChart'), { ssr: false });

const ChartsDashboard: React.FC = () => {
  // Example data for each chart
  const candlestickData = {
    x: ['2024-09-01', '2024-09-02', '2024-09-03'],
    open: [100, 110, 105],
    high: [115, 120, 110],
    low: [95, 100, 100],
    close: [110, 115, 105],
  };

  const barChartData = {
    x: ['A', 'B', 'C'],
    y: [10, 20, 30],
  };

  const pieChartData = {
    labels: ['A', 'B', 'C'],
    values: [10, 20, 30],
  };

  const lineChartData = {
    x: ['2024-09-01', '2024-09-02', '2024-09-03'],
    y: [10, 20, 15],
  };

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

export default ChartsDashboard;
