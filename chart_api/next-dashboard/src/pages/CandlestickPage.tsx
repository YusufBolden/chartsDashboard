import CandlestickChart from '../components/CandlestickChart';

// Example data for Candlestick Chart
const exampleData = [
  {
    x: ['2024-01-01', '2024-01-02', '2024-01-03'],
    open: [100, 110, 105],
    high: [115, 120, 110],
    low: [95, 100, 100],
    close: [110, 105, 108]
  }
];

const CandlestickPage = () => {
  return (
    <div>
      <h1>Candlestick Chart</h1>
      <CandlestickChart data={exampleData} />
    </div>
  );
};

export default CandlestickPage;
