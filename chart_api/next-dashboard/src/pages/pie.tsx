import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the PieChart component
const PieChart = dynamic(() => import('../components/PieChart'), { ssr: false });

const PiePage = () => {
  // Sample data for the PieChart
  const data = [
    { labels: ['Red', 'Blue', 'Yellow'], values: [10, 20, 30], name: 'Distribution' }
  ];

  return (
    <div>
      <h1>Pie Chart</h1>
      <PieChart data={data} />
    </div>
  );
};

export default PiePage;
