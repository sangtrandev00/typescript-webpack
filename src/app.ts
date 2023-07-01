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
import Helper from "./util/helper";
import Auth from "./pages/site/Auth";

export default class App {

    modalWrapperEl: HTMLDivElement;
    siteAppEl: HTMLDivElement;
    adminAppEl: HTMLDivElement;
    authUser: Auth;

    constructor() {

      this.siteAppEl = document.getElementById('app') ! as HTMLDivElement;
      this.adminAppEl = document.getElementById('admin-app') ! as HTMLDivElement;

      const url = new URL(location.href);
      const pathName = url.pathname;
    
      if(pathName.startsWith("/admin")) {
        this.initAdmin();
      }else {
        this.initSite();
      }

      initTE({ Modal, Ripple, Toast, Tab, Carousel, Sidenav, Collapse, Dropdown, Select, Input }, true);
     
      this.modalWrapperEl = document.getElementById('modal-wrapper') ! as HTMLDivElement;

      this.authUser = new Auth();
      this.authUser.login();
        // Start init 
        this.initCart();

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

          Helper.updateUICartNumber();

    }


    initSite() {
      this.adminAppEl.remove();

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


