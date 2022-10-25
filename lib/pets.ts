export interface SmallPetInformation {
  id: number;
  name: string;
  type: string;
  gene: string;
  age: string;
  cost: string;
  image: string;
}

const data: SmallPetInformation[] = [
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
    image: 'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg',
  },
  {
    id: 3,
    name: 'MO102',
    type: 'Poodle Tiny Sepia',
    gene: 'Male',
    age: '04 month',
    cost: '4.000.000 VND',
    image: 'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg',
  },
  {
    id: 4,
    name: 'MO512',
    type: 'Alaskan Malamute Grey',
    gene: 'Male',
    age: '04 month',
    cost: '8.900.000 VND',
    image: 'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg',
  },
  {
    id: 5,
    name: 'MO231',
    type: 'Pembroke Corgi Cream',
    gene: 'Male',
    age: '02 month',
    cost: '7.900.000 VND',
    image: 'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg',
  },
  {
    id: 6,
    name: 'MO502',
    type: 'Pembroke Corgi Tricolor',
    gene: 'Female',
    age: '04 month',
    cost: '9.000.000 VND',
    image: 'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg',
  },
  {
    id: 7,
    name: 'MO231',
    type: 'Pomeranian White',
    gene: 'Female',
    age: '02 month',
    cost: '6.500.000 VND',
    image: 'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg',
  },
  {
    id: 8,
    name: 'MO512',
    type: 'Poodle Tiny Dairy Cow',
    gene: 'Male',
    age: '03 month',
    cost: '5.000.000 VND',
    image: 'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg',
  },
];

export default data;
