import ShopApi from '../../../api/shopApi';
import ProductList from '../../../components/ProductList';
import Component from '../../../components/base-component';
import { autobind } from '../../../decorators/autobind';
import Router from '../../../router/router';
import Helper from '../../../util/helper';
import KeenSlider from 'keen-slider';
import CategoryList from './components/CategoryList';
import SideNavBanner from './components/SideNavBanner';
import BestSellerProducts from './components/BestSeller';

const templateHTML = `
<div id="carousel-section" class="carousel-section flex relative mt-8 gap-x-3">
<div class="carousel-section__block-left md:w-3/12 lg:w-2/12 xl:w-3/12 relative">
    <!-- Sidenav -->
    <nav id="sidenavBanner"
        class="max-[755px]:hidden rounded-[20px] absolute left-0 top-0 z-8 h-full w-full -translate-x-full overflow-hidden bg-tertiary-color shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 "
        data-te-sidenav-hidden="false" data-te-sidenav-position="absolute">
        
    </nav>
    <!-- Sidenav -->
</div>
<div
    class="carousel-section__block-center lg:w-7/12 md:w-10/12 sm:w-full max-[700px]:w-full border p-3 rounded-[20px] pb-12 shadow bg-tertiary-color">
    <!-- Carousel for header -->
    <div id="carouselExampleCaptions" class="relative" data-te-carousel-init data-te-carousel-slide>
        <!--Carousel indicators-->
        <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators>
            <button type="button" data-te-target="#carouselExampleCaptions" data-te-slide-to="0"
                data-te-carousel-active
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-te-target="#carouselExampleCaptions" data-te-slide-to="1"
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"></button>
            <button type="button" data-te-target="#carouselExampleCaptions" data-te-slide-to="2"
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"></button>
            <button type="button" data-te-target="#carouselExampleCaptions" data-te-slide-to="3"
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 4"></button>
        </div>

        <!--Carousel items-->
        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-[''] ">
            <!--First item-->
            <div class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-active data-te-carousel-item style="backface-visibility: hidden">
                <img src="https://techspace-phoner.netlify.app/assets/redmi-note12-sliding-0805-35a8d39a.jpg"
                    class="block w-full xl:w-full rounded-[10px] " alt="carousel-1" />
                <!-- <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 class="text-xl">First slide label</h5>
            <p>
                Some representative placeholder content for the first slide.
            </p>
        </div> -->

            </div>
            <!--Second item-->
            <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item style="backface-visibility: hidden">
                <img src="https://techspace-phoner.netlify.app/assets/redmi-note12s-004-sliding-f8df3855.png"
                    class="block w-full xl:w-full rounded-[10px]" alt="redmi-note12s-004-sliding-f8df3855" />
                <!-- <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 class="text-xl">Second slide label</h5>
            <p>
                Some representative placeholder content for the second slide.
            </p>
        </div> -->
            </div>
            <!--Third item-->
            <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item style="backface-visibility: hidden">
                <img src="https://techspace-phoner.netlify.app/assets/rog-phone7-sliding-pre-order-4ce1f8b5.jpg"
                    class="block w-full xl:w-full rounded-[10px]" alt="rog-phone7-sliding-pre-order" />
                <!-- <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 class="text-xl">Third slide label</h5>
            <p>
                Some representative placeholder content for the third slide.
            </p>
        </div> -->
            </div>
            <!--four item-->
            <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item style="backface-visibility: hidden">
                <img src="https://techspace-phoner.netlify.app/assets/x5-pro-sliding-931804b5.png" class="block w-full xl:w-full rounded-[10px]"
                    alt="x5-pro-sliding" />
                <!-- <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 class="text-xl">Third slide label</h5>
            <p>
                Some representative placeholder content for the third slide.
            </p>
        </div> -->
            </div>
        </div>

        <!--Carousel controls - prev item-->
        <button
            class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
            <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </span>
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
        </button>
        <!--Carousel controls - next item-->
        <button
            class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
            <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </span>
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
        </button>
    </div>

    <!--Tabs navigation-->
    <ul class="mb-5 list-none flex-row flex-wrap border-b-0 pl-0 mt-10 items-stretch flex max-[667px]:hidden"
        role="tablist" data-te-nav-ref>
        <li role="presentation" class="w-1/4 flex-auto text-center">
            <a href="#tabs-home01"
                class=" h-full my-2 flex flex-col justify-between border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 min-[0]:text-sm md:text-xs  font-medium  leading-tight text-impress-bold-color hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill" data-te-target="#tabs-home01" role="tab"
                aria-controls="tabs-home01" aria-selected="true">
                <p class="uppercase min-[0px]:text-[0.8rem] sm:min-h-[2rem] sm:text-[1.2rem] leading-6">Iphone 14
                    Promax</p>
                <p class="mt-3 min-[0px]:text-[0.6rem] sm:text-[0.9rem]">Giá siêu ưu đãi</p>
            </a>
        </li>
        <li role="presentation" class="w-1/4 flex-auto text-center">
            <a href="#tabs-profile01"
                class="focus:border-transparen  h-full my-2 flex flex-col justify-between border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium leading-tight text-impress-bold-color hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill" data-te-target="#tabs-profile01" role="tab"
                aria-controls="tabs-profile01" aria-selected="false">
                <p class="uppercase min-[0px]:text-[0.8rem] sm:min-h-[2rem] sm:text-[1.2rem]">Galaxy S23
                    Ultra</p>
                <p class="mt-3 min-[0px]:text-[0.6rem] sm:text-[0.9rem]">Deal hot bùng nổ</p>
            </a>
        </li>
        <li role="presentation" class="w-1/4 flex-auto text-center">
            <a href="#tabs-messages01"
                class=" h-full my-2 flex flex-col justify-between border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium leading-tight text-impress-bold-color hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill" data-te-target="#tabs-messages01" role="tab"
                aria-controls="tabs-messages01" aria-selected="false">
                <p class="uppercase min-[0px]:text-[0.8rem] sm:min-h-[2rem] sm:text-[1.2rem]">readmi Note 12
                </p>
                <p class="mt-3 min-[0px]:text-[0.6rem] sm:text-[0.9rem]">Giá rẻ mua ngay</p>
            </a>
        </li>
        <li role="presentation" class="w-1/4 flex-auto text-center">
            <a href="#tabs-contact01"
                class=" h-full my-2 flex flex-col justify-between border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium leading-tight text-impress-bold-color hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill" data-te-target="#tabs-contact01" role="tab"
                aria-controls="tabs-contact01" aria-selected="false">
                <p class="uppercase min-[0px]:text-[0.8rem] sm:min-h-[2rem] sm:text-[1.2rem]">Nord CE 3 Lite
                </p>
                <p class="mt-3 min-[0px]:text-[0.6rem] sm:text-[0.9rem]">Trải nghiệm vượt trội</p>
            </a>
        </li>
    </ul>


</div>
<div class="carousel-section__block-right xl:w-3/12 sm:hidden lg:block max-[700px]:hidden">

    <div class="block-top-home__right-banner shadow border h-full flex rounded-[20px] bg-tertiary-color p-3">
        <div class="right-banner"><a href="#" class="right-banner__item mb-3 button__link  "><img
                    id="right-banner-image-1"
                    src="./src/assets/images/small-picture-banner-1-right.jpg" width="312"
                    height="300" alt="GALAXY S20 FE<br>Giá rẻ ngất ngây" loading="lazy"
                    class="right-banner__img mb-4 rounded-[20px] overflow-hidden shadow-md w-[312px]"></a><a href="#"
                class="right-banner__item mb-3 button__link "><img id="right-banner-image-2"
                    src="./src/assets/images/small-picture-banner-2-right.jpg" width="312"
                    height="300" alt="IPAD CHÍNH HÃNG<br>Lên đời từ 6.49 triệu" loading="lazy"
                    class="right-banner__img mb-4 rounded-[20px] overflow-hidden shadow-md w-[312px]"></a><a href="#"
                class="right-banner__item mb-3 button__link "><img id="right-banner-image-3"
                    src="./src/assets/images/small-picture-banner-3-right.jpg" width="690"
                    height="300" alt="LENOVO IDEAPAD<br> THIẾT KẾ CỨNG CÁP" loading="lazy"
                    class="right-banner__img mb-4 rounded-[20px] overflow-hidden shadow-md w-[312px]"></a></div>
    </div>

</div>

</div>

<!-- Catalog for website -->
<div class="uppercase text-2xl mt-10 font-bold py-3 text-impress-color">CATALOG</div>
<h4 class="text-md text-neutral-400">All of our catalog</h4>
<div id="catalog-section" class="flex items-center justify-center w-full h-full py-20 sm:py-8 ">
<div class="w-full relative flex items-center justify-center">
    <button id="prevCatalogBtn" aria-label="slide backward" class="absolute z-30 left-0 ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
            <i class="fa-solid fa-circle-chevron-left text-slate-700 text-3xl"></i>
                </button>
    <div class="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
        <div id="categories-slider"
            class="h-full max-h-[450px] flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
            
            <div class="keen-slider__slide number-slide1 flex flex-shrink-0 relative w-full sm:w-auto">
                <img src="https://www.thephoner.online/uploads/a96-pink-1920.png"
                    alt="black chair and white table" class="object-cover object-center w-full h-full"/>
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                        Catalog 1</h2>
                    <div class="flex h-full items-end pb-6">
                        <h3
                            class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                            Oppo</h3>
                    </div>
                </div>
            </div>
            <div class="keen-slider__slide number-slide2 flex flex-shrink-0 relative w-full sm:w-auto">
                <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/a/tab_s8_2.jpg"
                    alt="sitting area" class="object-cover object-center w-full" />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                        Catalog 2</h2>
                    <div class="flex h-full items-end pb-6">
                        <h3
                            class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                            Samsung</h3>
                    </div>
                </div>
            </div>
            <div class="keen-slider__slide number-slide3 flex flex-shrink-0 relative w-full sm:w-auto">
                <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_51_1_7.jpg"
                    alt="sitting area" class="object-cover object-center w-full" />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                        Catalog 3</h2>
                    <div class="flex h-full items-end pb-6">
                        <h3
                            class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                            Iphone</h3>
                    </div>
                </div>
            </div>
            <div class="keen-slider__slide number-slide4 flex flex-shrink-0 relative w-full sm:w-auto">
                <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/real_me_pro_002.jpg"
                    alt="sitting area" class="object-cover object-center w-full" />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                        Catalog 4</h2>
                    <div class="flex h-full items-end pb-6">
                        <h3
                            class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                            Xiaomi</h3>
                    </div>
                </div>
            </div>
            <div class="keen-slider__slide number-slide5 flex flex-shrink-0 relative w-full sm:w-auto">
                <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/real_me_pro_002.jpg"
                    alt="black chair and white table" class="object-cover object-center w-full" />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                        Catalog 5</h2>
                    <div class="flex h-full items-end pb-6">
                        <h3
                            class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                            Nokia</h3>
                    </div>
                </div>
            </div>
            <div class="keen-slider__slide number-slide6 flex flex-shrink-0 relative w-full sm:w-auto">
                <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/real_me_pro_002.jpg"
                    alt="sitting area" class="object-cover object-center w-full" />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                        Catalog 6</h2>
                    <div class="flex h-full items-end pb-6">
                        <h3
                            class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                            Realme</h3>
                    </div>
                </div>
            </div>
            <div class="keen-slider__slide number-slide7 flex flex-shrink-0 relative w-full sm:w-auto">
                <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/real_me_pro_002.jpg"
                    alt="sitting area" class="object-cover object-center w-full" />
                <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                    <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                        Catalog 7</h2>
                    <div class="flex h-full items-end pb-6">
                        <h3
                            class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900">
                            Vivo</h3>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <button id="nextCatalogBtn" aria-label="slide forward" class="absolute z-30 right-0 mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
             <i class="fa-solid fa-circle-chevron-right text-slate-700 text-3xl"></i>
    </button>

</div>
</div>

<div id="best-seller" class="">
    <div class="uppercase text-2xl font-bold py-3 text-impress-color">BEST SELLER</div>
    <h4 class="text-md text-neutral-400">These products are best sellers all the time at website</h4>
    <div id="best-sellers-wrapper" class="mt-10">

    <div class="">
        <div class="bg-quaternary-color dark:bg-gray-800 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
            <div class="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
                <div>
                    <p class="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">Best Seller Products</p>
                </div>
                <div>
                    <p class="text-base leading-normal sm:leading-none text-center text-gray-600 dark:text-white ">Explore products that are bought most frequently by people</p>
                </div>
            </div>
        </div>
        <div class="-mt-16 sm:-mt-48 lg:-mt-32 xl:-mt-40 2xl:container 2xl:mx-auto flex justify-center items-center space-y-4 px-4 md:px-6 2xl:px-0 mb-16">
            <div id="best-products-seller" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-between gap-x-6 gap-y-5">
                <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                    <div class="relative">
                        <img class="hidden lg:block" src="https://i.ibb.co/4ZPL5F0/Rectangle-37.png" alt="watch" />
                        <img class="lg:hidden" src="https://i.ibb.co/h1Vc29G/Rectangle-37.png" alt="watch" />

                        <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                            <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div class="flex justify-between mt-4">
                            <div>
                                <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">Sony Digital Watch</p>
                            </div>
                            <div>
                                <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$1245</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                    <div class="relative">
                        <img class="lg:block hidden" src="https://i.ibb.co/znBmcWV/Rectangle-37-1.png" alt="headphones" />
                        <img class="lg:hidden" src="https://i.ibb.co/hBXHm0W/Rectangle-37-1.png" alt="headphones" />

                        <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                            <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div class="flex justify-between mt-4">
                            <div>
                                <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">Sony Headphones</p>
                            </div>
                            <div>
                                <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$765</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                    <div class="relative">
                        <img class="hidden lg:block" src="https://i.ibb.co/vHj3fjr/Rectangle-37-2.png" alt="speaker" />
                        <img class="lg:hidden" src="https://i.ibb.co/QbpT9td/Rectangle-37-2.png" alt="speaker" />

                        <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                            <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div class="flex justify-between mt-4">
                            <div>
                                <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">Wonderboom Pill</p>
                            </div>
                            <div>
                                <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$550</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                    <div class="relative">
                        <img class="hidden lg:block" src="https://i.ibb.co/KsbPgh8/Rectangle-37-3.png" alt="game-controller" />
                        <img class="lg:hidden" src="https://i.ibb.co/QrX9pRv/Rectangle-37-3.png" alt="game-controller" />

                        <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                            <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div class="flex justify-between mt-4">
                            <div>
                                <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">PS5 controller</p>
                            </div>
                            <div>
                                <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$550</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                    <div class="relative">
                        <img class="hidden lg:block" src="https://i.ibb.co/vHj3fjr/Rectangle-37-2.png" alt="speaker" />
                        <img class="lg:hidden" src="https://i.ibb.co/QbpT9td/Rectangle-37-2.png" alt="speaker" />

                        <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                            <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div class="flex justify-between mt-4">
                            <div>
                                <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">Wonderboom Pill</p>
                            </div>
                            <div>
                                <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$550</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                    <div class="relative">
                        <img class="hidden lg:block" src="https://i.ibb.co/KsbPgh8/Rectangle-37-3.png" alt="game-controller" />
                        <img class="lg:hidden" src="https://i.ibb.co/QrX9pRv/Rectangle-37-3.png" alt="game-controller" />

                        <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                            <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div class="flex justify-between mt-4">
                            <div>
                                <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">PS5 controller</p>
                            </div>
                            <div>
                                <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$550</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                    <div class="relative">
                        <img class="hidden lg:block" src="https://i.ibb.co/4ZPL5F0/Rectangle-37.png" alt="watch" />
                        <img class="lg:hidden" src="https://i.ibb.co/h1Vc29G/Rectangle-37.png" alt="watch" />

                        <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                            <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div class="flex justify-between mt-4">
                            <div>
                                <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">Sony Digital Watch</p>
                            </div>
                            <div>
                                <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$1245</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                    <div class="relative">
                        <img class="lg:block hidden" src="https://i.ibb.co/znBmcWV/Rectangle-37-1.png" alt="headphones" />
                        <img class="lg:hidden" src="https://i.ibb.co/hBXHm0W/Rectangle-37-1.png" alt="headphones" />

                        <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                            <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div class="flex justify-between mt-4">
                            <div>
                                <p class="text-lg font-medium leading-none text-gray-800 dark:text-white">Sony Headphones</p>
                            </div>
                            <div>
                                <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$765</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>

<!-- Shop grid -->


<div class="2xl:container">
<div class="dark:bg-gray-900 lg:py-10 md:py-8 py-6 uppercase">
    <p class="w-10/12 md:w-full font-bold lg:text-2xl text-xl dark:text-white text-impress-color">
        Our Collections</p>
</div>
<div class="py-6 border rounded-lg shadow lg:px-4">
    <p class="font-normal text-sm leading-3 text-gray-600 dark:text-gray-300">Best Collections at our shop.
        Let's Check it out!</p>
    <hr class="w-full bg-gray-200 my-6" />

    <div class="flex justify-between items-center">
        <div
            class="flex space-x-3 justify-center items-center text-gray-800 dark:text-white cursor-pointer opacity-0">
            <img class="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-5-svg1.svg" alt="toggler">
            <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-5-svg1dark.svg

" alt="toggler">
            <p class="font-normal text-base leading-4 text-gray-800 dark:text-white ">Filter
            </p>
        </div>
        <p id="show-result-products"
            class="cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600 dark:text-gray-300">
            Showing 18 products</p>
        <div class="pagination-space w-30">
            <span id="prevBtn" class="border-2 py-2 px-3 cursor-pointer me-2">
                <i class="text-[10px] fa-solid fa-chevron-left"></i>
            </span>
            <span id="nextBtn" class="border-2 py-2 px-3  cursor-pointer">
                <i class="text-[10px] fa-solid fa-chevron-right"></i>
            </span>
        </div>
    </div>

    <div id="show-product"
        class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-4 lg:gap-x-2 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
        <div class="relative mb-10">
            <div class="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50">
                <p class="text-xs leading-3 text-gray-800">New</p>
            </div>
            <div class="relative group">
                <div
                    class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                </div>
                <img class="w-full"
                    src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/t/gtt_7766_3__1.jpg"
                    alt="A girl Posing Image" />
                <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <button
                        class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add
                        to bag</button>
                    <button
                        class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick
                        View</button>
                </div>
            </div>
            <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred
                Alana Dress</p>
            <div class="flex">
                <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-red-700 mt-4">$1550</p>
                <p
                    class="font-semibold dark:text-gray-300 text-lg leading-5 text-gray-800 mt-4 ms-4 line-through">
                    $1550
                </p>

            </div>

            <a href="detail-product.html"
                class="detail-product inline-block font-normal dark:text-gray-300 text-base leading-4 text-gray-600 mt-4 border border-slate-400 p-4">Xem
                ngay</a>
        </div>
        <div class="relative">
            <div class="bg-white bg-opacity-50 absolute top-0 right-0 px-2 py-1">
                <p class="text-white fonr-normal text-base leading-4">XS , S , M , L</p>
            </div>
            <div class="relative group">
                <div
                    class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                </div>
                <img class="w-full"
                    src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_51_1_7.jpg"
                    alt="A girl wearing white suit and googgles" />
                <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <button
                        class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add
                        to bag</button>
                    <button
                        class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick
                        View</button>
                </div>
            </div>
            <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred
                Alana Dress</p>
            <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">$1800</p>
        </div>
        <div>
            <div class="relative group">
                <div
                    class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                </div>
                <img class="w-full"
                    src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg"
                    alt="A girl wearing dark blue suit and posing" />
                <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <button
                        class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add
                        to bag</button>
                    <button
                        class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick
                        View</button>
                </div>
            </div>
            <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred
                Alana Dress</p>
            <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">$1550</p>
            <a href="detail-product.html"
                class="inline-block font-normal dark:text-gray-300 text-base leading-4 text-gray-600 mt-4 border border-slate-400 p-4">Xem
                ngay</a>
        </div>
        <div>
            <div class="relative group">
                <div
                    class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                </div>
                <img class="w-full"
                    src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/2/_/2_282.jpg"
                    alt="A girl posing and wearing white suit" />
                <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <button
                        class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add
                        to bag</button>
                    <button
                        class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick
                        View</button>
                </div>
            </div>

            <p class="font-normal text-xl dark:text-white leading-5 text-gray-800 md:mt-6 mt-4">Flared
                Cotton Tank Top</p>
            <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">$1800</p>
        </div>
        <div>
            <div class="relative group">
                <div
                    class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                </div>
                <img class="w-full"
                    src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/e/d/edobfefy.jpg"
                    alt="Girl posing for an Image" />
                <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <button
                        class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add
                        to bag</button>
                    <button
                        class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick
                        View</button>
                </div>
            </div>

            <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared
                Cotton Tank Top</p>
            <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">$1800</p>
        </div>
        <div>
            <div class="relative group">
                <div
                    class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                </div>
                <img class="w-full"
                    src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung_galaxy_z_flip_m_i_2022-1_1.jpg"
                    alt="A blonde girl posing" />
                <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <button
                        class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add
                        to bag</button>
                    <button
                        class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick
                        View</button>
                </div>
            </div>

            <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred
                Alana Dress</p>
            <p class="font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
            <p class="font-normal dark:text-gray-300 text-base leading-4 text-gray-600 mt-4">2 colours</p>
        </div>
        <div>
            <div class="relative group">
                <div
                    class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                </div>
                <img class="w-full"
                    src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/t/gtt7766.jpg"
                    alt="A girl wearing white suit posing in desert" />
                <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <button
                        class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add
                        to bag</button>
                    <button
                        class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick
                        View</button>
                </div>
            </div>

            <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared
                Cotton Tank Top</p>
            <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">$1800</p>
        </div>
        <div>
            <div class="relative group">
                <div
                    class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                </div>
                <img class="w-full"
                    src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119.jpg"
                    alt="Girl wearing pink suit posing" />
                <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                    <button
                        class="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add
                        to bag</button>
                    <button
                        class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick
                        View</button>
                </div>
            </div>

            <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared
                Cotton Tank Top</p>
            <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">$1800</p>
        </div>
    </div>

    <div class="flex justify-center items-center">
        <a id="loadMoreBtn" href="shop.html"
            class="hover:bg-secondary-color dark:text-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-tertiary-color bg-primary-color py-5 md:px-16 p-2 md:w-auto lg:mt-12 md:mt-12 mt-10 text-white font-medium text-base leading-4">Load
            More</a>
    </div>
</div>
</div>


<!-- Testimonial -->
<div class="md:max-w-xl lg:max-w-3xl mt-10 ">
<h3 class="mb-6 text-2xl font-bold text-impress-color dark:text-neutral-200 uppercase">
    Testimonials
</h3>
<p class="mb-6 pb-2 md:mb-12 md:pb-0">
    Coming to some feedbacks of our customer! They are one of our loyal client requently come to our shop!
    Thanks all of you guys!!!
</p>
</div>

<!-- Container for the Testimonials -->
<div class="grid gap-6 md:grid-cols-3 lg:gap-12 swiper mySwiper shadow border rounded-md p-3">

    <!-- First Testimonial -->
    <div class="mb-12 md:mb-0 swiper-slide">
        <div class="mb-6 flex justify-center">
            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
        </div>
        <h5 class="mb-4 text-xl font-semibold">Maria Smantha</h5>
        <h6 class="mb-4 font-semibold text-impress-color">
            Signer
        </h6>
        <p class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24">
                <path
                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            This is one of the good place i'ever visited
        </p>
    </div>

    <!-- Second Testimonial -->
    <div class="mb-12 md:mb-0 swiper-slide">
        <div class="mb-6 flex justify-center">
            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
        </div>
        <h5 class="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
        <h6 class="mb-4 font-semibold text-impress-color">
            Graphic Designer
        </h6>
        <p class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24">
                <path
                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Wonderful Views, Phone and other service. I expect to buy more in here. The recipient is so
            great and kind. I hope this shop would be more developed
        </p>
        <ul class="mb-0 flex items-center justify-center">
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="h-5 w-5 text-yellow-500">
                    <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd" />
                </svg>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="h-5 w-5 text-yellow-500">
                    <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd" />
                </svg>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="h-5 w-5 text-yellow-500">
                    <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd" />
                </svg>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="h-5 w-5 text-yellow-500">
                    <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd" />
                </svg>
            </li>

        </ul>
    </div>

    <!-- Third Testimonial -->

    <div class="mb-12 md:mb-0 swiper-slide">
        <div class="mb-6 flex justify-center">
            <img alt
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
        </div>
        <h5 class="mb-4 text-xl font-semibold">David Telex</h5>
        <h6 class="mb-4 font-semibold text-impress-color ">
            Software architechure
        </h6>
        <p class="mb-4 text-neutral-600 dark:text-neutral-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24">
                <path
                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Nothing to say about this place. Just one word "Amazing"
        </p>
        <ul class="mb-0 flex items-center justify-center">
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="h-5 w-5 text-yellow-500">
                    <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd" />
                </svg>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="h-5 w-5 text-yellow-500">
                    <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd" />
                </svg>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="h-5 w-5 text-yellow-500">
                    <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd" />
                </svg>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="h-5 w-5 text-yellow-500">
                    <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd" />
                </svg>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="h-5 w-5 text-yellow-500">
                    <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd" />
                </svg>
            </li>
        </ul>
    </div>

<div class="swiper-pagination"></div>
<!-- If we need navigation buttons -->
<div class="swiper-button-prev">
</div>
<div class="swiper-button-next">
</div>
<!-- If we need scrollbar -->
<div class="swiper-scrollbar"></div>
</div>

<div class="hightlight">
    <div class="uppercase text-2xl mt-10 font-bold text-impress-color">HIGHLIGHTS</div>
    
    <div class="2xl:container 2xl:mx-auto md:py-12 py-9">
    <div class="bg-gradient-to-r from-gray-50 to-tertiary-color dark:bg-gray-800 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">
        <!-- Delivery grid Card -->
        <div class="">
            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg1.svg" alt="delivery">
            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg1dark.svg" alt="delivery">
            <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">Delivery</h3>
            <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Free worldwide delivery over orders above $100</p>
        </div>

        <!-- customer Grid Card -->

        <div class="">
            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg2.svg" alt="Customer Care">
            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg2dark.svg" alt="Customer Care">
            <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">Customer Care</h3>
            <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Our customer care is available 24/7 at <span class="font-semibold cursor-pointer">+495-589-509</span> and <span class="font-semibold cursor-pointer">customercare@gmail.com</span></p>
        </div>

        <!-- Recycle Grid Card -->

        <div class="">
            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg3.svg" alt="Recycle">
            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg3dark.svg" alt="Recycle">
            <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">Recycle</h3>
            <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">All out products are 100 percent recycable</p>
        </div>

        <!-- Secure Payment Card -->

        <div class="">
            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg4.svg" alt="Secure Payment">
            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg4dark.svg" alt="Secure Payment">
            <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">Secure Payment</h3>
            <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Transaction process has end to end encryption</p>
        </div>
    </div>
</div>

</div>


<!-- Blog section -->
<div class="uppercase text-2xl mt-10 font-bold text-impress-color">BLOG</div>
<section class="text-gray-600 body-font pt-8 ">
<div class="md:container pb-16 mx-auto">
    <div class="flex flex-wrap -m-4 ">
        <div class="p-4 md:w-1/3 ">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/05/steam-deck-nintendo-switch-rog-ally-7.jpg"
                    alt="blog">
                <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">News</h1>
                    <p class="leading-relaxed mb-3">Switch vs Steam Deck vs ROG Ally: Đâu là máy chơi game
                        cầm tay tốt nhất cho bạn?.</p>
                    <div class="flex items-center flex-wrap ">
                        <a href="./blogs"
                            class="text-text-color-2 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span
                            class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path
                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                </path>
                            </svg>6
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 md:w-1/3 ">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/05/Vivo-S17e-trang-web-cover.jpeg"
                    alt="blog">
                <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">News</h1>
                    <p class="leading-relaxed mb-3">Vivo S17e vô tình được liệt kê trên website với đầy đủ
                        thông tin cấu hình và giá bán</p>
                    <div class="flex items-center flex-wrap">
                        <a href="./blogs"
                            class="text-text-color-2 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span
                            class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path
                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                </path>
                            </svg>6
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 md:w-1/3 ">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/05/Realme-Narzo-N53.jpeg"
                    alt="blog">
                <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">News</h1>
                    <p class="leading-relaxed mb-3">Chi tiết về pin, tốc độ sạc và camera chính của Realme
                        Narzo N53 được tiết lộ</p>
                    <div class="flex items-center flex-wrap ">
                        <a href="./blogs"
                            class="text-text-color-2 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span
                            class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path
                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                </path>
                            </svg>6
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<div id="partner" class="">

    <div class="uppercase text-2xl font-bold text-impress-color">PARTNERS</div>

    <div class="py-12 border shadow-sm my-10 px-4">
        <div class="w-full flex flex-col justify-center items-center"> 
            <div class="flex flex-col justify-center items-center text-center space-y-4">
                <h1 class="text-3xl lg:text-4xl dark:text-white font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800">Our Trusted Partners</h1>
                <p class="text-base leading-6 dark:text-gray-400 text-center text-gray-600 w-full md:w-10/12">We just got featured in the following magazines and it has been the most incredible journey. We work with the best fashion magazines across the world</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 justify-items-around gap-x-6 gap-y-6 xl:gap-x-8 mt-10">
                <div class="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 dark:bg-gray-800 flex justify-center items-center flex-col text-center py-14 px-12 space-y-6">
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners8-svg1.svg" alt="marie clarie"/>
                    <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners8-svg1dark.svg" alt="marie clarie"/>
                    
                </div>
                <div class="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 dark:bg-gray-800 flex justify-center items-center flex-col text-center py-14 px-12 space-y-6">
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners8-svg2.svg" alt="vogue logo"/>
                    <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners8-svg2dark.svg" alt="vogue logo"/>
                
                </div>
                <div class="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 dark:bg-gray-800 flex justify-center items-center flex-col text-center py-14 px-12 space-y-6">
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners8-svg3.svg" alt="esquire logo"/>
                    <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners8-svg3dark.svg" alt="esquire logo"/>
                
                </div>
                <div class="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 dark:bg-gray-800 flex justify-center items-center flex-col text-center py-14 px-12 space-y-6">
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners8-svg4.svg" alt="bazaar logo"/>
                    <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners8-svg4dark.svg" alt="bazaar logo"/>
                
                </div>
                <div class="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 dark:bg-gray-800 flex justify-center items-center flex-col text-center py-14 px-12 space-y-6">
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners8-svg5.svg" alt="heavy logo"/>
                    <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners8-svg5dark.svg" alt="heavy logo"/>
                
                </div>
                <div class="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 dark:bg-gray-800 flex justify-center items-center flex-col text-center py-14 px-12 space-y-6">
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners8-svg6.svg" alt="grazia logo"/>
                    <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/partners8-svg6dark.svg" alt="grazia logo"/>
        
                </div>
            </div>
        </div>
    </div>

</div>

<div id="socials" class="">
    <div class="uppercase text-2xl font-bold text-impress-color">Socials</div>
     
    <div class="2xl:container 2xl:mx-auto md:py-12 py-10">
        <div class="text-center">
            <h2 class="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-impress-color md:w-full w-9/12 mx-auto">Follow Us on Instagram</h2>
            <p class="font-normal text-base leading-6 dark:text-gray-400 text-gray-600 mt-4 lg:w-5/12 md:w-9/12 mx-auto">Follow us on instagram @<span class="underline cursor-pointer">followuspleaseee</span> and tag us to get featured on our timeline</p>
        </div>
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
            <div class="relative group">
                <img src="https://i.ibb.co/QHS8Ngp/pexels-alana-sousa-3294250-1.png" alt="A picture of a sitting dog" class="lg:block hidden w-full" />
                <img src="https://i.ibb.co/mNPBgQN/pexels-alana-sousa-3294250-1-1.png" alt="A picture of a sitting dog" class="lg:hidden block w-full" />
                <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg" alt="instagram">
                </div>
            </div>
            <div class="relative group">
                <img src="https://i.ibb.co/T8jgRy3/pexels-leah-kelley-1449667-1.png" alt="Smiling Girl" class="lg:block hidden w-full" />
                <img src="https://i.ibb.co/YD8nNMR/pexels-leah-kelley-1449667-1-1.png" alt="Smiling Girl" class="lg:hidden block w-full" />
                <div class="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg" alt="instagram">
                </div>
            </div>
            <div class="relative group">
                <img src="https://i.ibb.co/F3dzNWD/pexels-spencer-selover-775358-1.png" alt="Men Posing" class="lg:block hidden w-full" />
                <img src="https://i.ibb.co/myWxfSm/pexels-spencer-selover-775358-1-1.png" alt="Men Posing" class="lg:hidden block w-full" />
                <div class="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg" alt="instagram">
                </div>
            </div>
            <div class="relative group">
                <img src="https://i.ibb.co/DwcwgDP/pexels-chevanon-photography-1108099-1.png" alt="2 puppies" class="lg:block hidden w-full" />
                <img src="https://i.ibb.co/5cDQZ2r/pexels-chevanon-photography-1108099-1-1.png" alt="2 puppies" class="lg:hidden block w-full" />
                <div class="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/social-1-svg1.svg" alt="instagram">
                </div>
            </div>
        </div>
    </div>

</div>


`;

