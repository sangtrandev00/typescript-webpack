

export interface CartItem {
    prodId: string;
    name?: string;
    image?: string;
    price?: number;
    qty: number;

}

export interface Cart {
    cartList: CartItem[],
    totalPrice: number
}