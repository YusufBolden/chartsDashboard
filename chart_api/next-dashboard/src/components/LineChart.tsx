import React from 'react';
import Plot from 'react-plotly.js';

interface LineChartData {
  x: string[];
  y: number[];
}

interface LineChartProps {
  data: LineChartData;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const { x, y } = data;

  return (
    <Plot
      data={[{
        type: 'scatter',
        mode: 'lines+markers',
        x,
        y,
        name: 'Line Data',
      }]}
      layout={{
        title: 'Line Chart',
        xaxis: { title: 'X-Axis' },
        yaxis: { title: 'Y-Axis' },
      }}
      config={{ responsive: true }}
    />
  );
};

export default LineChart;
