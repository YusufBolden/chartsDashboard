import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the BarChart component
const BarChart = dynamic(() => import('../components/BarChart'), { ssr: false });

const BarPage = () => {
  // Sample data for the BarChart
  const data = [
    { x: ['January', 'February', 'March'], y: [10, 15, 13], name: 'Sales' },
    { x: ['January', 'February', 'March'], y: [5, 7, 6], name: 'Expenses' }
  ];

  return (
    <div>
      <h1>Bar Chart</h1>
      <BarChart data={data} />
    </div>
  );
};

export default BarPage;
