import { CartItem as ICartItem } from "../interface/Cart";

export default class CartItem implements ICartItem {
  
    prodId: string;
    name?: string | undefined;
    image?: string | undefined;
    price?: number | undefined;
    qty: number;

    constructor(prodId: string, name: string, image: string, price: number) {
        this.prodId = prodId;
        this.name = name;
        this.image = image;
        this.price = price;
        this.qty = 1;
    }
}