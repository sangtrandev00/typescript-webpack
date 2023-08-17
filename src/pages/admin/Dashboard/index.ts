// import ToastMessage from "../../../components/AdminToast";
// import Component from "../../../components/base-component";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { autobind } from '../../../decorators/autobind';
import { OrderInterface, OrderStatus } from '../../../interface/Order';
import { Productable } from '../../../interface/Product';
import { UserInterface } from './../../../interface/User';
import Orders from '../Orders';
import Utilities from '../Orders/components/Utilites';
import OrdersApi from '../../../api/orderApi';
import ProductsApi from '../../../api/productsApi';
import UsersApi from '../../../api/userApi';
import Helper from '../../../util/helper';

const templateHTML = `
    <main class="p-4 md:ml-64 h-auto pt-20">

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <!-- Card Item Start -->
        <div
            class="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark px-4 ">
            <div
                class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg class="fill-primary dark:fill-white" width="22" height="16" viewBox="0 0 22 16"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                        fill=""></path>
                    <path
                        d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                        fill=""></path>
                </svg>
            </div>

            <div class="mt-4 flex items-end justify-between">
                <div>
                    <h4 id="totalViews" class="text-title-md font-bold text-black dark:text-white">
                        $3.456K
                    </h4>
                    <span class="text-sm font-medium">Total views</span>
                </div>

            </div>
        </div>
        <!-- Card Item End -->

        <!-- Card Item Start -->
        <div
            class="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark px-4">
            <div
                class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg class="fill-primary dark:fill-white" width="20" height="22" viewBox="0 0 20 22"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.7531 16.4312C10.3781 16.4312 9.27808 17.5312 9.27808 18.9062C9.27808 20.2812 10.3781 21.3812 11.7531 21.3812C13.1281 21.3812 14.2281 20.2812 14.2281 18.9062C14.2281 17.5656 13.0937 16.4312 11.7531 16.4312ZM11.7531 19.8687C11.2375 19.8687 10.825 19.4562 10.825 18.9406C10.825 18.425 11.2375 18.0125 11.7531 18.0125C12.2687 18.0125 12.6812 18.425 12.6812 18.9406C12.6812 19.4219 12.2343 19.8687 11.7531 19.8687Z"
                        fill=""></path>
                    <path
                        d="M5.22183 16.4312C3.84683 16.4312 2.74683 17.5312 2.74683 18.9062C2.74683 20.2812 3.84683 21.3812 5.22183 21.3812C6.59683 21.3812 7.69683 20.2812 7.69683 18.9062C7.69683 17.5656 6.56245 16.4312 5.22183 16.4312ZM5.22183 19.8687C4.7062 19.8687 4.2937 19.4562 4.2937 18.9406C4.2937 18.425 4.7062 18.0125 5.22183 18.0125C5.73745 18.0125 6.14995 18.425 6.14995 18.9406C6.14995 19.4219 5.73745 19.8687 5.22183 19.8687Z"
                        fill=""></path>
                    <path
                        d="M19.0062 0.618744H17.15C16.325 0.618744 15.6031 1.23749 15.5 2.06249L14.95 6.01562H1.37185C1.0281 6.01562 0.684353 6.18749 0.443728 6.46249C0.237478 6.73749 0.134353 7.11562 0.237478 7.45937C0.237478 7.49374 0.237478 7.49374 0.237478 7.52812L2.36873 13.9562C2.50623 14.4375 2.9531 14.7812 3.46873 14.7812H12.9562C14.2281 14.7812 15.3281 13.8187 15.5 12.5469L16.9437 2.26874C16.9437 2.19999 17.0125 2.16562 17.0812 2.16562H18.9375C19.35 2.16562 19.7281 1.82187 19.7281 1.37499C19.7281 0.928119 19.4187 0.618744 19.0062 0.618744ZM14.0219 12.3062C13.9531 12.8219 13.5062 13.2 12.9906 13.2H3.7781L1.92185 7.56249H14.7094L14.0219 12.3062Z"
                        fill=""></path>
                </svg>
            </div>

            <div class="mt-4 flex items-end justify-between">
                <div>
                    <h4 id="totalSale" class="text-title-md font-bold text-black dark:text-white">
                        $45,2K
                    </h4>
                    <span class="text-sm font-medium">Total Sales</span>
                </div>
            </div>
        </div>
        <!-- Card Item End -->

        <!-- Card Item Start -->
        <div
            class="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark px-4">
            <div
                class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg class="fill-primary dark:fill-white" width="22" height="22" viewBox="0 0 22 22"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.3813 3.85003 21.3813H18.1157C18.975 21.3813 19.8 21.0031 20.35 20.3844C20.9 19.7656 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.15 19.8344H3.85003C3.43753 19.8344 3.05941 19.6625 2.78441 19.3531C2.50941 19.0438 2.37191 18.6313 2.44066 18.2188L4.12503 3.43751C4.19378 2.71563 4.81253 2.16563 5.56878 2.16563H16.4313C17.1532 2.16563 17.7719 2.71563 17.875 3.43751L19.5938 18.2531C19.6282 18.6656 19.4907 19.0438 19.2157 19.3531Z"
                        fill=""></path>
                    <path
                        d="M14.3345 5.29375C13.922 5.39688 13.647 5.80938 13.7501 6.22188C13.7845 6.42813 13.8189 6.63438 13.8189 6.80625C13.8189 8.35313 12.547 9.625 11.0001 9.625C9.45327 9.625 8.1814 8.35313 8.1814 6.80625C8.1814 6.6 8.21577 6.42813 8.25015 6.22188C8.35327 5.80938 8.07827 5.39688 7.66577 5.29375C7.25327 5.19063 6.84077 5.46563 6.73765 5.87813C6.6689 6.1875 6.63452 6.49688 6.63452 6.80625C6.63452 9.2125 8.5939 11.1719 11.0001 11.1719C13.4064 11.1719 15.3658 9.2125 15.3658 6.80625C15.3658 6.49688 15.3314 6.1875 15.2626 5.87813C15.1595 5.46563 14.747 5.225 14.3345 5.29375Z"
                        fill=""></path>
                </svg>
            </div>

            <div class="mt-4 flex items-end justify-between">
                <div>
                    <h4 id="totalProducts" class="text-title-md font-bold text-black dark:text-white">
                        2.450
                    </h4>
                    <span class="text-sm font-medium">Total Products</span>
                </div>
            </div>
        </div>
        <!-- Card Item End -->

        <!-- Card Item Start -->
        <div
            class="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark px-4">
            <div
                class="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg class="fill-primary dark:fill-white" width="22" height="18" viewBox="0 0 22 18"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.18418 8.03751C9.31543 8.03751 11.0686 6.35313 11.0686 4.25626C11.0686 2.15938 9.31543 0.475006 7.18418 0.475006C5.05293 0.475006 3.2998 2.15938 3.2998 4.25626C3.2998 6.35313 5.05293 8.03751 7.18418 8.03751ZM7.18418 2.05626C8.45605 2.05626 9.52168 3.05313 9.52168 4.29063C9.52168 5.52813 8.49043 6.52501 7.18418 6.52501C5.87793 6.52501 4.84668 5.52813 4.84668 4.29063C4.84668 3.05313 5.9123 2.05626 7.18418 2.05626Z"
                        fill=""></path>
                    <path
                        d="M15.8124 9.6875C17.6687 9.6875 19.1468 8.24375 19.1468 6.42188C19.1468 4.6 17.6343 3.15625 15.8124 3.15625C13.9905 3.15625 12.478 4.6 12.478 6.42188C12.478 8.24375 13.9905 9.6875 15.8124 9.6875ZM15.8124 4.7375C16.8093 4.7375 17.5999 5.49375 17.5999 6.45625C17.5999 7.41875 16.8093 8.175 15.8124 8.175C14.8155 8.175 14.0249 7.41875 14.0249 6.45625C14.0249 5.49375 14.8155 4.7375 15.8124 4.7375Z"
                        fill=""></path>
                    <path
                        d="M15.9843 10.0313H15.6749C14.6437 10.0313 13.6468 10.3406 12.7874 10.8563C11.8593 9.61876 10.3812 8.79376 8.73115 8.79376H5.67178C2.85303 8.82814 0.618652 11.0625 0.618652 13.8469V16.3219C0.618652 16.975 1.13428 17.4906 1.7874 17.4906H20.2468C20.8999 17.4906 21.4499 16.9406 21.4499 16.2875V15.4625C21.4155 12.4719 18.9749 10.0313 15.9843 10.0313ZM2.16553 15.9438V13.8469C2.16553 11.9219 3.74678 10.3406 5.67178 10.3406H8.73115C10.6562 10.3406 12.2374 11.9219 12.2374 13.8469V15.9438H2.16553V15.9438ZM19.8687 15.9438H13.7499V13.8469C13.7499 13.2969 13.6468 12.7469 13.4749 12.2313C14.0937 11.7844 14.8499 11.5781 15.6405 11.5781H15.9499C18.0812 11.5781 19.8343 13.3313 19.8343 15.4625V15.9438H19.8687Z"
                        fill=""></path>
                </svg>
            </div>

            <div class="mt-4 flex items-end justify-between">
                <div>
                    <h4 id="totalUsers" class="text-title-md font-bold text-black dark:text-white">
                        3.456
                    </h4>
                    <span class="text-sm font-medium">Total Users</span>
                </div>

            </div>
        </div>
        <!-- Card Item End -->
        <!-- Card Item Start -->
  
        <!-- Card Item End -->
    </div>

    <div id="orders-status-el"
        class="mt-4 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark px-4">
        <!--Tabs navigation-->
        <ul id="orders-tab-list"
          class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref>
          <li role="presentation" data-order-status="${OrderStatus.UNCONFIRMED}" class="flex-auto text-center">
            <a
              href="#tabs-orders-status-1"
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-orders-status-1"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-orders-status-1"
              aria-selected="true"
              >Unconfirmed (<span id="unconfirmedQty">3</span>)</a
            >
          </li>
          <li role="presentation" data-order-status="${OrderStatus.CONFIRMED}" class="flex-auto text-center">
            <a
              href="#tabs-orders-status-2"
              class="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-orders-status-2"
              role="tab"
              aria-controls="tabs-orders-status-2"
              aria-selected="false"
              >Confirmed (<span id="confirmedQty">3</span>)</a
            >
          </li>
          <li role="presentation" data-order-status="${OrderStatus.SHIPPING}" class="flex-auto text-center">
            <a
              href="#tabs-orders-status-3"
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-orders-status-3"
              role="tab"
              aria-controls="tabs-orders-status-3"
              aria-selected="false"
              >Shipping (<span id="shippingQty">3</span>)</a
            >
          </li>
          <li role="presentation" data-order-status="${OrderStatus.SUCCESS}" class="flex-auto text-center">
            <a
              href="#tabs-orders-status-4"
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-orders-status-4"
              role="tab"
              aria-controls="tabs-orders-status-4"
              aria-selected="false"
              >Success (<span id="successQty">3</span>)</a
            >
          </li>
          <li role="presentation" data-order-status="${OrderStatus.FAILED}" class="flex-auto text-center">
            <a
              href="#tabs-orders-status-5"
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
              data-te-toggle="pill"
              data-te-target="#tabs-orders-status-5"
              role="tab"
              aria-controls="tabs-orders-status-5"
              aria-selected="false"
              >Failed (<span id="failedQty">3</span>)</a
            >
          </li>
       
        </ul>
        
        <!--Tabs content-->
        <div class="mb-6">
          <div
            class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-orders-status-1"
            role="tabpanel"
            aria-labelledby="tabs-home-tab01"
            data-te-tab-active>
            <table id="table-orders-status-1"></table>
          </div>
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-orders-status-2"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab01">
            <table id="table-orders-status-2"></table>
          </div>
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-orders-status-3"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab01">
                <table id="table-orders-status-3"></table>
          </div>
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-orders-status-4"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab01">
                <table id="table-orders-status-4"></table>
          </div>

          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-orders-status-5"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab01">
                <table id="table-orders-status-5"></table>
          </div>
     
        </div>

    </div>

    <div class="mt-8 shadow border p-10">
        <div class="flex items-center">
            <h3>
                Our Summarize Sales
            </h3>
            <h4 class="ms-10 font-bold">
                Select The report of year:
            </h4>
            <select class="ms-2" title="select year" name="selectYear" id="selectYear">
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
        <canvas id="myChart"></canvas>

    </div>

    ${Utilities.component}

    <!-- Toast message element!!! -->
    <div class="toasts-wrapper fixed top-20 right-4">
        <div class=" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-primary-100 bg-clip-padding text-sm text-primary-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden"
            id="toast-primary-el" role="alert" aria-live="assertive" aria-atomic="true"
            data-te-autohide="false" data-te-toast-init data-te-toast-show>
            <div
                class="flex items-center justify-between rounded-t-lg border-b-2 border-primary-200 bg-primary-100 bg-clip-padding px-4 pb-2 pt-2.5 text-primary-700">
                <p class="toast-title flex items-center font-bold text-primary-700">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle"
                        class="mr-2 h-4 w-4 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z">
                        </path>
                    </svg>
                    MDBootstrap
                </p>
                <div class="flex items-center">
                    <p class="text-xs text-primary-700 toast-minutes">11 mins ago</p>
                    <button type="button"
                        class="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-toast-dismiss aria-label="Close">
                        <span
                            class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div class="toast-message break-words rounded-b-lg bg-primary-100 px-4 py-4 text-primary-700">
                Hello, world! This is a toast message.
            </div>
        </div>
        <div class=" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-success-100 bg-clip-padding text-sm text-success-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden "
            id="toast-success-el" role="alert" aria-live="assertive" aria-atomic="true"
            data-te-autohide="false" data-te-toast-init data-te-toast-show>
            <div
                class="flex items-center justify-between rounded-t-lg border-b-2 border-success/20 bg-success-100 bg-clip-padding px-4 pb-2 pt-2.5">
                <p class="toast-title flex items-center font-bold text-success-700">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle"
                        class="mr-2 h-4 w-4 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                    </svg>
                    MDBootstrap
                </p>
                <div class="flex items-center">
                    <p class="text-xs text-success-700 toast-minutes">11 mins ago</p>
                    <button type="button"
                        class="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-toast-dismiss aria-label="Close">
                        <span
                            class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div class="toast-message break-words rounded-b-lg bg-success-100 px-4 py-4 text-success-700">
                Hello, world! This is a toast message.
            </div>
        </div>
        <div class=" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-warning-100 bg-clip-padding text-sm text-warning-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden"
            id="toast-warning-el" role="alert" aria-live="assertive" aria-atomic="true"
            data-te-autohide="false" data-te-toast-init data-te-toast-show>
            <div
                class="flex items-center justify-between rounded-t-lg border-b-2 border-warning-200 bg-warning-100 bg-clip-padding px-4 pb-2 pt-2.5 text-warning-700">
                <p class="toast-title flex items-center font-bold text-warning-700">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas"
                        data-icon="exclamation-triangle" class="mr-2 h-4 w-4 fill-current" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor"
                            d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z">
                        </path>
                    </svg>
                    MDBootstrap
                </p>
                <div class="flex items-center">
                    <p class="text-xs text-warning-700 opacity-90 toast-minutes">11 mins ago</p>
                    <button type="button"
                        class="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-toast-dismiss aria-label="Close">
                        <span
                            class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div class="toast-message break-words rounded-b-lg bg-warning-100 px-4 py-4 text-warning-700">
                Hello, world! This is a toast message.
            </div>
        </div>
        <div class=" pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-danger-100 bg-clip-padding text-sm text-danger-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden"
            id="toast-danger-el" role="alert" aria-live="assertive" aria-atomic="true"
            data-te-autohide="false" data-te-toast-init data-te-toast-show>
            <div
                class="flex items-center justify-between rounded-t-lg border-b-2 border-danger-200 bg-danger-300 bg-clip-padding px-4 pb-2 pt-2.5 text-danger-700">
                <p class="toast-title flex items-center font-bold text-danger-700">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle"
                        class="mr-2 h-4 w-4 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z">
                        </path>
                    </svg>
                    MDBootstrap
                </p>
                <div class="flex items-center">
                    <p class="text-xs text-danger-700 toast-minutes">11 mins ago</p>
                    <button type="button"
                        class="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-toast-dismiss aria-label="Close">
                        <span
                            class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div class="toast-message break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700">
                Hello, world! This is a toast message.
            </div>
        </div>
    </div>

    </main>
`;

