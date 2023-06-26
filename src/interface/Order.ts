export enum OrderStatus {ALL="all", UNCONFIRMED = "Waiting to Confirm", CONFIRMED="confirmed", SHIPPING="shipping", SUCCESS="success", FAILED="failed"};

type UserInfo = {
    id?: string;
    email: string;
    fullName: string;
    phone: string;
    shippingAddress: string;
}

type Product = {
    prodId: string;
    qty: number;
    price: number;
    name: string;
    image: string;
    _id?: string;
}


export interface OrderInterface {

    _id?: string;
    shippingFree: number;
    vatFee?:number;
    paymentMethod?: string;
    status: OrderStatus;
    user: UserInfo;
    products: {items: Product[], totalPrice: number};
    createdAt?:string;
    updatedAt?:string;
}