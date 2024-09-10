// components/BarChart.tsx

import React from 'react';
import Plot from 'react-plotly.js';

interface BarChartData {
  x: string[];
  y: number[];
}

interface BarChartProps {
  data: BarChartData;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const { x, y } = data;

  return (
    <Plot
      data={[{
        type: 'bar',
        x,
        y,
        marker: {
          color: 'rgba(55, 128, 191, 0.6)',
          line: {
            color: 'rgba(55, 128, 191, 1.0)',
            width: 1,
          },
        },
      }]}
      layout={{
        title: 'Bar Chart',
        xaxis: { title: 'Categories' },
        yaxis: { title: 'Values' },
      }}
      config={{ responsive: true }}
    />
  );
};

export default BarChart;
