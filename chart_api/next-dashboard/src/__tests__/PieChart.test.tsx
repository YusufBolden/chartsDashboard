import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PieChart from '../components/PieChart';

test('renders PieChart without crashing', () => {
  const mockData = [
    {
      values: [10, 20, 30],
      labels: ['A', 'B', 'C'],
      type: 'pie',
    },
  ];
  const { container } = render(<PieChart data={mockData} />);
  expect(container).toBeInTheDocument();
});
