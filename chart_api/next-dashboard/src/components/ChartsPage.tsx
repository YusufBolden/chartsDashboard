import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Chart, Line, Bar, Pie } from 'react-chartjs-2';
import 'chartjs-chart-financial';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';

// Register Chart.js and chartjs-chart-financial elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  CandlestickController,
  CandlestickElement,
  Title,
  Tooltip,
  Legend
);

// Define the interfaces
interface CandlestickDataPoint {
  x: string; // or Date
  o: number; // Open
  h: number; // High
  l: number; // Low
  c: number; // Close
}

interface LineChartData {
  labels: string[];
  data: number[];
}

interface BarChartData {
  labels: string[];
  data: number[];
}

interface PieChartData {
  labels: string[];
  data: number[];
}

const ChartsPage = () => {
  const [candlestickData, setCandlestickData] = useState<CandlestickDataPoint[] | null>(null);
  const [lineChartData, setLineChartData] = useState<LineChartData | null>(null);
  const [barChartData, setBarChartData] = useState<BarChartData | null>(null);
  const [pieChartData, setPieChartData] = useState<PieChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [candlestickResponse, lineResponse, barResponse, pieResponse] = await Promise.all([
          fetch('/api/candlestick-data'),
          fetch('/api/line-chart-data'),
          fetch('/api/bar-chart-data'),
          fetch('/api/pie-chart-data'),
        ]);

        const [candlestick, lineChart, barChart, pieChart] = await Promise.all([
          candlestickResponse.json(),
          lineResponse.json(),
          barResponse.json(),
          pieResponse.json(),
        ]);

        setCandlestickData(candlestick.data); // Assuming `data` is the array in the response
        setLineChartData(lineChart);
        setBarChartData(barChart);
        setPieChartData(pieChart);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Charts</h1>
      <div>
        <h2>Candlestick Chart</h2>
        {candlestickData && (
          <Chart
            type="candlestick"
            data={{
              datasets: [
                {
                  label: 'Candlestick Data',
                  data: candlestickData.map((item) => ({
                    x: new Date(item.x),
                    o: item.o,
                    h: item.h,
                    l: item.l,
                    c: item.c,
                  })),
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                },
                tooltip: {
                  callbacks: {
                    label: (context) => {
                      const dataPoint = context.raw as CandlestickDataPoint;
                      return `Open: ${dataPoint.o}, High: ${dataPoint.h}, Low: ${dataPoint.l}, Close: ${dataPoint.c}`;
                    },
                  },
                },
              },
            }}
          />
        )}
      </div>
      <div>
        <h2>Line Chart</h2>
        {lineChartData && (
          <Line
            data={{
              labels: lineChartData.labels,
              datasets: [
                {
                  label: 'Line Chart Data',
                  data: lineChartData.data,
                },
              ],
            }}
          />
        )}
      </div>
      <div>
        <h2>Bar Chart</h2>
        {barChartData && (
          <Bar
            data={{
              labels: barChartData.labels,
              datasets: [
                {
                  label: 'Bar Chart Data',
                  data: barChartData.data,
                },
              ],
            }}
          />
        )}
      </div>
      <div>
        <h2>Pie Chart</h2>
        {pieChartData && (
          <Pie
            data={{
              labels: pieChartData.labels,
              datasets: [
                {
                  label: 'Pie Chart Data',
                  data: pieChartData.data,
                },
              ],
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ChartsPage;
