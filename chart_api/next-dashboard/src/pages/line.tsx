import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the LineChart component
const LineChart = dynamic(() => import('../components/LineChart'), { ssr: false });

const LinePage: React.FC = () => {
  // Sample data for the LineChart
  const data = {
    x: ['January', 'February', 'March'],
    y: [10, 15, 13],
  };

  return (
    <div>
      <h1>Line Chart</h1>
      <LineChart data={data} />
    </div>
  );
};

export default LinePage;
