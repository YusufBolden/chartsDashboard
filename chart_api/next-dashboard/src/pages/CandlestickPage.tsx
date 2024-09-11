import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the CandlestickChart component
const CandlestickChart = dynamic(() => import('../components/CandlestickChart'), { ssr: false });

const CandlestickPage: React.FC = () => {
  // Sample data for the CandlestickChart
  const data = {
    x: ['2024-01-01', '2024-01-02', '2024-01-03'],
    open: [100, 110, 120],
    high: [110, 115, 125],
    low: [95, 105, 115],
    close: [105, 112, 122],
  };

  return (
    <div>
      <h1>Candlestick Chart</h1>
      <CandlestickChart data={data} />
    </div>
  );
};

export default CandlestickPage;
