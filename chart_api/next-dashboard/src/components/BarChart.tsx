import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { BarChartData } from '../types/chartTypes';
import type { ChartData, ChartOptions } from 'chart.js';
import type { TooltipItem } from 'chart.js';

// Register necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface BarChartProps {
  data: BarChartData;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const [chartData, setChartData] = useState<ChartData<'bar', number[]>>({
    labels: data.labels,
    datasets: [
      {
        label: 'Bar Chart',
        data: data.data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  });

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem: TooltipItem<'bar'>) {
            // Ensure 'raw' is correctly typed
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
          label: 'Bar Chart',
          data: data.data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }
      ]
    });
  }, [data]);

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