export default class Homepage extends Component<HTMLDivElement> {
  prodListInstance: ProductList;
  nextBtn: HTMLSpanElement;
  prevBtn: HTMLSpanElement;
  showResultProductsEl: HTMLParagraphElement;
  loadMoreBtn: HTMLAnchorElement;
  slider: any;
  prevCatalogBtn: HTMLButtonElement;
  nextCatalogBtn: HTMLButtonElement;
  constructor() {
    super('main');
    this.hostEl.innerHTML = templateHTML;
    this.prodListInstance = new ProductList('show-product');
    this.prodListInstance.load();

    this.nextBtn = document.getElementById('nextBtn') as HTMLSpanElement;
    this.prevBtn = document.getElementById('prevBtn') as HTMLSpanElement;
    this.showResultProductsEl = document.getElementById(
      'show-result-products',
    ) as HTMLParagraphElement;
    this.showResultProductsEl.innerText = `Showing ${8} products`;
    this.loadMoreBtn = document.getElementById('loadMoreBtn') as HTMLAnchorElement;

    this.prevCatalogBtn = document.getElementById('prevCatalogBtn') as HTMLButtonElement;
    this.nextCatalogBtn = document.getElementById('nextCatalogBtn') as HTMLButtonElement;

    new SideNavBanner();
    new CategoryList();
    new BestSellerProducts();
    this.initCateSlider();
    this.attach();
  }

