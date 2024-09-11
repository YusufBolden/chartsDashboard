import { render } from '@testing-library/react';
import PieChart from '../components/PieChart';

const mockData = {
  labels: ['Red', 'Blue', 'Yellow'],
  values: [10, 20, 30],
};

test('renders PieChart component', () => {
  const { container } = render(<PieChart data={mockData} />);
  expect(container).toBeInTheDocument();
});
