import Header from "./components/layout/Header";
import { autobind } from "./decorators/autobind";
import { Detail } from "./pages/site/Detail";
import { Homepage } from "./pages/site/Homepage";
import { Shop } from "./pages/site/Shop";
import { Router } from "./router/router";

export class App {

    constructor() {

        this.createBrowserRouter();
        new Header();
        this.renderContent();
        this.configure();
        window.onpopstate = () => this.renderContent();
        // header.configure();

    }


    private createBrowserRouter() {

        const router = new Router();
    
        router.addRoute('/', Homepage);
        router.addRoute('/shop', Shop);
        router.addRoute('/detail', Detail);
        console.log(router.getAllRoutes);

    }

    private renderContent() : void {
        const url = new URL(location.href);
        const path = url.pathname;
        // Main Component - Change content here
        switch (path) {
            case '/':
              // Render homepage content
              const homepage = new Homepage();
              homepage.render();
              break;
            case '/shop':
              // Render shop page content
              const shop = new Shop();
              shop.render();
              break;
            case '/detail':
              // Render detail page content
              const detail = new Detail();
              detail.render();
              break;
            default:
              console.error('Route not found');
          }

        // Footer Component
        // new Footer();
    }

    @autobind
    private navigateHandler(event: Event): void {
      event.preventDefault();
    
      const linkEl = event.target! as HTMLLinkElement;

      if(linkEl.tagName === 'A') {

        const route = linkEl.getAttribute('href');
    
        history.pushState(null, '', route);
    
        // Add listener here!!!
        
        this.renderContent()
      }

    }
    
    // Function to attach event listener
    private configure(): void {
        const headerNavEl = document.querySelector(".header__navigation") ! as HTMLUListElement;
        if(headerNavEl) {
          headerNavEl.addEventListener('click', this.navigateHandler);
        }
      }


    // private renderHomePage() {
    //   const homepage = new Homepage();
    //    homepage.render();
    // }
    
    // private renderShop() {
    //   const shop = new Shop();
    //   shop.render();
    // }

    // private renderDetail() {
    //   const detail = new Detail();
    //   detail.render();
    // }

}

new App();