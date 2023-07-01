export interface CartItem {
    prodId: string;
    name?: string;
    image?: string;
    price?: number;
    qty: number;

}

export interface ICart {
    cartList: CartItem[],
    totalPrice?: number
}