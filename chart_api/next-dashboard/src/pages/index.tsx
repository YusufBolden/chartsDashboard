import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Charts Dashboard</h1>
      <ul>
        <li><Link href="/CandlestickPage">Candlestick Chart</Link></li>
        <li><Link href="/bar">Bar Chart</Link></li>
        <li><Link href="/pie">Pie Chart</Link></li>
        <li><Link href="/line">Line Chart</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
