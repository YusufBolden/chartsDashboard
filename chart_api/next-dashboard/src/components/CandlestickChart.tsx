import React from 'react';
import Plot from 'react-plotly.js';

interface CandlestickChartProps {
  data: any[];
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  return <Plot data={data} layout={{ title: 'Candlestick Chart' }} />;
};

export default CandlestickChart;
