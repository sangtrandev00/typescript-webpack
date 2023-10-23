// import ShopApi from "../../../api/shopApi";
import CategoriesApi from '../../../api/categoriesApi';
import ShopApi from '../../../api/shopApi';
import Component from '../../../components/base-component';
import { autobind } from '../../../decorators/autobind';
import { CategoryInterface } from '../../../interface/Category';
import { ParamInterface } from '../../../interface/Params';
import { Productable } from '../../../interface/Product';
import Helper from '../../../util/helper';
// import { BACKEND_URL } from "../../../constant/backend-domain";
// import { Productable } from "../../../interface/Product";
import Filter from './components/Filter';
import ProductCardList from './components/ProductList';
import Search from './components/Search';
import Sort from './components/Sort';

const FilterInstance = new Filter();
const SearchInstance = new Search();
const SortInstace = new Sort();

const templateHTML = `
    <div id="shop-content" class="shop-content flex mt-8 w-full">
    ${FilterInstance.render()}

    <!-- Flex 70% content shop-->
    <div class="shop-content__products-collection md:w-3/4 w-full">
        <!-- Search bar and sort-->

        <div class="flex p-4 justify-between">

            <div class="w-2/3">
                ${SearchInstance.render()}
            </div>

            <div class="relative w-1/3" data-te-dropdown-ref>
               ${SortInstace.render()}
            </div>
        </div>

        <div id="show-result-text" class="px-4 mb-3 hidden">
            <p><i class="fa-regular fa-lightbulb"></i> Kết quả tìm cho từ khóa: '<span id="keyword"
                    class="text-orange-500">Oppo</span>'</p>
        </div>

        <div class="flex px-4">
            <p class="me-10 hidden show-result-text__by-cate">Trong danh mục: <i class="fa-solid fa-check"></i>
                Oppo
                <i class="fa-solid fa-check"></i> Samsung
            </p>

            <p class="me-10 hidden show-result-text__by-sort">Lọc sản phẩm: <i
                    class="fa-solid fa-filter-circle-xmark"></i> Giá tăng dần</p>
            <p class="me-10 hidden show-result-text__by-range">Theo giá từ: $200 -> $1000</p>
        </div>

        <!-- Full product collections -->
        <div class="shop-content__products-display">
            <section class="text-gray-600 body-font">
                <div class="md:container px-5 pb-4 mt-4">
                    <div id="product-list" class="flex flex-wrap -m-4">
                        <!-- Single products!!! -->
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-full card-product">
                            <a href="detail-product.html"
                                class="group relative block overflow-hidden border pt-2 card-product__link shadow-lg">
                                <button
                                    class="card-product__wishlist absolute end-4 top-4 z-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                                    <span class="sr-only">Wishlist</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>

                                <div>
                                    <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-tab-a7-lite-gray-600x600.jpg"
                                        alt=""
                                        class="h-64 w-full transition duration-500 group-hover:scale-105 sm:h-72 xl:px-4 md:px-2" />

                                </div>
                                <div class="relative border border-gray-100 bg-white p-6">
                                    <span
                                        class="whitespace-nowrap bg-slate-300 px-3 py-1.5 text-xs font-medium">
                                        New
                                    </span>

                                    <h3 class="mt-4 card-product__title text-lg font-medium text-gray-900">
                                        Xiaomi
                                        Redmi Note 12 Pro 5G Redmi
                                    </h3>

                                    <div class="flex items-center">
                                        <p class="mt-1.5 text-xl text-red-500 ">$14.99</p>
                                        <p class="mt-1.5 text-sm text-gray-700 ms-2 line-through ">$14.99</p>
                                    </div>

                                    <!-- Rating here -->
                                    <ul class="flex justify-center mt-2">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="mr-1 h-5 w-5 text-warning">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="mr-1 h-5 w-5 text-warning">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </li>
                                    </ul>

                                    <form class="mt-4">
                                        <button
                                            class="block w-full rounded bg-slate-300 p-4 text-sm font-medium transition hover:scale-105">
                                            Add to Cart
                                        </button>
                                    </form>
                                </div>
                            </a>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a href="detail-product.html"
                                class="h-full group relative block overflow-hidden border pt-2">
                                <button
                                    class="absolute end-4 top-4 z-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                                    <span class="sr-only">Wishlist</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>

                                <div>
                                    <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/d/fdeen_1_.jpg"
                                        alt=""
                                        class="h-64 w-full transition duration-500 group-hover:scale-105 sm:h-72 xl:px-4 md:px-2" />

                                </div>
                                <div class="relative border border-gray-100 bg-white p-6">
                                    <span
                                        class="whitespace-nowrap bg-impress-color px-3 py-1.5 text-xs font-medium">
                                        New
                                    </span>

                                    <h3 class="mt-4 card-product__title text-lg font-medium text-gray-900">
                                        Samsung
                                        Galaxy A73 128GB

                                    </h3>

                                    <div class="flex items-center">
                                        <p class="mt-1.5 text-xl text-red-500 ">$14.99</p>
                                        <p class="mt-1.5 text-sm text-gray-700 ms-2 line-through ">$14.99</p>
                                    </div>

                                    <!-- Rating here -->
                                    <ul class="flex justify-center mt-2">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="mr-1 h-5 w-5 text-warning">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="mr-1 h-5 w-5 text-warning">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </li>
                                    </ul>

                                    <form class="mt-4">
                                        <button
                                            class="block w-full rounded bg-slate-300 p-4 text-sm font-medium transition hover:scale-105">
                                            Add to Cart
                                        </button>
                                    </form>
                                </div>
                            </a>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a href="detail-product.html"
                                class="group relative block overflow-hidden border pt-2">
                                <button
                                    class="absolute end-4 top-4 z-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                                    <span class="sr-only">Wishlist</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>

                                <div>
                                    <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/t/gtt7766.jpg"
                                        alt=""
                                        class="h-64 w-full transition duration-500 group-hover:scale-105 sm:h-72 xl:px-4 md:px-2" />

                                </div>
                                <div class="relative border border-gray-100 bg-white p-6">
                                    <span
                                        class="whitespace-nowrap bg-slate-300 px-3 py-1.5 text-xs font-medium">
                                        New
                                    </span>

                                    <h3 class="mt-4 card-product__title text-lg font-medium text-gray-900">
                                        iPhone 13
                                        128GB | Chính hãng VN/A
                                    </h3>

                                    <div class="flex items-center">
                                        <p class="mt-1.5 text-xl text-red-500 ">$14.99</p>
                                        <p class="mt-1.5 text-sm text-gray-700 ms-2 line-through ">$14.99</p>
                                    </div>

                                    <!-- Rating here -->
                                    <ul class="flex justify-center mt-2">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="mr-1 h-5 w-5 text-warning">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="mr-1 h-5 w-5 text-warning">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </li>
                                    </ul>

                                    <form class="mt-4">
                                        <button
                                            class="block w-full rounded bg-slate-300 p-4 text-sm font-medium transition hover:scale-105">
                                            Add to Cart
                                        </button>
                                    </form>
                                </div>
                            </a>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a href="detail-product.html"
                                class="group relative block overflow-hidden border pt-2">
                                <button
                                    class="absolute end-4 top-4 z-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                                    <span class="sr-only">Wishlist</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>

                                <div>
                                    <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-51_4.jpg"
                                        alt=""
                                        class="h-64 w-full transition duration-500 group-hover:scale-105 sm:h-72 xl:px-4 md:px-2" />

                                </div>
                                <div class="relative border border-gray-100 bg-white p-6">
                                    <span
                                        class="whitespace-nowrap bg-slate-300 px-3 py-1.5 text-xs font-medium">
                                        New
                                    </span>

                                    <h3 class="mt-4 card-product__title text-lg font-medium text-gray-900">ASUS
                                        ROG
                                        Phone 6 12GB 256GB
                                    </h3>

                                    <div class="flex items-center">
                                        <p class="mt-1.5 text-xl text-red-500 ">$14.99</p>
                                        <p class="mt-1.5 text-sm text-gray-700 ms-2 line-through ">$14.99</p>
                                    </div>

                                    <!-- Rating here -->
                                    <ul class="flex justify-center mt-2">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="mr-1 h-5 w-5 text-warning">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="mr-1 h-5 w-5 text-warning">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </li>
                                    </ul>

                                    <form class="mt-4">
                                        <button
                                            class="block w-full rounded bg-slate-300 p-4 text-sm font-medium transition hover:scale-105">
                                            Add to Cart
                                        </button>
                                    </form>
                                </div>
                            </a>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a href="detail-product.html"
                                class="group relative block overflow-hidden border pt-2">
                                <button
                                    class="absolute end-4 top-4 z-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                                    <span class="sr-only">Wishlist</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>

                                <div>
                                    <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/d/fdeen_1_.jpg"
                                        alt=""
                                        class="h-64 w-full transition duration-500 group-hover:scale-105 sm:h-72 xl:px-4 md:px-2" />

                                </div>
                                <div class="relative border border-gray-100 bg-white p-6">
                                    <span
                                        class="whitespace-nowrap bg-slate-300 px-3 py-1.5 text-xs font-medium">
                                        New
                                    </span>

                                    <h3 class="mt-4 card-product__title text-lg font-medium text-gray-900">
                                        Samsung
                                        Galaxy S22 Plus (8GB - 256GB)

                                    </h3>

                                    <div class="flex items-center">
                                        <p class="mt-1.5 text-xl text-red-500 ">$14.99</p>
                                        <p class="mt-1.5 text-sm text-gray-700 ms-2 line-through ">$14.99</p>
                                    </div>

                                    <!-- Rating here -->
                                    <ul class="flex justify-center mt-2">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="mr-1 h-5 w-5 text-warning">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="mr-1 h-5 w-5 text-warning">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </li>
                                    </ul>

                                    <form class="mt-4">
                                        <button
                                            class="block w-full rounded bg-slate-300 p-4 text-sm font-medium transition hover:scale-105">
                                            Add to Cart
                                        </button>
                                    </form>
                                </div>
                            </a>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a href="detail-product.html"
                                class="group relative block overflow-hidden border pt-2">
                                <button
                                    class="absolute end-4 top-4 z-4 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                                    <span class="sr-only">Wishlist</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>

                                <div>
                                    <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/t/gtt7766.jpg"
                                        alt=""
                                        class="h-64 w-full transition duration-500 group-hover:scale-105 sm:h-72 xl:px-4 md:px-2" />

                                </div>
                                <div class="relative border border-gray-100 bg-white p-6">
                                    <span
                                        class="whitespace-nowrap bg-slate-300 px-3 py-1.5 text-xs font-medium">
                                        New
                                    </span>

                                    <h3 class="mt-4 card-product__title text-lg font-medium text-gray-900">
                                        OnePlus
                                        11 16GB 256GB
                                    </h3>

                                    <div class="flex items-center">
                                        <p class="mt-1.5 text-xl text-red-500 ">$14.99</p>
                                        <p class="mt-1.5 text-sm text-gray-700 ms-2 line-through ">$14.99</p>
                                    </div>

                                    <!-- Rating here -->
                                    <ul class="flex justify-center mt-2">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor" class="mr-1 h-5 w-5 text-warning">
                                                <path fill-rule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="mr-1 h-5 w-5 text-warning">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="mr-1 h-5 w-5 text-warning">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        </li>
                                    </ul>

                                    <form class="mt-4">
                                        <button
                                            class="block w-full rounded bg-slate-300 p-4 text-sm font-medium transition hover:scale-105">
                                            Add to Cart
                                        </button>
                                    </form>
                                </div>
                            </a>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/421x261">
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                <p class="mt-1">$21.15</p>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/422x262">
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                <p class="mt-1">$12.00</p>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/423x263">
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p class="mt-1">$18.40</p>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/424x264">
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p class="mt-1">$16.00</p>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/425x265">
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                <p class="mt-1">$21.15</p>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/427x267">
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                <p class="mt-1">$12.00</p>
                            </div>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                    src="https://dummyimage.com/428x268">
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p class="mt-1">$18.40</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="pagination">

            </div>
        </div>

    </div>
    </div>
`;

