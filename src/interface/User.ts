export interface UserInterface {
    _id?: string;
    name: string;
    avatar?: string;
    email: string;
    phone?: string;
    address?: string;
    password?: string;
    role?: string;
    payment?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?:number;
    resetToken?: string;
    resetTokenExpiration?:string;
    providerId: string;
}