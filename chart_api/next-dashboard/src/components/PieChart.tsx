// components/PieChart.tsx
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { PieChartData } from '../types/chartTypes';
import type { ChartData, ChartOptions } from 'chart.js';
import type { TooltipItem } from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: PieChartData;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const [chartData, setChartData] = useState<ChartData<'pie', number[]>>({
    labels: data.labels,
    datasets: [
      {
        label: 'Pie Chart',
        data: data.data,
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      }
    ]
  });

  const options: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem: TooltipItem<'pie'>) {
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
          label: 'Pie Chart',
          data: data.data,
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1,
        }
      ]
    });
  }, [data]);

  return (
    <div>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