export default class Shop extends Component<HTMLDivElement> {
  prodListEl: HTMLDivElement;
  cateListEl: HTMLDivElement;
  sortGlobalValue: string = '';
  pagination: HTMLDivElement;
  products: Productable[] = [];
  sortBarEl: HTMLDivElement;
  searchInputEl: HTMLInputElement;
  searchBtn: HTMLButtonElement;
  filterEl: HTMLDivElement;
  applyFilterBtn: HTMLButtonElement;
  prodListInstance?: ProductCardList;

  showResultByCateEl: HTMLParagraphElement;
  showResultByRangeEl: HTMLParagraphElement;
  showResultBySortEl: HTMLParagraphElement;
  showResultBySearchEl: HTMLParagraphElement;
  keywordQueryEl: HTMLSpanElement;

  constructor() {
    super('main');

    this.hostEl.innerHTML = templateHTML;
    this.sortBarEl = document.getElementById('sortBarEl') as HTMLDivElement;
    this.prodListEl = document.getElementById('product-list') as HTMLDivElement; // aldready been declare (remember to customize later!)
    this.pagination = document.getElementById('pagination') as HTMLDivElement;
    this.searchInputEl = document.getElementById('searchInput') as HTMLInputElement;
    this.searchBtn = document.getElementById('search-btn') as HTMLButtonElement;
    this.cateListEl = document.getElementById('cate-list') as HTMLDivElement;
    this.filterEl = document.getElementById('shop-content__filter-bar') as HTMLDivElement;
    this.applyFilterBtn = document.getElementById('apply-filter-btn') as HTMLButtonElement;
    this.showResultByCateEl = document.querySelector(
      '.show-result-text__by-cate',
    ) as HTMLParagraphElement;
    this.showResultByRangeEl = document.querySelector(
      '.show-result-text__by-range',
    ) as HTMLParagraphElement;
    this.showResultBySortEl = document.querySelector(
      '.show-result-text__by-sort',
    ) as HTMLParagraphElement;
    this.keywordQueryEl = document.getElementById('keyword') as HTMLSpanElement;
    this.showResultBySearchEl = document.getElementById('show-result-text') as HTMLDivElement;

    this.renderProdList();
    this.renderCateList();
    this.attach();
  }

