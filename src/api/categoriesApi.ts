// import { CategoryInterface } from "../interface/Category";
import axiosClient from "./axiosClient";
import {AxiosResponse} from 'axios';
const { adminToken: token } = localStorage;

// Read more about the blog
// type GetCategoryResponse = {
//     data: CategoryInterface
// }

// type CreateUserResponse = {
//     name: string;
//     job: string;
//     id: string;
//     createdAt: string;
// };
  
// type UpdateUserResponse = {
//     name: string;
//     job: string;
//     updatedAt: string;
// };

class CategoriesApi {
  static getAll(): Promise<AxiosResponse<any, any>> {
    const url = "/admin/categories";
    return axiosClient.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  static getById(id: string): Promise<AxiosResponse<any, any>> {
    const url = `/admin/categories/${id}`;
    return axiosClient.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  static add(data: any): Promise<AxiosResponse<any, any>> {
    const url = "/admin/category";
    return axiosClient.post(url, data, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static update(data: any, categoryId: string): Promise<AxiosResponse<any, any>> {
    const url = "/admin/category/" + categoryId;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static delete(id: string): Promise<AxiosResponse<any, any>> {
    const url = `/admin/categories/${id}`;
    return axiosClient.delete(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
}

export default CategoriesApi;
