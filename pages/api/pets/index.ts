import { NextApiHandler } from 'next';
import data from 'lib/pets';

const petList: NextApiHandler = (req, res) => {
  res.status(200).json(data);
};

export default petList;