export default class Dashboard extends Orders {
  ordersSuccess: OrderInterface[] = [];
  products: Productable[] = [];
  users: UserInterface[] = [];

  totalSales: number = 0;
  totalViews: number = 0;
  totalProducts: number = 0;
  totalUsers: number = 0;
  selectedYear: number = 2023;

  hostEl: HTMLDivElement;
  // tableEl: HTMLTableElement;
  // viewDetailTableCartEl: HTMLDivElement;
  tabsListEl: HTMLUListElement;
  selectYearEl: HTMLSelectElement;

  myChart?: Chart;
  myChartEl: HTMLCanvasElement;

  constructor() {
    super();
    this.hostEl = document.getElementById('admin-content') as HTMLDivElement;
    this.hostEl.innerHTML = templateHTML;

    this.tabsListEl = document.getElementById('orders-tab-list') as HTMLUListElement;

    this.tableEl = document.getElementById('table-orders-status-1') as HTMLTableElement;
    this.updateOrderForm = document.getElementById('update-order-form') as HTMLFormElement;
    this.viewDetailTableCartEl = document.getElementById('view-detail-cart') as HTMLDivElement;
    this.deleteConfirmBtn = document.getElementById('deleteOrderBtn') as HTMLButtonElement;
    this.myChartEl = document.getElementById('myChart') as HTMLCanvasElement;
    this.closeModalBtn = document.getElementById('closeModalBtn')! as HTMLButtonElement;
    this.closeDeleteModalBtn = document.getElementById('closeDeleteModal')! as HTMLButtonElement;
    this.deleteModalEl = document.getElementById('deleteModal') as HTMLDivElement;
    this.closeToastBtn = document.getElementById('closeToast') as HTMLButtonElement;

    // Custom attach function here!!!
    this.selectYearEl = document.getElementById('selectYear') as HTMLSelectElement;

    this.attach();
    this.renderSumarizedData();

    // Init table
    this._tableId = 'table-orders-status-1';
    this._currentOrderStatus = OrderStatus.UNCONFIRMED;
    this.render(OrderStatus.UNCONFIRMED);

    this.renderChart();
  }

