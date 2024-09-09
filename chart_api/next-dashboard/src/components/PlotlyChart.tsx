import React from 'react';
import Plot from 'react-plotly.js';

const PlotlyChart = () => {
  return (
    <Plot
      data={[
        {
          type: 'scatter',
          mode: 'lines',
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
        },
      ]}
      layout={{ title: 'A Fancy Plot' }}
    />
  );
};

export default PlotlyChart;
