import axiosClient from "./axiosClient";
const { adminToken: token } = localStorage;

console.log(token);
class UsersApi {
  static getAll() {
    const url = "/admin/users";
    return axiosClient.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  static getById(id: string) {
    const url = `/admin/users/${id}`;
    return axiosClient.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  static add(data: object) {
    const url = "/admin/user";
    return axiosClient.post(url, data, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static update(data: object, userId: string) {
    const url = "/admin/user/" + userId;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static delete(id: string) {
    const url = `/admin/users/${id}`;
    return axiosClient.delete(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
}

export default UsersApi;
