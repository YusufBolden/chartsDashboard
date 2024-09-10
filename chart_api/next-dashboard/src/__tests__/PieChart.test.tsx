// __tests__/PieChart.test.tsx

import { render } from '@testing-library/react';
import PieChart from '../components/PieChart';

// Updated mock data to match PieChartData type
const mockData = {
  labels: ['Red', 'Blue', 'Yellow'],
  values: [10, 20, 30],
};

test('renders PieChart component', () => {
  const { container } = render(<PieChart data={mockData} />);
  expect(container).toBeInTheDocument();
});
