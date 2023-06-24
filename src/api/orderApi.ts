import { OrderInterface } from "../interface/Order";
import { ParamInterface } from "../interface/Params";
import axiosClient from "./axiosClient";
const { adminToken: token } = localStorage;

class OrdersApi {
  static getAll(params: ParamInterface) {
    const url = "/admin/orders";
    return axiosClient.get(url, {
      params,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  static getById(orderId: string) {
    const url = `/admin/orders/${orderId}`;
    return axiosClient.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  static add(data: OrderInterface) {
    const url = "/admin/orders";
    return axiosClient.post(url, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  static update(data: OrderInterface, orderId: string) {
    const url = `/admin/orders/${orderId}`;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  static updateOrderStatus(data: OrderInterface, orderId: string) {
    const url = `/admin/orders/${orderId}`;
    return axiosClient.patch(url, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  static delete(orderId: string) {
    const url = `/admin/orders/${orderId}`;
    return axiosClient.delete(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
}

export default OrdersApi;
