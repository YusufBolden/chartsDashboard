// components/PieChart.tsx

import React from 'react';
import Plot from 'react-plotly.js';

interface PieChartData {
  labels: string[];
  values: number[];
}

interface PieChartProps {
  data: PieChartData;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const { labels, values } = data;

  return (
    <Plot
      data={[{
        type: 'pie',
        labels,
        values,
        textinfo: 'label+percent',
        insidetextorientation: 'radial',
      }]}
      layout={{
        title: 'Pie Chart',
      }}
      config={{ responsive: true }}
    />
  );
};

export default PieChart;
