export interface SmallProductInformation {
  id: number;
  name: string;
  cost: string;
  image: string;
  product: string;
  size: string;
  prize: string;
}

const data: SmallProductInformation[] = [
  {
    id: 1,
    name: 'Reflex Plus Adult Cat Food Salmon',
    prize: 'Free Toy & Free Shaker',
    product: 'Dog Food',
    size: '385gm',
    cost: '140.000 VND',
    image: 'https://cdn.pixabay.com/photo/2020/05/13/21/03/dog-food-5168940__480.jpg',
  },
  {
    id: 2,
    name: 'Reflex Plus Adult Cat Food Salmon',
    prize: 'Free Toy & Free Shaker',
    product: 'Cat Food',
    size: '1.5kg',

    cost: '165.000 VND',
    image: 'https://cdn.pixabay.com/photo/2017/03/24/08/24/cat-2170494__480.jpg',
  },
  {
    id: 3,
    name: 'Cat scratching ball toy kitten sisal rope ball',
    prize: 'Free Cat Food',
    product: 'Toy',
    size: '',

    cost: '1.100.000 VND',
    image: 'https://cdn.pixabay.com/photo/2019/02/15/17/42/pet-food-3998919__480.jpg',
  },
  {
    id: 4,
    name: 'Cute Pet Cat Warm Nest For Lying',
    prize: 'Free Cat Food',
    product: 'Toy',
    size: '',

    cost: '410.000 VND',
    image: 'https://cdn.pixabay.com/photo/2012/01/03/23/34/nuts-11264__480.jpg',
  },
  {
    id: 5,
    name: 'NaturVet Dogs - Omega-Gold Plus Salmon Oil',
    prize: 'Free Toy & Free Shaker',
    product: 'Dog Food',
    size: '385gm',

    cost: '350.000 VND',
    image: 'https://cdn.pixabay.com/photo/2020/02/07/17/05/lobster-4827704__480.jpg',
  },
  {
    id: 6,
    name: 'Costumes Fashion Pet Clother Cowboy Rider',
    prize: 'Free Toy & Free Shaker',
    product: 'Costume',
    size: '1.5kg',

    cost: '500.000 VND',
    image: 'https://cdn.pixabay.com/photo/2018/03/14/20/08/dog-food-3226266__480.jpg',
  },
  {
    id: 7,
    name: 'Costumes Chicken Drumsti ck Headband',
    prize: 'Free Cat Food',
    product: 'Costume',
    size: '',

    cost: '400.000 VND',
    image: 'https://cdn.pixabay.com/photo/2019/12/13/19/49/dog-food-4693738__480.jpg',
  },
  {
    id: 8,
    name: 'Cute Plush Pet Toy Color Pink ck',
    prize: 'Free Food & Shaker',
    product: 'Toy',
    size: '',

    cost: '250.000 VND',
    image: 'https://cdn.pixabay.com/photo/2014/05/21/18/08/dog-bones-350093__480.jpg',
  },
];

export default data;
