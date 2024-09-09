import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BarChart from '../components/BarChart';

test('renders BarChart without crashing', () => {
  const mockData = [
    {
      x: ['A', 'B', 'C'],
      y: [1, 2, 3],
      type: 'bar',
    },
  ];
  const { container } = render(<BarChart data={mockData} />);
  expect(container).toBeInTheDocument();
});
