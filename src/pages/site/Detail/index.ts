import ProductsApi from '../../../api/productsApi';
import Component from '../../../components/base-component';
import { BACKEND_URL } from '../../../constant/backend-domain';
import { autobind } from '../../../decorators/autobind';
import Helper from '../../../util/helper';

const templateHTML = `
    <div class="product-detail mt-8">

    <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
            <div class="grid items-start gap-8 md:grid-cols-2">
                <div class="grid grid-cols-2 gap-4 md:grid-cols-1 ">
                    <div class="flex justify-center p-8 border-2 border-slate-400">
                        <img id="thumbnail" alt="Les Paul"
                            src="https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-tab-a7-lite-gray-600x600.jpg"
                            class="aspect-square w-3/4 rounded-xl object-cover " />
                    </div>

                    <div class="lg:mt-4">
                        <!-- Container -->
                        <div class="swiper detail-product__thumb-carousels--swiper thumbSwiper">
                            <!-- Swiper wraper  -->
                            <div id="small-thumbnails"
                                class="swiper-wraper grid sm:grid-cols-3 md:grid-cols-4 gap-4">
                                <div class="swiper-slide cursor-pointer">
                                    <img alt="Les Paul"
                                        src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/a/tab_s8_ultra.jpg"
                                        class="aspect-square w-full rounded-xl object-cover" />
                                </div>
                                <div class="swiper-slide cursor-pointer">
                                    <img alt="Les Paul"
                                        src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/a/tab_s8_ultra.jpg"
                                        class="aspect-square w-full rounded-xl object-cover" />
                                </div>
                                <div class="swiper-slide cursor-pointer">
                                    <img alt="Les Paul"
                                        src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/a/tab_s8_ultra.jpg"
                                        class="aspect-square w-full rounded-xl object-cover" />
                                </div>
                                <div class="swiper-slide cursor-pointer">
                                    <img alt="Les Paul"
                                        src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/a/tab_s8_ultra.jpg"
                                        class="aspect-square w-full rounded-xl object-cover" />
                                </div>

                            </div>

                            <div class="swiper-pagination--small-thumbs"></div>

                            <!-- If we need navigation buttons -->
                            <div class="swiper-button-prev--small-thumbs"></div>
                            <div class="swiper-button-next--small-thumbs"></div>

                            <!-- If we need scrollbar -->
                            <div class="swiper-scrollbar--small-thumbs"></div>
                        </div>
                    </div>
                </div>

                <div class="sticky top-0">
                    <strong
                        class="rounded-full border border-slate-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-slate-600">
                        New Arrivals
                    </strong>

                    <div class="mt-8 flex justify-between">
                        <div class="max-w-[35ch] space-y-2">
                            <h1 id="product-title" class="text-xl font-boldd sm:text-2xl">
                                Samsung Galaxy S23 Ultra 256GB
                            </h1>
                            <p class="my-4 "><span class="font-semibold">Views: </span>
                                <span id="views">100</span>
                            </p>
                            <!-- <p class="text-sm">Highest Rated Product</p> -->

                            <div class="flex items-center">
                                <div class="-ms-0.5 flex cursor-pointer">
                                    <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>

                                    <svg class="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <div class="ms-10 text-gray-600 italic">(10 Rating)</div>
                            </div>
                        </div>

                        <p class="text-lg line-through" id="oldPrice">$119.99</p>
                        <p class="text-lg font-boldd text-red-500" id="newPrice">$120</p>
                    </div>

                    <div class="mt-4">
                        <div class="prose max-w-none">
                            <p id="shortDesc" class="ck-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                                veniam dicta beatae eos ex error culpa delectus rem tenetur,
                                architecto quam nesciunt, dolor veritatis nisi minus inventore,
                                rerum at recusandae?
                            </p>
                        </div>

                        <!-- <button class="mt-2 text-sm font-medium underline">Read More</button> -->
                    </div>

                    <form class="mt-8">
                        <fieldset>
                            <legend class="mb-1 text-sm font-medium">Quantity</legend>

                            <div class="flex flex-wrap gap-1 mt-3">
                                <div>
                                    <label for="Quantity" class="sr-only">Quantity: </label>

                                    <div id="productQuantityWrap" class="flex items-center gap-1">
                                        <button data-change="minus" type="button"
                                            class="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75">
                                            &minus;
                                        </button>

                                        <input type="number" id="Quantity" min="1" required value="1" name="qty"
                                            class="h-10 w-24 rounded border-gray-200 sm:text-sm" />

                                        <button data-change="plus" type="button"
                                            class="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75">
                                            &plus;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset class="mt-4">
                            <legend class="mb-1 text-sm font-medium">Stock:</legend>

                            <p class="mt-4 "><span id="stockQty">23 </span><span
                                    class="text-sm italic ms-4">(Available)</span></p>
                        </fieldset>

                        <div class="mt-8 flex gap-4">

                            <button id="addToCartBtn" type="submit"
                                class="block rounded bg-slate-600 px-5 py-3 text-xs font-medium text-white hover:bg-slate-500">
                                Add to Cart
                            </button>
                            <button type="submit">
                                <i class="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Product reviews, comments, descripton -->
    <!--Tabs navigation-->
    <ul class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0" role="tablist" data-te-nav-ref>
        <li role="presentation" class="flex-grow basis-0 text-center">
            <a href="#tabs-description"
                class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill" data-te-target="#tabs-description" data-te-nav-active role="tab"
                aria-controls="tabs-description" aria-selected="true">Description</a>
        </li>
        <li role="presentation" class="flex-grow basis-0 text-center">
            <a href="#tabs-information"
                class="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill" data-te-target="#tabs-information" role="tab"
                aria-controls="tabs-information" aria-selected="false">Information</a>
        </li>
        <li role="presentation" class="flex-grow basis-0 text-center">
            <a href="#tabs-comments"
                class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill" data-te-target="#tabs-comments" role="tab" aria-controls="tabs-comments"
                aria-selected="false">Comments</a>
        </li>
        <li role="presentation" class="flex-grow basis-0 text-center">
            <a href="#tabs-reviews"
                class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill" data-te-target="#tabs-reviews" role="tab" aria-controls="tabs-reviews"
                aria-selected="false">Reviews</a>
        </li>

    </ul>

    <!--Tabs content-->
    <div class="mb-6">
        <!-- Tab description -->
        <div class="ck-content hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block text-justify justify-center "
            id="tabs-description" role="tabpanel" aria-labelledby="tabs-home-tab02" data-te-tab-active>
            iPad Gen 9 (10.2 inch) 2021 - Hiệu năng đỉnh với mức giá sinh viên
            Sau sự thành công của chiếc iPad Gen 8 cùng với iPad Air 4, Apple lại tiếp tục rục rịch cho ra mắt
            thêm sản phẩm mới. Thiết bị mang tên iPad Gen 9, kế thừa đặc trưng của dòng nhưng được nâng cấp thêm
            về hiệu năng cũng như camera.

            Năm 2022, Apple vừa cho ra mắt sản phẩm iPad Gen 10 mà bạn không nên bỏ qua!

            Thiết kế mỏng nhẹ, màn hình kích thước 10.2 inches
            iPad 10.2 inch 2021 vẫn mang thiết kế đặc trưng bởi sự mỏng và nhẹ, giúp người dùng dễ thao tác, cầm
            nắm trong hàng giờ liền mà không hề cảm thấy bị mỏi hay khó chịu. Thiết kế nguyên khối đã là nét đặc
            trưng của dòng sản phẩm iPad giúp mang lại vẻ sang trọng khi sử dụng tên tay.
        </div>
        <!-- Tab Information -->
        <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block "
            id="tabs-information" role="tabpanel" aria-labelledby="tabs-profile-tab02">
            <section class="modal-card-body">
                <div class="modal-content">
                    <ul class="technical-content-modal grid grid-cols-4">
                        <li class="technical-content-modal-item m-3 border shadow">
                            <p class="title is-6 m-2 font-bold">RAM &amp; lưu trữ</p>
                            <div class="modal-item-description mx-2">
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Khe cắm thẻ nhớ</p>
                                    <div> MicroSD</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Dung lượng RAM</p>
                                    <div>6 GB</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Bộ nhớ trong</p>
                                    <div>128 GB</div>
                                </div>
                            </div>
                        </li>
                        <li class="technical-content-modal-item m-3 border shadow">
                            <p class="title is-6 m-2 font-bold">Màn hình</p>
                            <div class="modal-item-description mx-2">
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Kích thước màn hình</p>
                                    <div>6.67 inches</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Độ phân giải màn hình</p>
                                    <div>1080 x 2400 pixels (FullHD+)</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p><a target="_blank" rel="nofollow"
                                            href="https://cellphones.com.vn/sforum/man-hinh-dien-thoai">Công
                                            nghệ màn hình</a></p>
                                    <div><a href="https://cellphones.com.vn/sforum/man-hinh-dien-thoai"
                                            target="_blank" rel="nofollow">AMOLED</a></div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Tính năng màn hình</p>
                                    <div>AMOLED <br> Full HD+ (1080 x 2400 Pixels) <br> 1200 nits</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Kiểu màn hình</p>
                                    <div>Đục lỗ (Nốt ruồi)</div>
                                </div>
                            </div>
                        </li>
                        <li class="technical-content-modal-item m-3 border shadow">
                            <p class="title is-6 m-2 font-bold">Giao tiếp &amp; kết nối</p>
                            <div class="modal-item-description mx-2">
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Hệ điều hành</p>
                                    <div>MIUI 13, Android 11</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Wi-Fi</p>
                                    <div>Wi-Fi 802.11 a/b/g/n/ac</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Thẻ SIM</p>
                                    <div>2 SIM (Nano-SIM)</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Hồng ngoại</p>
                                    <div>Có</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Jack tai nghe 3.5</p>
                                    <div>Có</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Công nghệ NFC</p>
                                    <div>Có</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Hỗ trợ mạng</p>
                                    <div>5G</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>GPS</p>
                                    <div>GALILEO <br> GLONASS</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Bluetooth</p>
                                    <div>v5.1</div>
                                </div>
                            </div>
                        </li>
                        <li class="technical-content-modal-item m-3 border shadow">
                            <p class="title is-6 m-2 font-bold">Camera sau</p>
                            <div class="modal-item-description mx-2">
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Camera sau</p>
                                    <div>Chính 108 MP &amp; Phụ 8 MP, 2 MP</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Tính năng camera</p>
                                    <div>Góc rộng (Wide) <br> Góc siêu rộng (Ultrawide) <br> HDR <br> Lấy nét
                                        theo pha (PDAF) <br> Toàn cảnh (Panorama)</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Quay video</p>
                                    <div>1080p 1920x1080 | 30fps<br>720p 1280x720 | 30fps</div>
                                </div>
                            </div>
                        </li>
                        <li class="technical-content-modal-item m-3 border shadow">
                            <p class="title is-6 m-2 font-bold">Camera trước</p>
                            <div class="modal-item-description mx-2">
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Camera trước</p>
                                    <div>16 MP</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Quay video trước</p>
                                    <div>1080p 1920x1080 | 30fps<br>720p 1280x720 | 30fps</div>
                                </div>
                            </div>
                        </li>
                        <li class="technical-content-modal-item m-3 border shadow">
                            <p class="title is-6 m-2 font-bold">Thiết kế &amp; Trọng lượng</p>
                            <div class="modal-item-description mx-2">
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Chất liệu mặt lưng</p>
                                    <div>Kính</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Chất liệu khung viền</p>
                                    <div>Kim loại</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Kích thước</p>
                                    <div>164.2 x 76.1 x 8.1 mm (Dài x Ngang x Dày)</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Trọng lượng</p>
                                    <div>205 g</div>
                                </div>
                            </div>
                        </li>
                        <li class="technical-content-modal-item m-3 border shadow">
                            <p class="title is-6 m-2 font-bold">Pin &amp; công nghệ sạc</p>
                            <div class="modal-item-description mx-2">
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Công nghệ sạc</p>
                                    <div>Sạc pin nhanh</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Cổng sạc</p>
                                    <div>Micro-USB</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Pin</p>
                                    <div> Li-Po 5000 mAh</div>
                                </div>
                            </div>
                        </li>
                        <li class="technical-content-modal-item m-3 border shadow">
                            <p class="title is-6 m-2 font-bold">Thông số khác</p>
                            <div class="modal-item-description mx-2">
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Hệ thống làm mát</p>
                                    <div>Công nghệ tản nhiệt LiquidCool 1.0 Plus</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Công nghệ âm thanh</p>
                                    <div>Loa kép<br>Chứng nhận âm thanh độ phân giải cao</div>
                                </div>
                            </div>
                        </li>
                        <li class="technical-content-modal-item m-3 border shadow">
                            <p class="title is-6 m-2 font-bold">Tiện ích khác</p>
                            <div class="modal-item-description mx-2">
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Cảm biến vân tay</p>
                                    <div>Cảm biến vân tay cạnh bên</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Các loại cảm biến</p>
                                    <div>Cảm biến gia tốc, <a
                                            href="https://cellphones.com.vn/sforum/cam-bien-tiem-can-dien-thoai"
                                            target="_blank" rel="nofollow">Cảm biến tiệm cận</a>, Cảm biến ánh
                                        sáng, La bàn, Con quay hồi chuyển</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Tính năng đặc biệt</p>
                                    <div>Hỗ trợ 5G, Bảo mật vân tay, Kháng nước, kháng bụi</div>
                                </div>
                            </div>
                        </li>
                        <li class="technical-content-modal-item m-3 border shadow">
                            <p class="title is-6 m-2 font-bold">Thông tin chung</p>
                            <div class="modal-item-description mx-2">
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Thời điểm ra mắt</p>
                                    <div>09/2022</div>
                                </div>
                            </div>
                        </li>
                        <li class="technical-content-modal-item m-3 border shadow">
                            <p class="title is-6 m-2 font-bold">Vi xử lý &amp; đồ họa</p>
                            <div class="modal-item-description mx-2">
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Chipset</p>
                                    <div>Snapdragon 695 5G 8 nhân</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>Loại CPU</p>
                                    <div>2 nhân 2.2 GHz &amp; 6 nhân 1.7 GHz</div>
                                </div>
                                <div
                                    class="px-3 py-2 is-flex is-align-items-center is-justify-content-space-between">
                                    <p>GPU</p>
                                    <div>Adreno 619</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <!-- Tab Comments -->
        <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-comments" role="tabpanel" aria-labelledby="tabs-profile-tab02">

            <form>
                <div
                    class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 p-10 shadow">
                    <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label for="comment" class="sr-only">Your comment</label>
                        <textarea id="comment" rows="4"
                            class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                            placeholder="Write a comment..." required></textarea>
                    </div>
                    <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <button type="submit"
                            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Post comment
                        </button>
                        <div class="flex pl-0 space-x-1 sm:pl-2">
                            <button type="button"
                                class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Attach file</span>
                            </button>
                            <button type="button"
                                class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Set location</span>
                            </button>
                            <button type="button"
                                class="inline-flex justify-center p-2 text-slate-500 rounded cursor-pointer hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-600">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Upload image</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic
                should follow our <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Community
                    Guidelines</a>.</p>

        </div>
        <!-- Tab Reviews -->
        <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-reviews" role="tabpanel" aria-labelledby="tabs-contact-tab02">
            <section>
                <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <h2 class="text-xl font-boldd sm:text-2xl">Customer Reviews</h2>

                    <div class="mt-4 flex items-center gap-4">
                        <p class="text-3xl font-medium">
                            3.8
                            <span class="sr-only"> Average review score </span>
                        </p>

                        <div>
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-200"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>

                            <p class="mt-0.5 text-xs text-gray-500">Based on 48 reviews</p>
                        </div>
                    </div>

                    <div class="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
                        <blockquote>
                            <header class="sm:flex sm:items-center sm:gap-4">
                                <div class="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-200"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                                <p class="mt-2 font-medium sm:mt-0">The best thing money can buy!</p>
                            </header>

                            <p class="mt-2 text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                                possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
                                alias incidunt cum tempore aliquid aliquam error quisquam ipsam
                                asperiores! Iste?
                            </p>

                            <footer class="mt-4">
                                <p class="text-xs text-gray-500">John Doe - 12th January, 2024</p>
                            </footer>
                        </blockquote>

                        <blockquote>
                            <header class="sm:flex sm:items-center sm:gap-4">
                                <div class="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-200"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                                <p class="mt-2 font-medium sm:mt-0">The best thing money can buy!</p>
                            </header>

                            <p class="mt-2 text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                                possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
                                alias incidunt cum tempore aliquid aliquam error quisquam ipsam
                                asperiores! Iste?
                            </p>

                            <footer class="mt-4">
                                <p class="text-xs text-gray-500">John Doe - 12th January, 2024</p>
                            </footer>
                        </blockquote>

                        <blockquote>
                            <header class="sm:flex sm:items-center sm:gap-4">
                                <div class="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-200"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                                <p class="mt-2 font-medium sm:mt-0">The best thing money can buy!</p>
                            </header>

                            <p class="mt-2 text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                                possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
                                alias incidunt cum tempore aliquid aliquam error quisquam ipsam
                                asperiores! Iste?
                            </p>

                            <footer class="mt-4">
                                <p class="text-xs text-gray-500">John Doe - 12th January, 2024</p>
                            </footer>
                        </blockquote>

                        <blockquote>
                            <header class="sm:flex sm:items-center sm:gap-4">
                                <div class="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-200"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                                <p class="mt-2 font-medium sm:mt-0">The best thing money can buy!</p>
                            </header>

                            <p class="mt-2 text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                                possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
                                alias incidunt cum tempore aliquid aliquam error quisquam ipsam
                                asperiores! Iste?
                            </p>

                            <footer class="mt-4">
                                <p class="text-xs text-gray-500">John Doe - 12th January, 2024</p>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>
        </div>
    </div>

    </div>

`;
export default class Detail extends Component<HTMLDivElement> {
  _id: string = '';
  smallThumbsEle: HTMLElement;
  addCartBtn: HTMLButtonElement;
  qtyEl: HTMLInputElement;
  productQtyWrapEl: HTMLDivElement;

