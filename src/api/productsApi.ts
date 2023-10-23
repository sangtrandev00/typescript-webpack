import { ParamInterface } from '../interface/Params';
import axiosClient from './axiosClient';
import { AxiosResponse } from 'axios';
const { adminToken: token } = localStorage;

// type pagination = {
//   _limit: number;
//   _page: number;
//   _totalRows: number;
// }

// type GetProductsResponse  = {
//   message: string;
//   pagination: pagination;
//   products: Productable[];
// }

class ProductsApi {
  // {_limit: 12}
  static getAll(params: ParamInterface): Promise<AxiosResponse<any, string>> {
    const url = '/admin/products';
    return axiosClient.get(url, {
      params,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }

  static getById(id: string) {
    const url = `/admin/products/${id}`;
    return axiosClient.get(url, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }

  static add(data: any) {
    const url = '/admin/product';
    return axiosClient.post(url, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static update(data: any, productId: string) {
    const url = '/admin/product/' + productId;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static delete(id: string) {
    const url = `/admin/products/${id}`;
    return axiosClient.delete(url, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }
}

export default ProductsApi;
