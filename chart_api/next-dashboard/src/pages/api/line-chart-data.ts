import type { NextApiRequest, NextApiResponse } from 'next';

const lineChartData = (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    data: [10, 20, 30, 40]
  };

  res.status(200).json(data);
};

export default lineChartData;
