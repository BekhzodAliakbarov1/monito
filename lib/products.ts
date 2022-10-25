export interface SmallProductInformation {
  id: number;
  name: string;
  type: string;
  gene: string;
  age: string;
  cost: string;
  image: string;
}

const data: SmallProductInformation[] = [
  {
    id: 1,
    name: 'MO231',
    type: 'Pomeranian White',
    gene: 'Male',
    age: '03 month',
    cost: '6.900.000 VND',
    image: 'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg',
  },
  {
    id: 2,
    name: 'MO502',
    type: 'Poodle Tiny Yellow',
    gene: 'Female',
    age: '02 month',
    cost: '3.900.000 VND',
    image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg',
  },
  {
    id: 3,
    name: 'MO102',
    type: 'Poodle Tiny Sepia',
    gene: 'Male',
    age: '04 month',
    cost: '4.000.000 VND',
    image: 'https://cdn.pixabay.com/photo/2016/03/27/21/16/pet-1284307_1280.jpg',
  },
  {
    id: 4,
    name: 'MO512',
    type: 'Alaskan Malamute Grey',
    gene: 'Male',
    age: '04 month',
    cost: '8.900.000 VND',
    image: 'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg',
  },
  {
    id: 5,
    name: 'MO231',
    type: 'Pembroke Corgi Cream',
    gene: 'Male',
    age: '02 month',
    cost: '7.900.000 VND',
    image: 'https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_1280.jpg',
  },
  {
    id: 6,
    name: 'MO502',
    type: 'Pembroke Corgi Tricolor',
    gene: 'Female',
    age: '04 month',
    cost: '9.000.000 VND',
    image: 'https://cdn.pixabay.com/photo/2016/01/02/18/39/puppy-1118584_1280.jpg',
  },
  {
    id: 7,
    name: 'MO231',
    type: 'Pomeranian White',
    gene: 'Female',
    age: '02 month',
    cost: '6.500.000 VND',
    image: 'https://cdn.pixabay.com/photo/2017/08/01/09/04/dog-2563759_1280.jpg',
  },
  {
    id: 8,
    name: 'MO512',
    type: 'Poodle Tiny Dairy Cow',
    gene: 'Male',
    age: '03 month',
    cost: '5.000.000 VND',
    image: 'https://cdn.pixabay.com/photo/2016/11/22/23/13/dog-1851107_1280.jpg',
  },
];

export default data;
