import { CartItem, ICart } from "../interface/Cart";

export default class Cart implements ICart  {
    
    localCart: ICart;
    cartList: CartItem[] = [];
    totalPrice?: number | undefined;

    constructor(
        ) { 
        this.localCart = JSON.parse(localStorage.getItem('cart') || '[]');
    }

   addToCart() {

   }

   deleteCart(id: string) {
    console.log(id);
   }

   updateCart(id: string, qty: number) {

    console.log(id, qty);

   }

   get list() {
    return this.cartList;
   }

}
  

// Haven't used this modal yet. Not customize code, refactor code.