interface Productable {
  id?: string;
  name: string;
  oldPrice: number;
  discount?: number;
  images: string;
  shortDesc: string;
  fullDesc: string;
  stockQty: number;
  categoryId?: string;
}

export class Product implements Productable {
  constructor(
    public name: string,
    public oldPrice: number,
    public discount: number,
    public images: string,
    public shortDesc: string,
    public fullDesc: string,
    public stockQty: number,
    public categoryId: string,
  ) {}
}
