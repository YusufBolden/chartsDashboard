import dynamic from 'next/dynamic';

// Dynamically import the chart components with ssr: false
const CandlestickChart = dynamic(() => import('./CandlestickChart'), { ssr: false });
const BarChart = dynamic(() => import('./BarChart'), { ssr: false });
const PieChart = dynamic(() => import('./PieChart'), { ssr: false });
const LineChart = dynamic(() => import('./LineChart'), { ssr: false });

const ChartsDashboard = () => {
  // Example data for each chart - replace with actual data fetching logic
  const candlestickData = [
    {
      type: 'candlestick',
      x: ['2024-09-01', '2024-09-02', '2024-09-03'],
      open: [100, 110, 105],
      high: [115, 120, 110],
      low: [95, 100, 100],
      close: [110, 115, 105],
      name: 'Candlestick Data',
    }
  ];

  const barChartData = [
    {
      type: 'bar',
      x: ['A', 'B', 'C'],
      y: [10, 20, 30],
      name: 'Bar Chart Data',
    }
  ];

  const pieChartData = [
    {
      type: 'pie',
      labels: ['A', 'B', 'C'],
      values: [10, 20, 30],
      name: 'Pie Chart Data',
    }
  ];

  const lineChartData = [
    {
      type: 'line',
      x: ['2024-09-01', '2024-09-02', '2024-09-03'],
      y: [10, 20, 15],
      name: 'Line Chart Data',
    }
  ];

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
