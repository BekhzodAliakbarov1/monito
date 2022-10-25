import { NextApiHandler } from 'next';
import data from 'lib/products';

const productList: NextApiHandler = (req, res) => {
  res.status(200).json(data);
};

export default productList;
