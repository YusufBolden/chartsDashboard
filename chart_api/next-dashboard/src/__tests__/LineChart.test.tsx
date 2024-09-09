import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LineChart from '../components/LineChart';

test('renders LineChart without crashing', () => {
  const mockData = [
    {
      x: ['January', 'February', 'March'],
      y: [10, 20, 30],
      type: 'scatter',
      mode: 'lines',
    },
  ];
  const { container } = render(<LineChart data={mockData} />);
  expect(container).toBeInTheDocument();
});
