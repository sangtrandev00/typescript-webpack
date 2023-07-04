import UsersApi from "../../../api/userApi";
import { BACKEND_URL } from "../../../constant/backend-domain";
import Helper from "../../../util/helper";

export default class AuthenticateAdmin {

    _adminId: string;
    _adminToken: string;

    constructor() {

        this._adminId = localStorage.getItem("adminId") as string;
        this._adminToken = localStorage.getItem("adminToken") as string;

       
    }

     authenticateAdmin(){
        (async() => {

          try {

            console.log("authenticate admin!!!", this._adminId);
            // if(!this._adminId) location.href = "./admin-login";
            
            const userResponse = await UsersApi.getById(this._adminId);

            console.log(userResponse);
    
              const { user: admin } = userResponse.data;
          
              const {  name, avatar, email, loginToken, loginTokenExpiration } = admin;
          
              const imageUrl = avatar.startsWith("https://") ? avatar : `${BACKEND_URL}/${avatar}`;
          
              const isCorrectToken = this._adminToken === loginToken;
    
              const isExpired = new Date(loginTokenExpiration).getTime() - Date.now() < 0;
          
              const isAuthenticated = this._adminToken && isCorrectToken && !isExpired;
          
                console.log("is authenticate admin", isAuthenticated);
    
              if (isAuthenticated) {
    
                Helper.textContent("adminName", `${name}`);
                Helper.textContent("adminEmail", `${email}`);
                Helper.imageContent("adminAvatar", imageUrl, name);
    
              } else {
                location.href = "/admin-login";
          
              }
            } catch (error) {
              console.log(error);
           
            }

        })()
      };

}