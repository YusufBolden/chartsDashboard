// __tests__/BarChart.test.tsx

import { render } from '@testing-library/react';
import BarChart from '../components/BarChart';

// Updated mock data to match BarChartData type
const mockData = {
  x: ['January', 'February', 'March'],
  y: [10, 15, 13],
};

test('renders BarChart component', () => {
  const { container } = render(<BarChart data={mockData} />);
  expect(container).toBeInTheDocument();
});