  attach() {
    this.nextBtn.addEventListener('click', this.nextProductsHandler);
    this.prevBtn.addEventListener('click', this.prevProductsHandler);
    this.loadMoreBtn.addEventListener('click', this.loadMoreHandler);
    this.prevCatalogBtn.addEventListener('click', this.prevCatalogHandler);
    this.nextCatalogBtn.addEventListener('click', this.nextCatalogHandler);
  }

  @autobind
  nextProductsHandler() {
    (async () => {
      const currPage = +(Helper.getParams('_page') || 1);
      const limitProducts = +(Helper.getParams('_limit') || 8);

      const response = await ShopApi.getProducts({ _page: currPage, _limit: limitProducts });

      const {
        pagination: { _totalRows, _limit },
      } = response.data;
      const maxPage = Math.ceil(_totalRows / _limit);

      console.log('total rows: ', response.data);

      console.log('max page: ', maxPage);

      if (currPage >= maxPage) return;

      Helper.setParams('_page', (currPage + 1).toString());
      this.prodListInstance.load();

      // await renderProducts({ _page: currPage + 1, _limit: 12 });

      this.showResultProductsEl.innerText = `Showing ${this.prodListInstance.getProducts.length} products`;
    })();
  }

  @autobind
  prevProductsHandler() {
    const currPage = +(Helper.getParams('_page') || 1);

    if (currPage === 1) return;

    Helper.setParams('_page', (currPage - 1).toString());

    // Render Products
    this.prodListInstance.load();
    this.showResultProductsEl.innerText = `Showing ${this.prodListInstance.getProducts.length} products`;
  }

  @autobind
  loadMoreHandler(e: Event) {
    e.preventDefault();

    history.pushState(null, '', '/shop');
    new Router();
  }

  createSlider(sliderWrapperId: string, itemPerView: number) {
    var slider = new KeenSlider(`#${sliderWrapperId}`, {
      slides: {
        perView: itemPerView,
      },
      loop: true,
    });

    this.slider = slider;
  }

  @autobind
  initCateSlider() {
    this.slider = new KeenSlider('#categories-slider', {
      breakpoints: {
        '(min-width: 768px)': {
          slides: { perView: 2, spacing: 5 },
        },
        '(min-width: 1000px)': {
          slides: { perView: 3, spacing: 10 },
        },
        '(min-width: 1200px)': {
          slides: { perView: 4, spacing: 12 },
        },
      },
      loop: true,
    });
  }

  @autobind
  prevCatalogHandler() {
    console.log(this.slider);
    this.slider.prev();
  }

  @autobind
  nextCatalogHandler() {
    console.log(this.slider);
    this.slider.next();
  }
}
