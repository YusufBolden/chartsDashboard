import { render } from '@testing-library/react';
import LineChart from '../components/LineChart';
import React from 'react';

const mockData = {
  x: ['January', 'February', 'March'],
  y: [10, 15, 13],
};

test('renders LineChart component', () => {
  const { container } = render(<LineChart data={mockData} />);
  expect(container).toBeInTheDocument();
});
