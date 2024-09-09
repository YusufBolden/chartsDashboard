import React from 'react';
import Plot from 'react-plotly.js';

interface PieChartProps {
  data: any[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  return <Plot data={data} layout={{ title: 'Pie Chart' }} />;
};

export default PieChart;
