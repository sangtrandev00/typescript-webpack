import { Productable } from './Product';

export interface CategoryInterface {
  _id?: string;
  name: string;
  cateImage: string;
  description: string;
  qtyProducts: number;
  createdAt?: string;
  updatedAt?: string;
  products?: [Productable[]];
  __v?: number;
}
