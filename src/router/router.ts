import ErrorPage from '../pages/404';
import Detail from '../pages/site/Detail';
import Homepage from '../pages/site/Home';
import Login from '../pages/site/Auth/Login';
import Shop from '../pages/site/Shop';
import Signup from '../pages/site/Auth/Signup';
import Forgot from '../pages/site/Auth/Forgot';
import ShopCart from '../pages/site/ShopCart';
import Checkout from '../pages/site/Checkout';
import OrderCompleted from '../pages/site/OrderCompleted';
import ResetPass from '../pages/site/Auth/ResetPass';
import Blog from '../pages/site/Blog';
import Contact from '../pages/site/Contact';
import About from '../pages/site/About';
import FAQ from '../pages/site/FAQ';
import NewsLetter from '../pages/site/NewsLetter';
import Testimonial from '../pages/site/Testimonial';
import Wishlist from '../pages/site/Wishlist';

export default class Router {
  constructor() {
    this.renderContent();
  }

  private renderContent(): void {
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
        new Detail();
        break;
      case '/cart':
        new ShopCart();
        break;
      case '/checkout':
        new Checkout();
        break;
      case '/order-completed':
        new OrderCompleted();
        break;
      case '/login':
        new Login();
        break;
      case '/signup':
        new Signup();
        break;
      case '/forgot':
        new Forgot();
        break;

      case '/reset':
        new ResetPass();
        break;
      case '/blogs':
        new Blog();
        break;
      case '/contact':
        new Contact();
        break;
      case '/about':
        new About();
        break;

      case '/faq':
        new FAQ();
        break;

      case '/newsletter':
        new NewsLetter();
        break;

      case '/testimonial':
        new Testimonial();
        break;

      case '/wishlist':
        new Wishlist();
        break;

      default:
        new ErrorPage();
    }
  }
}
