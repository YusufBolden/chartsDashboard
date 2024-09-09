import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CandlestickChart from '../components/CandlestickChart';

test('renders CandlestickChart without crashing', () => {
  const mockData = [
    {
      x: ['2023-01-01', '2023-01-02', '2023-01-03'],
      close: [100, 200, 150],
      decreasing: { line: { color: 'red' } },
      high: [210, 230, 190],
      increasing: { line: { color: 'green' } },
      low: [90, 170, 130],
      open: [95, 180, 145],
      type: 'candlestick',
    },
  ];
  const { container } = render(<CandlestickChart data={mockData} />);
  expect(container).toBeInTheDocument();
});
