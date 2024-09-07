import type { NextApiRequest, NextApiResponse } from 'next';

const barChartData = (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    labels: ["Product A", "Product B", "Product C"],
    data: [100, 150, 200]
  };

  res.status(200).json(data);
};

export default barChartData;
