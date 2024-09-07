import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import CandlestickChart from '../components/CandlestickChart';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';

const Dashboard: React.FC = () => {
  // Fetch data from Redux store
  const candlestickData = useSelector((state: RootState) => state.candlestickData);
  const lineChartData = useSelector((state: RootState) => state.lineChartData);
  const barChartData = useSelector((state: RootState) => state.barChartData);
  const pieChartData = useSelector((state: RootState) => state.pieChartData);

  return (
    <div>
      <h1>Dashboard</h1>
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

export default Dashboard;
