// components/LineChart.tsx
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { LineChartData } from '../types/chartTypes';
import type { ChartData, ChartOptions } from 'chart.js';
import type { TooltipItem } from 'chart.js';

// Register necessary components
ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend);

interface LineChartProps {
  data: LineChartData;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const [chartData, setChartData] = useState<ChartData<'line', number[]>>({
    labels: data.labels,
    datasets: [
      {
        label: 'Line Chart',
        data: data.data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      }
    ]
  });

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem: TooltipItem<'line'>) {
            return `Value: ${tooltipItem.raw}`;
          }
        }
      }
    }
  };

  useEffect(() => {
    setChartData({
      labels: data.labels,
      datasets: [
        {
          label: 'Line Chart',
          data: data.data,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        }
      ]
    });
  }, [data]);

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
