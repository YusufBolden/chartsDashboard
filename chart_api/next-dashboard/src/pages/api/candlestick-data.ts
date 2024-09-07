import type { NextApiRequest, NextApiResponse } from 'next';

const candlestickData = (req: NextApiRequest, res: NextApiResponse) => {
  // Define hardcoded data
  const data = {
    data: [
      { x: "2023-01-01", open: 30, high: 40, low: 25, close: 35 },
      { x: "2023-01-02", open: 35, high: 45, low: 30, close: 40 },
      // Add more data as needed
    ],
  };

  // Send the JSON response
  res.status(200).json(data);
};

export default candlestickData;