  // Re init
  attach() {
    // super.attach();
    this.tableEl.addEventListener('click', this.clickHandler);
    this.deleteConfirmBtn.addEventListener('click', this.deleteHandler);
    this.closeModalBtn.addEventListener('click', this.hideModal);
    this.updateOrderForm.addEventListener('submit', this.updateOrderHandler);
    this.closeDeleteModalBtn.addEventListener('click', this.hideDeleteModal);

    if (this.tabsListEl) {
      this.tabsListEl.addEventListener('click', this.changeOrdersStatus);
    }
  }

  @autobind
  changeOrdersStatus(e: Event) {
    const clickBtn = e.target as HTMLLinkElement;

    const orderStatus = clickBtn.closest('li')?.dataset.orderStatus;

    if (orderStatus) {
      const result = this.selectedOrderStatus(orderStatus);
      const { status, tableId } = result;
      this._currentOrderStatus = status;
      this.tableEl = document.getElementById(tableId) as HTMLTableElement;

      console.log(this.tableEl);
      console.log('order status: ', status);

      this._tableId = tableId;
      this.render(status);
      this.attach();
    }
  }

  selectedOrderStatus(status: string) {
    switch (status) {
      case 'Waiting to Confirm':
        return {
          status: OrderStatus.UNCONFIRMED,
          tableId: 'table-orders-status-1',
        };
      case 'confirmed':
        return {
          status: OrderStatus.CONFIRMED,
          tableId: 'table-orders-status-2',
        };
      case 'shipping':
        return {
          status: OrderStatus.SHIPPING,
          tableId: 'table-orders-status-3',
        };
      case 'success':
        return {
          status: OrderStatus.SUCCESS,
          tableId: 'table-orders-status-4',
        };
      case 'failed':
        return {
          status: OrderStatus.FAILED,
          tableId: 'table-orders-status-5',
        };
      default:
        return {
          status: OrderStatus.ALL,
          tableId: 'table-orders-status-1',
        };
    }
  }

