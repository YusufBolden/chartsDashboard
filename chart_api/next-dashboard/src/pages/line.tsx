import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the LineChart component
const LineChart = dynamic(() => import('../components/LineChart'), { ssr: false });

const LinePage = () => {
  // Sample data for the LineChart
  const data = [
    { x: ['January', 'February', 'March'], y: [10, 15, 13], name: 'Sales' },
    { x: ['January', 'February', 'March'], y: [5, 7, 6], name: 'Expenses' }
  ];

  return (
    <div>
      <h1>Line Chart</h1>
      <LineChart data={data} />
    </div>
  );
};

export default LinePage;
