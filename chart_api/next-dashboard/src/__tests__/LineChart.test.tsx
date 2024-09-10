// __tests__/LineChart.test.tsx

import { render } from '@testing-library/react';
import LineChart from '../components/LineChart';

// Updated mock data to match LineChartData type
const mockData = {
  x: ['January', 'February', 'March'],
  y: [10, 15, 13],
};

test('renders LineChart component', () => {
  const { container } = render(<LineChart data={mockData} />);
  expect(container).toBeInTheDocument();
});