  attach() {
    this.pagination.addEventListener('click', this.paginationHandler);
    this.sortBarEl.addEventListener('click', this.sortHandler);
    this.searchBtn.addEventListener('click', this.searchHandler);
    this.cateListEl.addEventListener('click', this.cateFilterHandler);
    this.applyFilterBtn.addEventListener('click', this.priceFilterHanlder);
  }

  @autobind
  sortHandler(e: Event) {
    const sortBtn = e.target as HTMLLinkElement;

    console.log('sortBtn', sortBtn);

    if (sortBtn && sortBtn.nodeName === 'A') {
      const sortVal = sortBtn.dataset.sort;
      switch (sortVal) {
        case 'pricedesc':
          Helper.setParams('_sort', 'oldPrice');
          Helper.setParams('_order', 'desc');
          this.sortGlobalValue = 'Price descrease';
          break;

        case 'priceasc':
          Helper.setParams('_sort', 'oldPrice');
          Helper.setParams('_order', 'asc');

          this.sortGlobalValue = 'Price ascending';

          break;
        case 'oldest':
          Helper.setParams('_sort', 'createdAt');
          Helper.setParams('_order', 'asc');
          this.sortGlobalValue = 'Oldest products';
          break;
        case 'latest':
          Helper.setParams('_sort', 'createdAt');
          Helper.setParams('_order', 'desc');

          this.sortGlobalValue = 'Latest products';

          break;

        default:
          break;
      }

      console.log(this.sortGlobalValue);

      // Generate Product list here!!!

      this.renderProdList();
    }
  }

