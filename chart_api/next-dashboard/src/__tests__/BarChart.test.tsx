import { render } from '@testing-library/react';
import BarChart from '../components/BarChart';

const mockData = {
  x: ['January', 'February', 'March'],
  y: [10, 15, 13],
};

test('renders BarChart component', () => {
  const { container } = render(<BarChart data={mockData} />);
  expect(container).toBeInTheDocument();
});
