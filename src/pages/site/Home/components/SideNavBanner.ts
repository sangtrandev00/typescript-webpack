import CategoriesApi from '../../../../api/categoriesApi';
import Component from '../../../../components/base-component';
import { autobind } from '../../../../decorators/autobind';
import { CategoryInterface } from '../../../../interface/Category';
import Router from '../../../../router/router';

export default class SideNavBanner extends Component<HTMLDivElement> {
  navList?: string;

  constructor() {
    super('sidenavBanner');

    (async () => {
      this.navList = await this.listNavItem();
      this.hostEl.innerHTML = await this.component();
      this.attach();
    })();
  }

  attach() {
    this.hostEl.addEventListener('click', this.navigator);
  }

  @autobind
  navigator(e: Event) {
    e.preventDefault();
    const navItem = e.target as HTMLElement;
    const route = (navItem.closest('li') as HTMLLIElement).dataset.route;
    history.pushState(null, '', route);
    new Router();
  }

  async component() {
    return `
        <ul class="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
            ${this.navList}
        </ul>
        `;
  }

  async listNavItem() {
    const response = await CategoriesApi.getAll();
    const { categories } = response.data;

    const categoryHtmls = categories.map((cate: CategoryInterface) => {
      const { _id, name } = cate;
      return new NavItem(_id as string, name).component;
    });

    return categoryHtmls.join('');
  }
}

class NavItem {
  constructor(private _id: string, private _name: string) {}

  get component() {
    return `
            <li class="relative" data-route="/shop?_cateIds=${this._id}">
                    <a href="./shop.html"
                        class="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[1.1rem] text-impress-bold-color outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                        data-te-sidenav-link-ref>
                        
                        <i class="fa-solid fa-bars mr-4"></i>
                        
                        <span>${this._name}</span>
                        
                        <span
                            class="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
                            data-te-sidenav-rotate-icon-ref>
                        </span>
                    </a>
            </li>
        `;
  }
}
