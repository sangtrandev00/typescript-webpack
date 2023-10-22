// import { BACKEND_URL } from "../../constant/backend-domain";

import Router from '../../router/router';
import { BACKEND_URL } from '../../constant/backend-domain';
import { autobind } from '../../decorators/autobind';
import Component from '../base-component';

// import { CustomComponent } from "../../decorators/component";

const templateHTML = `
<header class="text-gray-600 body-font relative z-10  mt-14  bg-primary-color xl:px-20 mx-auto -ms-20 -me-20">
    <div class="md:container mx-auto flex flex-wrap flex-col md:flex-row items-center text-white justify-around max-[700px]:py-4 md:py-2 w-fit max-[1024px]:px-4 px-2">
        <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 py-2">
            <img src="${BACKEND_URL}/images/tech-main-logo-bright.png" alt="" class="w-20 h-20 rounded-full">
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
            <a href="/shop"
                class=" xl:mr-5 max-[667px]:mx-4 hover:text-gray-900 cursor-pointer bg-gray-100/50 px-4 py-2 rounded-[2px] md:w-[8rem] flex justify-between items-center max-[700px]:my-2 md:mx-2 max-[668px]:w-[10rem] ">Shop
                <i class="fa-solid fa-store"></i></a>
            <a href="./blogs"
                class=" xl:mr-5 max-[667px]:mx-4 hover:text-gray-900 cursor-pointer bg-gray-100/50 px-4 py-2 rounded-[2px] md:w-[8rem] flex justify-between items-center max-[700px]:my-2 md:mx-2 max-[668px]:w-[10rem]">Blog
                <i class="fa-brands fa-blogger-b"></i></a>
            <a href="/contact"
                class=" xl:mr-5 max-[667px]:mx-4 hover:text-gray-900 cursor-pointer bg-gray-100/50 px-4 py-2 rounded-[2px] md:w-[8rem] flex justify-between items-center max-[700px]:my-2 md:mx-2 max-[668px]:w-[10rem]">Contact
                <i class="fa-solid fa-address-book"></i></a>
            <a href="/about"
                class=" xl:mr-5 max-[667px]:mx-4 hover:text-gray-900 cursor-pointer bg-gray-100/50 px-4 py-2 rounded-[2px] md:w-[8rem] flex justify-between items-center max-[700px]:my-2 md:mx-2 max-[668px]:w-[10rem]">About
                <i class="fa-solid fa-address-card"></i></a>
        </nav>

        <form id="searchGlobalForm" class="flex items-center md:me-10" action="./shop.html" method="GET">   
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" name="_q" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search" required>
            </div>
        </form>


        <a href="/login" id="loginHeaderBtn"
            class="inline-flex items-center bg-gray-200/40 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 ">Login
            <i class="fa-regular fa-user ms-2"></i>
        </a>
    </div>
</header>

`;
export default class Header extends Component<HTMLDivElement> {
  searchGlobalFormEl: HTMLFormElement;

  constructor() {
    super('header');

    this.hostEl.innerHTML = templateHTML;

    this.searchGlobalFormEl = document.getElementById('searchGlobalForm') as HTMLFormElement;

    this.attach();
  }

  render(): void {}

  attach() {
    this.hostEl.addEventListener('click', this.navigateHandler);
    this.searchGlobalFormEl.addEventListener('submit', this.search);
  }

  @autobind
  navigateHandler(e: Event) {
    e.preventDefault();

    const target = e.target as HTMLElement;

    if (
      (target && target.nodeName === 'A') ||
      target.nodeName === 'I' ||
      target.nodeName === 'IMG'
    ) {
      const linkTargetEl = target.closest('a[href]')!;
      const route = linkTargetEl.getAttribute('href');

      history.pushState(null, '', route);

      new Router();
    }
  }

  @autobind
  search(e: Event) {
    e.preventDefault();

    const formEl = e.target as HTMLFormElement;
    const searchInput = (formEl.elements as unknown as { [key: string]: HTMLInputElement })['_q'];
    const queryValue = searchInput.value;
    // Helper.setParams('shop?_q', `${queryValue}`);
    history.pushState(null, '', `/shop?_q=${queryValue}`);
    new Router();
    searchInput.value = '';
  }
}
