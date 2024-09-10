// __tests__/CandlestickChart.test.tsx

import { render } from '@testing-library/react';
import CandlestickChart from '../components/CandlestickChart';

// Updated mock data to match CandlestickChartData type
const mockData = {
  x: ['2024-01-01', '2024-01-02', '2024-01-03'],
  open: [100, 110, 120],
  high: [110, 115, 125],
  low: [95, 105, 115],
  close: [105, 112, 122],
};

test('renders CandlestickChart component', () => {
  const { container } = render(<CandlestickChart data={mockData} />);
  expect(container).toBeInTheDocument();
});
