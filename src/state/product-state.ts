import ProductsApi from '../api/productsApi';
import { Product } from '../models/Product';

type Listener<T> = (items: T[]) => void;
 class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listener: Listener<T>) {
    this.listeners.push(listener);
  }
}
 export class ProductState extends State<Product>{
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

   addProduct(
    name: string,
    oldPrice: number,
    discount: number,
    images: string,
    shortDesc: string,
    fullDesc: string,
    stockQty: number,
    categoryId: string,
  ) {

    (async() => {

        const thumbnail = "https://placehold.co/100x100"; // Define logic here later!

        const productData = {
            name,
            oldPrice,
            discount,
            images,
            shortDesc,
            fullDesc,
            stockQty,
            categoryId,
        };
        const response = await ProductsApi.add(productData);

        const {product} = response.data; 

        const newProduct = new Product(
            product._id,
            categoryId,
            discount,
            fullDesc,
            images,
            name,
            oldPrice,
            shortDesc,
            stockQty,
            thumbnail,
          );

          this.products.push(newProduct);
          this.updateListeners();

    })()

 
  }

    updateProduct() {

  }

    deleteProduct() {
    
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.products.slice());
    }

    console.log(this.listeners);

  }
}

export default ProductState.getInstance();