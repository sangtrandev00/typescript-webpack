import UsersApi from "../../../api/userApi";
import { BACKEND_URL } from "../../../constant/backend-domain";
import Router from "../../../router/router";
import Helper from "../../../util/helper";

export default class Auth {
  _token: string | null;
  _adminToken: string | null;
  _adminId: string | null;
  _userId: string | null;
  loginHeaderBtnEl: HTMLAnchorElement;
  userAuthenticateEl: HTMLAnchorElement;

    constructor() {
      this._token = localStorage.getItem("token");
      this._adminToken = localStorage.getItem("adminToken");
      this._userId = localStorage.getItem("userId");
      this._adminId = localStorage.getItem("adminId");

      this.loginHeaderBtnEl = document.getElementById('loginHeaderBtn') ! as HTMLAnchorElement;
      this.userAuthenticateEl = document.getElementById('userAuthenticate') ! as HTMLAnchorElement;
    }

    checkAuthenticate(){
        (async() => {
    
            try {

              const userId = localStorage.getItem("userId");

              console.log("userId: ", userId);
              if (!userId) return;
            
              const response = await UsersApi.getById(userId);
    
              console.log(response.data);

              const { user } = response.data;
          
              const { name, avatar } = user;
              const avatarUrl = avatar.startsWith("https://") ? avatar : `${BACKEND_URL}/${avatar}`;
              // console.log(userAuthenticate.classList);
              // userAuthenticate.classList.remove("hidden");
              // userAuthenticate.classList.add("flex");
          
              Helper.textContent("userName", `Welcome: ${name}`);
              Helper.imageContent("userAvatar", avatarUrl, name);
            } catch (error) {
              console.log(error);
          
              // Handle error here.
            }
    
        })()
      
      };

    initUserAuth() {

        (async () => {

            if (this._token) {
                const response = await UsersApi.getById(this._userId || "");
                const { user } = response.data;

              if(!user) return;
                
                const isCorrectedToken = this._token === user.loginToken;
                const isExpired = new Date(user.loginTokenExpiration).getTime() - Date.now() < 0;
            
                const isAuthenticated = this._token && isCorrectedToken && !isExpired;
            
                if (isAuthenticated) {
                  this.userAuthenticateEl.classList.remove("hidden");
                  this.loginHeaderBtnEl.classList.add("hidden");
                }

              }

        })()
        
    }

    login() {
      this.checkAuthenticate();
      this.initUserAuth();
    }

    
    logout() {
      localStorage.removeItem("expiryDate");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      
      this.userAuthenticateEl.classList.add("hidden");
      this.loginHeaderBtnEl.classList.remove("hidden");

      history.pushState(null, "", "/login");

      new Router();
    }

}