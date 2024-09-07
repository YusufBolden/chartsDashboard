// components/CandlestickChart.tsx
import React, { useEffect, useRef, useMemo } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';
import 'chartjs-chart-financial'; // Import the financial chart plugin
import { CandlestickChartData } from '../types/chartTypes';

// Register necessary Chart.js components and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  // Financial plugin
);

interface CandlestickChartProps {
  data: CandlestickChartData;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  // Define the chartData variable with correct type
  const chartData: ChartData<'candlestick', {
    x: string;
    o: number;
    h: number;
    l: number;
    c: number;
  }[]> = useMemo(() => ({
    datasets: [
      {
        label: 'Candlestick Chart',
        data: data.data.map(item => ({
          x: item.x,
          o: item.open,
          h: item.high,
          l: item.low,
          c: item.close,
        })),
        borderColor: 'rgba(75, 192, 192, 1)', // Color for the border
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color for the background of the candles
        borderWidth: 1, // Width of the border lines
      },
    ],
  }), [data]);

  const options: ChartOptions<'candlestick'> = useMemo(() => ({
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const { o, h, l, c } = tooltipItem.raw as { o: number; h: number; l: number; c: number };
            return `Open: ${o}, High: ${h}, Low: ${l}, Close: ${c}`;
          },
        },
      },
    },
  }), []);

  useEffect(() => {
    if (chartRef.current) {
      // Create a new Chart instance
      new ChartJS(chartRef.current, {
        type: 'candlestick' as const,
        data: chartData,
        options: options,
      });
    }
  }, [chartData, options]); // Include all necessary dependencies

  return <canvas ref={chartRef} />;
};

export default CandlestickChart;
