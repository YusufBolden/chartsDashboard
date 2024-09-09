import dynamic from 'next/dynamic';

// Dynamically import the PlotlyChart component with no SSR
const PlotlyChart = dynamic(() => import('../components/PlotlyChart'), {
  ssr: false,
});

const ChartPage = () => {
  return (
    <div>
      <h1>Chart Page</h1>
      <PlotlyChart />
    </div>
  );
};

export default ChartPage;
