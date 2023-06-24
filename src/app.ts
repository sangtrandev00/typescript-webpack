import "flowbite";

import { initTE, Modal, Ripple, Toast, Tab, Carousel, Sidenav, Collapse, Dropdown,Select, Input } from "tw-elements";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import TopHeader  from "./components/layout/TopHeader";
import Router from "./router/router";
import AdminHeader from "./components/layout/AdminHeader";
import AdminSidebar from "./components/layout/AdminSideBar";
import AdminRouter from "./router/adminRouter";
import AdminModal from "./components/AdminModal";

export default class App {

    modalWrapperEl: HTMLDivElement;
    loginHeaderBtnEl: HTMLLinkElement;
    userAuthenticateEl: HTMLDivElement;
    siteAppEl: HTMLDivElement;
    adminAppEl: HTMLDivElement;
    _token: string | null;
    _userId: string | null;
    constructor() {

      this.siteAppEl = document.getElementById('app') ! as HTMLDivElement;
      this.adminAppEl = document.getElementById('admin-app') ! as HTMLDivElement;
      this._token = localStorage.getItem("token");
      this._userId = localStorage.getItem("userId");
      this.modalWrapperEl = document.getElementById('modal-wrapper') ! as HTMLDivElement;
      this.loginHeaderBtnEl = document.getElementById('loginHeaderBtn') ! as HTMLLinkElement;
      this.userAuthenticateEl = document.getElementById('userAuthenticate') ! as HTMLDivElement;
      
      const url = new URL(location.href);
      const pathName = url.pathname;
      
      console.log(pathName);
      console.log(pathName.startsWith("/admin"));
      if(pathName.startsWith("/admin")) {
        this.initAdmin();
      }else {
        this.initSite();
      }
      initTE({ Modal, Ripple, Toast, Tab, Carousel, Sidenav, Collapse, Dropdown, Select, Input }, true);
   
    }


    // // Function to attach event listener
    initCart() {
        if (!localStorage.getItem("cart")) {
            const cart = {
              cartList: [],
              totalPrice: 0,
            };
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        
          if (!sessionStorage.getItem("views")) {
            const views = {
            };
            sessionStorage.setItem("views", JSON.stringify(views));
          }
    }

    // initAuth() {

    //     (async () => {

    //         if (this._token) {
    //             const response = await ShopApi.getUserById(this._userId || "");
    //             const { user } = response.data;

    //           if(!user) return;
                
    //             const isCorrectedToken = this._token === user.loginToken;
    //             const isExpired = new Date(user.loginTokenExpiration).getTime() - Date.now() < 0;
            
    //             const isAuthenticated = this._token && isCorrectedToken && !isExpired;
            
    //             if (isAuthenticated) {
    //               this.userAuthenticateEl.classList.remove("hidden");
    //               this.loginHeaderBtnEl.classList.add("hidden");
    //             }

    //           }

    //     })()
        
    // }

    initSite() {
      this.adminAppEl.remove();

      this.initCart();
      // this.initAuth();
      new TopHeader();
      new Header();
      new Router(); // Router content here!!!
      new Footer();
      window.onpopstate = () => new Router();
    }

    initAdmin() {
      this.siteAppEl.remove();
      // Init adminHeader
      new AdminHeader();
      new AdminSidebar();
      new AdminRouter();
      new AdminModal();
      // Init adminSideBar
      // Init Admin content
     
    }


}

new App();