  @autobind
  searchHandler() {
    this.searchInputEl = document.getElementById('searchInput') as HTMLInputElement;
    console.log('click search', this.searchInputEl.value);
    const searchVal = this.searchInputEl.value;

    Helper.setParams('_q', searchVal);

    // Update UI and pagination
    // await renderProdList();
    // Reset Input:

    this.searchInputEl.value = '';
    this.renderProdList();
  }

  @autobind
  priceFilterHanlder() {
    const priceFromEl = document.getElementById('price-from') as HTMLInputElement;
    const priceToEl = document.getElementById('price-to') as HTMLInputElement;
    const _min = priceFromEl.value;
    const _max = priceToEl.value;

    Helper.setParams('_min', _min);
    Helper.setParams('_max', _max);

    this.renderProdList();
  }
  @autobind
  paginationHandler(e: Event) {
    console.log(e.target);

    e.preventDefault();

    console.log('paginationHandler');

    const paginationBtn = e.target as HTMLLinkElement | HTMLLIElement;

    const page = paginationBtn.getAttribute('href');

    if (page) {
      const pageNum = page.slice(-1);
      Helper.setParams('_page', pageNum);

      this.renderProdList();
    }
  }

  renderProdList() {
    (async () => {
      const _q = Helper.getParams('_q');
      const _limit = +(Helper.getParams('_limit') || 12);
      const _page = +(Helper.getParams('_page') || 1);
      const _sort = Helper.getParams('_sort');
      const _order = Helper.getParams('_order');
      const _min = Helper.getParams('_min');
      const _max = Helper.getParams('_max');
      const _cateIds = Helper.getParams('_cateIds');

      // const showResultTextEl = document.getElementById("show-result-text");
      // const keyword = document.getElementById("keyword");

      try {
        const query: ParamInterface = {
          _limit,
          _page,
        };

        if (_sort && _order) {
          query._sort = _sort;
          query._order = _order;

          const sort = Helper.getParams('_sort');
          const order = Helper.getParams('_order');

          let sortValueText = '';

          if (sort === 'createdAt') {
            if (order === 'asc') {
              sortValueText = 'Oldest products';
            } else if (order === 'desc') {
              sortValueText = 'Latest products';
            }
          } else if (sort === 'oldPrice') {
            if (order === 'asc') {
              sortValueText = 'Price ascending';
            } else if (order === 'desc') {
              sortValueText = 'Price descending';
            }
          }

          this.showBySort(this.showResultBySortEl, sortValueText);
        }

        if (_q) {
          query._q = _q;
          this.showResultBySearchEl.classList.remove('hidden');
          this.keywordQueryEl.innerText = _q;
        } else {
          this.keywordQueryEl.innerText = '';
        }

        if (_min) {
          query._min = +_min;

          // this.showByRange(this.showResultByRangeEl, +_min, +_max || 0);
        }

        if (_max) {
          query._max = +_max;

          // this.showByRange(this.showResultByRangeEl, _min || 0, +_max);
        }

        if (_cateIds) {
          query._cateIds = _cateIds;

          this.showByCate(this.showResultByCateEl, _cateIds);
        } else {
          // Reset show cate
          this.showResultByCateEl.innerHTML = '';
        }

        console.log('query: ', query);
        this.prodListInstance = new ProductCardList(query);
        this.prodListInstance.load();

        console.log(this.sortGlobalValue);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  renderCateList() {
    (async () => {
      try {
        const response = await CategoriesApi.getAll();

        const { categories } = response.data;

        const viewAllEl = ` 
            <a href="#"
                class="flex items-center text-sm font-medium text-primary-color dark:text-secondary-color hover:underline">
                View all
             </a>`;

        categories.forEach((cate: CategoryInterface) => {
          const { _id, name } = cate;

          const cateItem = `
              <div data-id=${_id} class="flex items-center cate-item">
                <input id="${_id}" type="checkbox" value=""
                    class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:bg-slate-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          
                <label for="${_id}" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                   ${name}
                </label>
              </div>
            `;

          this.cateListEl.insertAdjacentHTML('beforeend', cateItem);
        });

        this.cateListEl.insertAdjacentHTML('beforeend', viewAllEl);

        // Render range [minvalue - maxvalue];

        const resMinPrice = await ShopApi.getMinPrice();

        const resMaxPrice = await ShopApi.getMaxPrice();

        const {
          result: [{ minFieldValue }],
        } = resMinPrice.data;

        const {
          result: [{ maxFieldValue }],
        } = resMaxPrice.data;

        Helper.inputValue('price-from', minFieldValue);
        Helper.inputValue('price-to', maxFieldValue);

        // console.log(minFieldValue);
        // console.log(maxFieldValue);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  @autobind
  cateFilterHandler(e: Event) {
    const checkBoxInput = e.target as HTMLInputElement;

    if (checkBoxInput && checkBoxInput.nodeName === 'INPUT') {
      const isChecked = checkBoxInput.checked;

      const cateId = checkBoxInput.id;

      const cateIds = Helper.getParams('_cateIds')?.split(',');

      console.log(cateIds);

      let cateIdsQuery;

      if (cateIds && cateIds.length > 0) {
        if (!isChecked) {
          cateIdsQuery = (Helper.getParams('_cateIds') as string)
            .split(',')
            .filter(ci => ci !== cateId);
        } else {
          cateIdsQuery = [...(Helper.getParams('_cateIds') as string).split(','), cateId].join(',');
        }

        Helper.setParams('_cateIds', cateIdsQuery as string);
      } else {
        Helper.setParams('_cateIds', cateId);
        cateIdsQuery = cateId;
      }

      // Render products here
      this.renderProdList();
    }
  }

  showByRange(resultEl: HTMLDivElement, _min: number = 0, _max: number = 1140) {
    resultEl.innerHTML = `Theo giá từ: $${_min} -> $${_max}`;
    resultEl.classList.remove('hidden');
  }

  showByCate = async (resultEl: HTMLDivElement, _cateIds: string) => {
    // <i class="fa-solid fa-check"></i> Oppo <i class="fa-solid fa-check"></i> Samsung

    // How to get cateName ?

    const cateIdList = _cateIds.split(',');
    const showResult = cateIdList.map(async (cateId: string) => {
      const shopResponse = await ShopApi.getCategoryById(cateId);

      const { category } = shopResponse.data;

      let cateName = '';

      if (category) {
        cateName = category.name;
      }

      return `
          <i class="fa-solid fa-check"></i> ${cateName}
          `;
    });

    resultEl.innerHTML = `
        Trong danh mục: ${(await Promise.all(showResult)).join(', ')}
        `;
    resultEl.classList.remove('hidden');
  };

  showBySort(resultEl: HTMLDivElement, sortValue: string) {
    resultEl.innerHTML = `
        Filter Products: <i class="fa-solid fa-filter-circle-xmark"></i> ${sortValue}
        `;
    resultEl.classList.remove('hidden');
  }
}
