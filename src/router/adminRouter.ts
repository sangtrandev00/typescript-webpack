import AdminLogin from "../pages/admin/Auth/Login";
import Categories from "../pages/admin/Categories";
import Dashboard from "../pages/admin/Dashboard";
import Orders from "../pages/admin/Orders";
import Products from "../pages/admin/Products";
import Users from "../pages/admin/Users";

export default class AdminRouter {

    constructor() {

        this.renderContent();
    }

    private renderContent() : void {
     

        const url = new URL(location.href);
        const path = url.pathname;
        // Main Component - Change content here

        switch (path) {
            case '/admin':
              // Render homepage content
              new Dashboard();
              break;
            case '/admin-login':
              // Render homepage content
              new AdminLogin();
              break;
            case '/admin-categories':
              // Render homepage content
              new Categories();
              break;
            case '/admin-products':
              // Render homepage content
              new Products();
              break;
            case '/admin-users':
              // Render homepage content
              new Users();
              break;
            case '/admin-orders':
              // Render homepage content
              new Orders();
              break;

            default:
            console.log("PAGE NOT FOUND!");
              // Render 404 page content

          }

    }


}