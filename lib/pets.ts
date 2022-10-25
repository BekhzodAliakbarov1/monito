import { StaticImageData } from 'next/image';
import image1 from '/public/images/pet1.png';
import image2 from '/public/images/pet2.png';
import image3 from '/public/images/pet3.png';
import image4 from '/public/images/pet4.png';
import image5 from '/public/images/pet5.png';
import image6 from '/public/images/pet6.png';
import image7 from '/public/images/pet7.png';
import image8 from '/public/images/pet8.png';

export interface SmallPetInformation {
  id: number;
  name: string;
  type: string;
  gene: string;
  age: string;
  cost: string;
  image: StaticImageData;
}

const data: SmallPetInformation[] = [
  {
    id: 1,
    name: 'MO231',
    type: 'Pomeranian White',
    gene: 'Male',
    age: '03 month',
    cost: '6.900.000 VND',
    image: image1,
  },
  {
    id: 2,
    name: 'MO502',
    type: 'Poodle Tiny Yellow',
    gene: 'Female',
    age: '02 month',
    cost: '3.900.000 VND',
    image: image2,
  },
  {
    id: 3,
    name: 'MO102',
    type: 'Poodle Tiny Sepia',
    gene: 'Male',
    age: '04 month',
    cost: '4.000.000 VND',
    image: image3,
  },
  {
    id: 4,
    name: 'MO512',
    type: 'Alaskan Malamute Grey',
    gene: 'Male',
    age: '04 month',
    cost: '8.900.000 VND',
    image: image4,
  },
  {
    id: 5,
    name: 'MO231',
    type: 'Pembroke Corgi Cream',
    gene: 'Male',
    age: '02 month',
    cost: '7.900.000 VND',
    image: image5,
  },
  {
    id: 6,
    name: 'MO502',
    type: 'Pembroke Corgi Tricolor',
    gene: 'Female',
    age: '04 month',
    cost: '9.000.000 VND',
    image: image6,
  },
  {
    id: 7,
    name: 'MO231',
    type: 'Pomeranian White',
    gene: 'Female',
    age: '02 month',
    cost: '6.500.000 VND',
    image: image7,
  },
  {
    id: 8,
    name: 'MO512',
    type: 'Poodle Tiny Dairy Cow',
    gene: 'Male',
    age: '03 month',
    cost: '5.000.000 VND',
    image: image8,
  },
];

export default data;
