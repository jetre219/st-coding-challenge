import { Leaf } from '../sortCategoriesForInsert';

export const multipleEntryPointsTree: Leaf[] = [
  {
    name: 'Watches',
    id: 20,
    parent_id: 10,
  },
  {
    name: 'Accessories',
    id: 1,
    parent_id: null,
  },
  {
    name: 'Accessories',
    id: 10,
    parent_id: null,
  },

  {
    name: 'Watches',
    id: 2,
    parent_id: 1,
  },
  {
    name: 'Watches',
    id: 3,
    parent_id: 1,
  },
  {
    name: 'Men',
    id: 4,
    parent_id: 2,
  },
  {
    name: 'Watches',
    id: 5,
    parent_id: 2,
  },
  {
    name: 'Watches',
    id: 6,
    parent_id: 2,
  },
  {
    name: 'Watches',
    id: 7,
    parent_id: 3,
  },
];
