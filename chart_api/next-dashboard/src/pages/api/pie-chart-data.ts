import type { NextApiRequest, NextApiResponse } from 'next';

const pieChartData = (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    data: [300, 50, 100]
  };

  res.status(200).json(data);
};

export default pieChartData;
