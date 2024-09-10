// components/CandlestickChart.tsx

import React from 'react';
import Plot from 'react-plotly.js';

interface CandlestickChartData {
  x: string[];
  open: number[];
  high: number[];
  low: number[];
  close: number[];
}

interface CandlestickChartProps {
  data: CandlestickChartData;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const { x, open, high, low, close } = data;

  return (
    <Plot
      data={[{
        type: 'candlestick',
        x,
        open,
        high,
        low,
        close,
        name: 'Candlestick Data',
      }]}
      layout={{
        title: 'Candlestick Chart',
        xaxis: { title: 'Date' },
        yaxis: { title: 'Price' },
      }}
      config={{ responsive: true }}
    />
  );
};

export default CandlestickChart;
