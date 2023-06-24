export interface Productable {
    _id?: string;
    name: string;
    oldPrice: number;
    discount?: number;
    images: string;
    thumbnail?: string;
    shortDesc: string;
    fullDesc: string;
    stockQty: number;
    categoryId?: string;
    views?:number;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  }