  createChartByYear(ordersSuccess: OrderInterface[], selectedYear: number) {
    const selectedOrders = ordersSuccess.filter((order: OrderInterface) => {
      const yearOfOrder = new Date(order.createdAt as string).getFullYear();

      return selectedYear === yearOfOrder;
    });

    const monthLabels = [];
    const summarizedData = [];

    for (let i = 1; i <= 12; i++) {
      const currTotalSaleMonth = selectedOrders
        .filter(order => {
          const createdAtMonth = new Date(order.createdAt as string).getMonth() + 1;
          return i === createdAtMonth;
        })
        .reduce((acc, order) => {
          return (
            acc +
            order.products.totalPrice +
            ((order.vatFee as number) || 0) +
            ((order.shippingFee as number) || 0)
          );
        }, 0);

      monthLabels.push('Month ' + i);
      summarizedData.push(currTotalSaleMonth);
    }

    if (this.myChart) {
      this.myChart.destroy();
    }

    this.myChart = new Chart(this.myChartEl, {
      type: 'bar',
      data: {
        labels: monthLabels,
        datasets: [
          {
            label: `Our sale in ${selectedYear}`,
            data: summarizedData,
            borderWidth: 1,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(210,105,30, 0.2)',
              'rgba	(112,128,144, 0.2)',
              'rgba(0,128,128, 0.2)',
              'rgba(46,139,87, 0.2)',
              'rgba(138,43,226, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(210,105,30)',
              'rgb(112,128,144)',
              'rgb(0,128,128)',
              'rgb(46,139,87)',
              'rgb(138,43,226)',
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // Render chart and sales and qty orders by status (confirmed, unconfirm,...)
  renderChart() {
    (async () => {
      try {
        const response = await OrdersApi.getAll({});

        const { orders } = response.data;
        this.ordersSuccess = orders.filter(
          (order: OrderInterface) => order.status === OrderStatus.SUCCESS,
        );

        const qtyOrdersFailed = orders.filter(
          (order: OrderInterface) => order.status === OrderStatus.FAILED,
        ).length;
        const qtyOrdersUnconfirmed = orders.filter(
          (order: OrderInterface) => order.status === OrderStatus.UNCONFIRMED,
        ).length;
        const qtyOrdersConfirmed = orders.filter(
          (order: OrderInterface) => order.status === OrderStatus.CONFIRMED,
        ).length;
        const qtyOrdersShipping = orders.filter(
          (order: OrderInterface) => order.status === OrderStatus.SHIPPING,
        ).length;

        Helper.textContent('failedQty', qtyOrdersFailed);
        Helper.textContent('successQty', this.ordersSuccess.length.toString());
        Helper.textContent('confirmedQty', qtyOrdersConfirmed);
        Helper.textContent('unconfirmedQty', qtyOrdersUnconfirmed);
        Helper.textContent('shippingQty', qtyOrdersShipping);

        this.createChartByYear(this.ordersSuccess, this.selectedYear);

        // Calculate total sales here !!!
        const totalSales = this.ordersSuccess.reduce(
          (acc, order) =>
            acc +
            order.products.totalPrice +
            ((order.vatFee as number) || 0) +
            ((order.shippingFee as number) || 0),
          0,
        );
        this.totalSales = totalSales;

        Helper.textContent('totalSale', `$${totalSales.toFixed(2)} `);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  // @autobind
  // changeChartHandler(e: Event) {

  //     console.log(e.target);

  //     // const selectedYear = e.target as HTMLSelectElement;
  //     // this.selectedYear = +selectedYear.value;
  //     // this.renderChart();
  // }

  renderSumarizedData() {
    (async () => {
      await this.calcTotalProducts();
      this.calcTotalUsers();
      this.calcTotalViews();
    })();
  }

  calcTotalViews() {
    const totalViews = this.products.reduce(
      (acc, product) => acc + ((product.views as number) || 0),
      0,
    );
    this.totalViews = totalViews;
    Helper.textContent('totalViews', totalViews.toString());
  }

  calcTotalUsers() {
    (async () => {
      const response = await UsersApi.getAll();
      const { users } = response.data;
      this.totalUsers = users.length;
      Helper.textContent('totalUsers', users.length);
    })();
  }

  async calcTotalProducts() {
    const response = await ProductsApi.getAll({});
    const { products } = response.data;
    this.products = products;
    this.totalProducts = products.length;
    Helper.textContent('totalProducts', products.length);
  }
}
