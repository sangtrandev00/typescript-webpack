import axiosClient from "./axiosClient";

class AuthApi {
  static login(data: any) {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  }

  // Data: {token: fjskldfjlksdfjkdlsfjd};
  static googleLogin(data: any) {
    const url = "/auth/google-login";
    return axiosClient.post(url, data);
  }

  static facebookLogin(data: any) {
    const url = "/auth/facebook-login";
    return axiosClient.post(url, data);
  }

  static googleLogout() {}

  static adminLogin(data: any) {
    const url = "/auth/admin-login";
    return axiosClient.post(url, data);
  }

  static signup(data: any) {
    const url = "/auth/signup";
    return axiosClient.put(url, data);
  }

  static checkExisingUser(data: any) {
    const url = "/auth/exisiting-email";
    return axiosClient.post(url, data);
  }

  static checkExistedFbAccount(data: any) {
    const url = "/auth/exisiting-fb";
    return axiosClient.post(url, data);
  }

  static sendEmailReset(data: any) {
    const url = "/auth/reset";
    return axiosClient.post(url, data);
  }

  static updatePassword(data: any) {
    const url = "/auth/new-password";
    return axiosClient.post(url, data);
  }
}

export default AuthApi;
