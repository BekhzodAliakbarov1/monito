import { request } from '../request';
import { useQuery } from 'react-query';

interface PetsListResponse {
  name: 'MO231';
  type: 'Pomeranian White';
  gene: 'Male';
  age: '02 month';
  cost: '6.900.000 VND';
}

export const usePetsList = () => {
  return useQuery(`pets`, () =>
    request.public.get<PetsListResponse>(`/pets`).then((res) => res.data)
  );
};
