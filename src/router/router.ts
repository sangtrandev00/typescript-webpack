import ErrorPage from "../pages/404";
import Detail from "../pages/site/Detail";
import Homepage from "../pages/site/Home";
import Login from "../pages/site/Auth/Login";
import Shop from "../pages/site/Shop";
import Signup from "../pages/site/Auth/Signup";
import Forgot from "../pages/site/Auth/Forgot";
import ShopCart from "../pages/site/ShopCart";
import Checkout from "../pages/site/Checkout";
import OrderCompleted from "../pages/site/OrderCompleted";
import ResetPass from "../pages/site/Auth/ResetPass";

export default class Router {

    constructor() {
        this.renderContent();
    }

    private renderContent() : void {
        const url = new URL(location.href);
        const path = url.pathname;
        // Main Component - Change content here
        switch (path) {
            case '/':
              // Render homepage content
              new Homepage();
              break;
            case '/shop':
              // Render shop page content
          
              new Shop();
              break;
            case '/detail':
              // Render detail page content
              new Detail();
              break;
            case '/cart':
              // Render detail page content
              new ShopCart();
              break;
            case '/checkout':
              // Render detail page content
              new Checkout();
              break;
            case '/order-completed':
              // Render detail page content
              new OrderCompleted();
              break;
            case '/login':
              // Render detail page content
              new Login();
              break;
            case '/signup':
              // Render detail page content
              new Signup();
              break;
            case '/forgot':
              // Render detail page content
              new Forgot();
              break;
            case '/reset-password':
              // Render detail page content
              new ResetPass();
              break;
            case '/reset-token':
              // Render detail page content
              new Signup();
              break;

            default:
              new ErrorPage();
          }

    }

}