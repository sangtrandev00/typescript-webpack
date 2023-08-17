import axiosClient from './axiosClient';
const { token } = localStorage;
import { ParamInterface } from '../interface/Params';
import { OrderInterface } from '../interface/Order';
import { Productable } from '../interface/Product';

type pagination = {
  _limit: number;
  _page: number;
  _totalRows: number;
};

type GetProductsResponse = {
  message: string;
  pagination: pagination;
  products: Productable[];
};

class ShopApi {
  static getCategories(params: ParamInterface) {
    const url = '/categories';
    return axiosClient.get(url, { params });
  }

  static getCategoryById(id: string) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  }

  static getProductById(id: string) {
    const url = '/products/' + id;
    return axiosClient.get(url);
  }

  static getMinPrice() {
    const url = '/product-min-price';
    return axiosClient.get(url);
  }
  static getMaxPrice() {
    const url = '/product-max-price';
    return axiosClient.get(url);
  }

  static getOrderById(id: string) {
    const url = `/orders/${id}`;
    return axiosClient.get(url);
  }

  static getProducts(params: ParamInterface) {
    const url = '/products';
    return axiosClient.get<GetProductsResponse>(url, { params });
  }

  // When create order
  static createOrder(data: OrderInterface) {
    const url = '/order';
    return axiosClient.post(url, data);
  }

  static getUserById(userId: string) {
    const url = `/users/${userId}`;
    return axiosClient.get(url, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }

  static updateViews(id: string) {
    const url = `/products/${id}`;
    return axiosClient.patch(url);
  }
}

export default ShopApi;
