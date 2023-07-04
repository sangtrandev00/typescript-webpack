import UsersApi from "../../../api/userApi";
// import Component from "../../../components/base-component";
import { BACKEND_URL } from "../../../constant/backend-domain";
import { UserInterface } from "../../../interface/User";
import DataTables from "datatables.net-dt";
import AdminBaseComponent from "../AdminComponent";
import ModalForm from "./components/ModalForm";
import { autobind } from "../../../decorators/autobind";
//@ts-ignore
import JustValidate from 'just-validate';

const templateHTML = `
<!-- Main content wrapper -->
<main class="p-4 md:ml-64 h-auto pt-20">
    <!-- Start block -->
    <section class="bg-gray-50 dark:bg-gray-900 antialiased">
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div
                    class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div class="w-full md:w-1/2">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div
                                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor" viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Search" required="">
                            </div>
                        </form>
                    </div>
                    <div
                        class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <button type="button" id="UserModalButton" data-modal-target="UserModal"
                            data-modal-toggle="UserModal"
                            class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                            <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>
                            Add User
                        </button>
                        <div class="flex items-center space-x-3 w-full md:w-auto">
                            <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown"
                                class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                type="button">
                                <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                                Actions
                            </button>
                            <div id="actionsDropdown"
                                class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="actionsDropdownButton">
                                    <li>
                                        <a href="#"
                                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass
                                            Edit</a>
                                    </li>
                                </ul>
                                <div class="py-1">
                                    <a href="#"
                                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete
                                        all</a>
                                </div>
                            </div>
                            <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown"
                                class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                    class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                                        clip-rule="evenodd" />
                                </svg>
                                Filter
                                <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </button>
                            <div id="filterDropdown"
                                class="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Category
                                </h6>
                                <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                    <li class="flex items-center">
                                        <input id="apple" type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="apple"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple
                                            (56)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="fitbit" type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="fitbit"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Fitbit
                                            (56)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="dell" type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="dell"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Dell
                                            (56)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="asus" type="checkbox" value="" checked=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="asus"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Asus
                                            (97)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="logitech" type="checkbox" value="" checked=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="logitech"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Logitech
                                            (97)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="msi" type="checkbox" value="" checked=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="msi"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">MSI
                                            (97)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="bosch" type="checkbox" value="" checked=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="bosch"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Bosch
                                            (176)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="sony" type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="sony"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Sony
                                            (234)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="samsung" type="checkbox" value="" checked=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="samsung"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Samsung
                                            (76)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="canon" type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="canon"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Canon
                                            (49)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="microsoft" type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="microsoft"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft
                                            (45)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="razor" type="checkbox" value=""
                                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="razor"
                                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor
                                            (49)</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="display-users" class="overflow-x-auto">
                    <table id="table-users"
                        class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-4 py-4">#ID</th>
                                <th scope="col" class="px-4 py-4">User Name</th>
                                <th scope="col" class="px-4 py-4">Avatar</th>
                                <th scope="col" class="px-4 py-4">Provider Id</th>
                                <th scope="col" class="px-4 py-4">Email</th>
                                <th scope="col" class="px-4 py-4">Phone</th>
                                <th scope="col" class="px-4 py-3">Address</th>
                                <th scope="col" class="px-4 py-3">Role</th>
                                <th scope="col" class="px-4 py-3">Payment</th>
                                <th scope="col" class="px-4 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        
                    </table>
                </div>

            </div>
        </div>
    </section>
    <!-- End block -->
    <!-- Create/Edit modal -->
    <div id="UserModal" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        
    </div>

    <!-- Delete modal -->
    <div id="deleteModal" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <button id="closeDeleteModal" type="button"
                    class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="deleteModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <svg class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true"
                    fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd" />
                </svg>
                <p class="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?
                </p>
                <div class="flex justify-center items-center space-x-4">
                    <button data-modal-toggle="deleteModal" type="button"
                        class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
                        cancel</button>
                    <button id="delete-user-btn" type="submit"
                        class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">Yes,
                        I'm sure</button>
                </div>
            </div>
        </div>
    </div>


    <button class="hidden" type="button" id="updateUserBtn" data-modal-target="updateUserModal"
        data-modal-toggle="updateUserModal">Update Product Modal Button</button>
    <button class="hidden" type="button" id="deleteUserBtn" data-modal-target="deleteModal"
        data-modal-toggle="deleteModal">Update Product Modal Button</button>

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

export default class Users extends AdminBaseComponent{
    validator: any;

    constructor() {

        super('user', 
        'table-users', 
        'UserModal', 
        'toast-success', 
        'UserModalButton', 
        'closeModalForm', 
        'closeToast', 
        'deleteUserBtn', 
        'delete-user-btn', 
        'add-user-form' )

        this.tableEl.scrollIntoView({
            behavior: "smooth",
            block: "center",
        })
    }

    render(): void {
        const renderUsersList = async () => {
            try {
              const response = await UsersApi.getAll();
        
              const {users} = response.data;

              const tableRows = users.map((user: UserInterface) => {
                const { _id, name, avatar, email, phone, address, role, payment, providerId } = user;
                let avatarHtml;
                if (avatar?.startsWith("http")) {
                  avatarHtml = `<img class="h-12 w-12 object-cover" src="${avatar}" alt="${name}" />`;
                } else {
                  avatarHtml = `<img class="h-12 w-12 object-cover" src="${BACKEND_URL}/${avatar}" alt="${name}" />`;
                }
                return [
                  `<p class="truncate-id">${_id}</p>`,
                  `<p class="truncate-text">${name || ""}</p>`,
                  avatarHtml,
                  providerId || "",
                  email || "",
                  phone || "",
                  `<p class="truncate-text">${address || ""}</p>`,
                  role || "client",
                  payment,
                  `
                  <div class="flex space-x-2 w-10 h-full">
                    <button class="update-modal-trigger" user-id="${_id}" type="button">
                      <i class="update-modal-trigger fa-solid fa-pen-to-square text-primary-700"></i>
                      Edit
                    </button>
                    <button class="delete-modal-trigger" user-id="${_id}" type="button">
                      <i class="delete-modal-trigger fa-solid fa-delete-left text-red-600"></i>
                      Delete
                    </button>
                  
                  </div>
                  `,
                ];

              });

              this.clearTableData();
        
              this.dataTable = new DataTables("#table-users", {
                data: tableRows,
                columns: [
                  { title: "ID" },
                  { title: "User Name" },
                  { title: "Avatar" },
                  { title: "ProviderId" },
                  { title: "Email" },
                  { title: "Phone" },
                  { title: "Address" },
                  { title: "Role" },
                  { title: "Payment" },
                  { title: "Actions" },
                ],
              });
            } catch (error) {
              console.log(error);
            }
          };

          renderUsersList();
    }

    @autobind
    submitHandler(e: Event): void {
        e.preventDefault();
        const UserForm = e.target as HTMLFormElement;

        const typeForm = UserForm.getAttribute('id');

        (async () => {
            const elements = (UserForm).elements as unknown as {
                [key: string]: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
              };

              let avatarImage: File | undefined;
    
              if (elements["avatar"]) {
                avatarImage = (elements["avatar"] as HTMLInputElement).files?.[0];
              }
    
              const name = elements["name"].value as string;
              const email = elements["email"].value as string;
              const phone = elements["phone"].value as string;
              const address = elements["address"].value as string;
              const password = elements["password"].value as string;
              const role = elements["role"].value as string;
              
            //   Validate here ???


              const formData = new FormData();

              formData.append("name", name);
              formData.append("email", email);
              formData.append("phone", phone);
              formData.append("address", address);
              formData.append("password", password);
              formData.append("role", role);

              if(avatarImage) {
                  formData.append("avatar", avatarImage);
              }


              console.log("validator: ", this.validator.isValid);

              if(!this.validator.isValid) return;

              try {
                let response: any;
                if(typeForm === "update-user-form") {
                    
                    const oldAvatar = elements['oldAvatar'].value as string;
                    formData.append("oldAvatar", oldAvatar);

                    // Update cate call API
                    response = await UsersApi.update(formData, this._currentId);

                }else {
                    // Add cate Call API
                    response = await UsersApi.add(formData);
                }

                console.log(response.data);
                const {message} = response.data;

                // Handle add toast here!!

                this.render();
                this.closeFormModal();                
                this.showToast('success', 'Success', message);


                console.log(this.toastMsgEl);

                // Show Toast to notify here
              } catch (error) {
                
              }

        })()

    }

    @autobind
    deleteHandler(): void {
        (async() => {
            try {
                const response = await UsersApi.delete(this._currentId);

                const {message, userId} = response.data;
                
                this.render();
                this.hideDeleteModal();
                this.showToast('success', `Delete #id: ${userId}`, message);
                
                // Should i use websocket.io ?
    
              } catch (error) {
                console.log(error);
              }
        })()
    }
    @autobind
    addHandler(): void {
        new ModalForm('add');
        this.showModal('add');

        this.formValidator('add-user-form');
    }

    @autobind
    editHandler(): void {

        new ModalForm('update');
        this.showModal('update');

        const UserForm = document.getElementById('update-user-form') as HTMLFormElement;

        (async() => {
                try {

                    const response = await UsersApi.getById(this._currentId);
                    const {user} = response.data;
    
                    const { name, avatar, email, phone, address, password, role } = user;
                    
                    const elements = UserForm.elements as unknown as {
                        [key: string]: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
                      };
    
                   elements["name"].value = name;
                   elements["oldAvatar"].value = avatar;
                   elements["email"].value = email;
                   elements["phone"].value = phone;
                   elements["address"].value = address;
                   elements["password"].value = password;
                   elements["role"].value = role;

                   console.log(role);
                } catch (error) {
                    console.log(error);
                }

            })();

        this.formValidator('update-user-form');
        this.validator.removeField("#avatar");
    }


    formValidator(formId: string) {
        this.validator = new JustValidate(`#${formId}`, {
            validateBeforeSubmitting: true,
        });
        
        this.validator
        .addField("#name", [
            {
                rule: "required",
            }, 
            {
                rule: "minLength",
                value: 3,
            }
        ])
        .addField("#email", [
            {
                rule: "required",
            },
            {
                rule: "email"
            }
        ])
        .addField("#phone", [
            {
                rule: "required",
            },
            {
                rule: "minNumber",
                value: 10,
                errorMessage: "Phone number is not correct at least 10 number"
            },
         
        ])
        .addField("#address", [
            {
                rule: "required",
            },
            {
                rule: "minLength",
                value: 3,
            }
        ])
        .addField("#password", [
            {
                rule: "required",
            },
            {
                rule: "minLength",
                value: 8
            },
       
        ])
        .addField("#avatar", [
            {
                rule: "minFilesCount",
                value: 1
            },
        ])
        .addField("#role ", [
            {
                rule: "required",
            },
        ])
        
    }

    get component() {
        return templateHTML;
    }


}