import { Product } from '../models/Product';
import { State } from './root-state';

export class ProductState extends State<Product> {
  private products: Product[] = [];
  private static instance: ProductState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProductState();
    return this.instance;
  }

  async addProduct(
    name: string,
    oldPrice: number,
    discount: number,
    images: string,
    shortDesc: string,
    fullDesc: string,
    stockQty: number,
    categoryId: string,
  ) {
    const newProduct = new Product(
      name,
      oldPrice,
      discount,
      images,
      shortDesc,
      fullDesc,
      stockQty,
      categoryId,
    );

    // Call API here
    // const {product, message} = await fetch(`https://api.digitalocean.com/product`, {
    //     method: 'POST',
    //     body: JSON.stringify(newProduct)
    // })

    this.products.push(newProduct);
    this.updateListeners();
  }

  async updateProduct() {

  }

  async deleteProduct() {
    
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.products.slice());
    }
  }
}
