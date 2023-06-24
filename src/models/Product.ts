// import axios from "axios";
// import ProductsApi from "../api/productsApi";
import ShopApi from "../api/shopApi";
import { Productable } from "../interface/Product";

export class Product implements Productable {

  constructor(
    public _id: string,
    public categoryId: string,
    public discount: number,
    public fullDesc: string,
    public images: string,
    public name: string,
    public oldPrice: number,
    public shortDesc: string,
    public stockQty: number,
    public thumbnail: string,
  ) {
  }

  async getAll() {
    const response = await ShopApi.getProducts({_limit: 12});
    console.log(response);
  
  }

}


