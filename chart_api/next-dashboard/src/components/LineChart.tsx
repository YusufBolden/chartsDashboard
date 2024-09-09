import React from 'react';
import Plot from 'react-plotly.js';

interface LineChartProps {
  data: any[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  return <Plot data={data} layout={{ title: 'Line Chart' }} />;
};

export default LineChart;
