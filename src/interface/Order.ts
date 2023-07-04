import { CartItem } from "./Cart";

export enum OrderStatus {ALL="all", UNCONFIRMED = "Waiting to Confirm", CONFIRMED="confirmed", SHIPPING="shipping", SUCCESS="success", FAILED="failed"};

export const orderStatusMap: Record<string, OrderStatus> = {
    all: OrderStatus.ALL,
    "Waiting to Confirm": OrderStatus.UNCONFIRMED,
    confirmed: OrderStatus.CONFIRMED,
    shipping: OrderStatus.SHIPPING,
    success: OrderStatus.SUCCESS,
    failed: OrderStatus.FAILED
};


type UserInfo = {
    id?: string;
    email: string;
    fullName: string;
    phone: string;
    shippingAddress: string;
}

// type Product = {
//     prodId: string;
//     qty: number;
//     price: number;
//     name: string;
//     image: string;
//     _id?: string;
// }

export interface OrderInterface {

    _id?: string;
    shippingFee?: number;
    vatFee?:number;
    paymentMethod?: string;
    status?: OrderStatus;
    user: UserInfo;
    products: {items: (CartItem | undefined)[], totalPrice: number};
    note?: string;
    createdAt?:string;
    updatedAt?:string;
}