import Router from "../../router/router";
import Component from "../base-component";


const templateHTML = `
<nav class="before:flex-no-wrap fixed z-20 left-0 right-0 top-0 flex items-center justify-between bg-slate-300 text-white py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 xl:px-20 mx-auto"
data-te-navbar-ref>

<div class="flex w-full flex-wrap items-center justify-between px-3 container">
    <!-- Hamburger button for mobile view -->
    <button
        class="block border-0 bg-transparent px-2 text-neutral-800 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button" data-te-collapse-init data-te-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
        <!-- Hamburger icon -->
        <span class="[&>svg]:w-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="h-7 w-7">
                <path fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd" />
            </svg>
        </span>
    </button>

    <!-- Collapsible navigation container -->
    <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto justify-between"
        id="navbarSupportedContent1" data-te-collapse-item>

        <!-- Left navigation links -->
        <ul class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row w-full " data-te-navbar-nav-ref>
            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <!-- Dashboard link -->

                <a class="text-neutral-800 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                    href="phone:0937988510" data-te-nav-link-ref>Phone: 0937988510</a>
            </li>
            <!-- Team link -->

            <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <a class="text-neutral-800 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    href="#" data-te-nav-link-ref>Email: techspace@gmail.com</a>
            </li>
            <li>

                <a id="userName"  class="text-neutral-800 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#" data-te-nav-link-ref></a>
            </li>
        </ul>
    </div>

    <!-- Right elements -->
    <div class="relative flex items-center">
        <!-- Cart Icon -->
        <a id="viewCartBtn" class="relative mr-4 text-neutral-800 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="./view-cart.html">
            <span class="[&>svg]:w-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="h-5 w-5">
                    <path
                        d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
            </span>

            <span id="numberCartItems" class="absolute -top-4 -right-3 z-10 rounded-full text-red-700 font-medium bg-slate-100 w-6 h-6 text-center">
            12
            </span>

        </a>

        <!-- Container with two dropdown menus -->
        <div class="relative" data-te-dropdown-ref>
            <!-- First dropdown trigger -->
            <a class="hidden-arrow mr-4 flex items-center text-neutral-800 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="./wishlist.html">
                <i class="fa-regular fa-heart"></i>
            </a>
           
        </div>

        <!-- Second dropdown container -->
        <div class="relative" data-te-dropdown-ref>
            <!-- Second dropdown trigger -->
            <a id="userAuthenticate" class="hidden items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="#" role="button" data-te-dropdown-toggle-ref
                aria-expanded="false">
                <!-- User avatar -->
                <img id="userAvatar" src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg" class="rounded-full"
                    style="height: 25px; width: 25px" alt="" loading="lazy" />
            </a>
            <!-- Second dropdown menu -->
            <ul class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="userAuthenticate" data-te-dropdown-menu-ref>
                <!-- Second dropdown menu items -->
                <li>
                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                        href="#" data-te-dropdown-item-ref>Account</a>
                </li>
                <li>
                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                        href="#" data-te-dropdown-item-ref>History orders</a>
                </li>
                <li>
                    <a id="logoutBtn" class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                        href="./logout.html" data-te-dropdown-item-ref>Logout</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</nav>
`


export default class TopHeader extends Component<HTMLDivElement>  {
    viewCartBtnEl: HTMLLinkElement;
    constructor() {
        super('top-header');
        this.render();
        this.hostEl.innerHTML = templateHTML;
        this.viewCartBtnEl = document.getElementById("viewCartBtn") ! as HTMLLinkElement;
        this.attach();
    }

    render() {
        console.log("Top header rendered!");
    }

    attach() {
        this.hostEl.addEventListener('click', this.navigateHandler);
        this.viewCartBtnEl.addEventListener('click', this.viewCartHandler);
    }

    navigateHandler(e: Event) {
        e.preventDefault();
        console.log(e.target);
    }

    viewCartHandler(e: Event) {
        e.preventDefault();

        history.pushState({}, "", "./cart");
        new Router();
    }

}