  constructor() {
    super('main');

    this.hostEl.innerHTML = templateHTML;
    this._id = Helper.getParams('id') as string;
    this.smallThumbsEle = document.getElementById('small-thumbnails') as HTMLDivElement;
    this.addCartBtn = document.getElementById('addToCartBtn')! as HTMLButtonElement;
    this.qtyEl = document.getElementById('Quantity')! as HTMLInputElement;
    this.productQtyWrapEl = document.getElementById('productQuantityWrap')! as HTMLDivElement;
    this.render();
    this.attach();

    this.hostEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render(): void {
    const asyncRender = async () => {
      const response = await ProductsApi.getById(this._id);

      const { product } = response.data;
      const { thumbnail, images, name, oldPrice, discount, shortDesc, fullDesc, stockQty, views } =
        product;
      const newPrice = oldPrice * (1 - discount / 100);

      let imageUrl;

      if (thumbnail) {
        imageUrl = thumbnail.startsWith('http') ? thumbnail : `${BACKEND_URL}/${thumbnail}`;
      } else {
        imageUrl = `https://placehold.co/358x358`;
      }

      Helper.textContent('product-title', name);
      Helper.textContent('oldPrice', `$${oldPrice}`);
      Helper.textContent('newPrice', `$${newPrice.toFixed(2)}`);
      Helper.textContent('stockQty', `${stockQty}`);
      Helper.innerHTML('shortDesc', `${shortDesc}`);
      Helper.innerHTML('tabs-description', `${fullDesc}`);

      Helper.textContent('views', views || 0);

      Helper.imageContent('thumbnail', `${imageUrl}`);

      this.smallThumbsEle.innerHTML = '';
      images.split(', ').forEach((image: string) => {
        const imageUrl = image.startsWith('http') ? image : `${BACKEND_URL}/${image}`;

        const smallThubHtml = `
              <div class="swiper-slide cursor-pointer">
                <img alt="Error image"
                    src="${imageUrl}"
                    class="aspect-square w-full rounded-xl object-cover" />
            </div>
          `;

        this.smallThumbsEle.insertAdjacentHTML('beforeend', smallThubHtml);
      });
    };
    asyncRender();
  }

  attach() {
    this.addCartBtn.addEventListener('click', this.addCartHandler);
    this.smallThumbsEle.addEventListener('click', this.triggerViewSmallThumbs);
    this.productQtyWrapEl.addEventListener('click', this.changeQtyHandler);
  }

  @autobind
  addCartHandler(e: Event) {
    e.preventDefault();

    const qtyValue = this.qtyEl.value;

    Helper.addToCart(this._id, +qtyValue);

    // // Trigger modal here
    // Helper.innerHTML(
    //   "modalIcon",
    //   `
    //       <i class="fa-solid fa-cart-plus text-xl text-sky-600"></i>
    //     `
    // );

    // Helper.innerHTML("modalTitle", `Add Product to cart successfully!`);

    // Helper.toggleModal("toggleModalBtn");
  }

  triggerViewSmallThumbs(e: Event) {
    const thumbEl = e.target as HTMLImageElement;
    if (thumbEl && thumbEl.nodeName === 'IMG') {
      const imgUrl = thumbEl.getAttribute('src');
      Helper.imageContent('thumbnail', imgUrl || '');
    }
  }

  @autobind
  changeQtyHandler(e: Event) {
    const btn = e.target as HTMLButtonElement;

    const currQty = +this.qtyEl.value;

    if (btn && btn.dataset.change === 'minus') {
      currQty <= 1 ? (this.qtyEl.value = '1') : (this.qtyEl.value = `${currQty - 1}`);
    } else if (btn && btn.dataset.change === 'plus') {
      this.qtyEl.value = `${currQty + 1}`;
    }
  }
}
