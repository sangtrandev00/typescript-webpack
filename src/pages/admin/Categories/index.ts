import DataTables from "datatables.net-dt";
import CategoriesApi from "../../../api/categoriesApi";
import { BACKEND_URL } from "../../../constant/backend-domain";
import { CategoryInterface } from "../../../interface/Category";
import { autobind } from "../../../decorators/autobind";
import ActionBtn from "../../../components/AdminForm/ActionButton";
// import ToastMessage from "../../../components/AdminToast";
import ModalForm from "./components/modalForm";
import AdminBaseComponent from "../AdminComponent";

const templateHTML = `
<!-- Main content wrapper -->
    <main class="p-4 md:ml-64 h-auto pt-20">
        <!-- Start block -->
        <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
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
                                                Type category name          clip-rule="evenodd" />
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
                            <button type="button" id="createCategoryModalButton"
                                data-modal-target="createCategoryModal" data-modal-toggle="createCategoryModal"
                                class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Add Category
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
                    <div id="display-categories" class="overflow-x-auto">
                        <table id="table-categories"
                            class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-4 py-4">ID</th>
                                    <th scope="col" class="px-4 py-4">Category name</th>
                                    <th scope="col" class="px-4 py-3">image</th>
                                    <th scope="col" class="px-4 py-3">Description</th>
                                    <th scope="col" class="px-4 py-3">Qty products</th>
                                    <th scope="col" class="px-4 py-3">Action</th>
                                    <th scope="col" class="px-4 py-3">
                                        <span class="sr-only">Actions</span>
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
        <div id="CategoryModal" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[rgba(0,0,0,0.5)]">
            
        </div>

        <!-- Delete modal -->
        <div id="deleteModal" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[rgba(0,0,0,0.5)]">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <button type="button" id="closeDeleteModal"
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
                        <button id="delete-cate-btn" type="submit"
                            class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">Yes,
                            I'm sure</button>
                    </div>
                </div>
            </div>
        </div>

        <button class="hidden" type="button" id="updateCategoryBtn" data-modal-target="updateCategoryModal"
            data-modal-toggle="updateCategoryModal">Update Product Modal Button</button>
        <button class="hidden" type="button" id="deleteCategoryBtn" data-modal-target="deleteModal"
            data-modal-toggle="deleteModal">Update Product Modal Button</button>

    </main>
`;
export default class Categories extends AdminBaseComponent{


    constructor() {
        super(
        'category',
        'table-categories', 
        'createCategoryModal', 
        'toast-success', 
        'createCategoryModalButton', 
        'closeModalForm',
        'closeToast',
        'deleteCategoryBtn',
        'delete-cate-btn',
        'add-cate-form',
        );

    }

    render() : void {
        const renderCategoriesList = async () => {
        
            try {

            const response = await CategoriesApi.getAll();
            const {categories} = response.data;
            const tableHtml = categories.map((category: CategoryInterface) => {
            
            const {
                  _id,
                  name,
                  cateImage,
                  description,
                } = category;
        
                const cateImageHtml = `<img class="w-10 h-10 object-cover" src="${BACKEND_URL}/${cateImage}" alt="${name}" />`;
                const editBtn = (new ActionBtn('update-modal-trigger','category',_id as string, 'button', 'fa-solid fa-pen-to-square text-primary-700', 'Edit' )).component;
                const deleteBtn = (new ActionBtn('delete-modal-trigger','category',_id as string, 'button', 'fa-solid fa-delete-left text-red-600', '' )).component;
                
                return [
                  `<p class="truncate-id">${_id}</p>`,
                  name,
                  cateImageHtml,
                  description,
                  0,
                  `

                  <div class="flex space-x-2 w-10 h-full">
                    ${editBtn}
                    ${deleteBtn}
                  </div>
                  `,
                ];
             
              });
        
              this.dataTable =  new DataTables("#table-categories", {
                data: tableHtml,
                columns: [
                  { title: "ID" },
                  { title: "Category name" },
                  { title: "image" },
                  { title: "Description" },
                  { title: "Qty products" },
                  { title: "Action" },
                ],
              });
            } catch (error) {
              console.log(error);
            }
          };

        renderCategoriesList();
    }

    // attach(): void {
    //     // this.FormEl.addEventListener('submit', this.submitHandler);
    //     this.tableEl.addEventListener('click', this.clickHandler);
    //     this.createBtn.addEventListener('click', this.addHandler);
    //     this.deleteConfirmBtn.addEventListener('click', this.deleteHandler);
    //     // this.closeFormModalBtn.addEventListener('click', this.closeFormModal);
        
    // }

    @autobind 
    submitHandler(e: Event) {
        e.preventDefault();
        const CategoryForm = e.target as HTMLFormElement;

        const typeForm = CategoryForm.getAttribute('id');

        // Add/update category logic
        (async () => {
            const elements = (CategoryForm).elements as unknown as {
                [key: string]: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
              };
              let cateImage: File | undefined;
    
              if (elements["cateImage"]) {
                cateImage = (elements["cateImage"] as HTMLInputElement).files?.[0];
              }
    
              const name = elements["name"].value as string;
              const description = elements["description"].value as string;
              
              const formData = new FormData();
              formData.append("name", name);
              
              if(cateImage) {
                  formData.append("cateImage", cateImage);
              }
              formData.append("description", description);

              try {
                let response: any;
                if(typeForm === "update-cate-form") {
                    
                    const oldImage = elements['oldImage'].value as string;
                    formData.append("oldImage", oldImage);

                    // Update cate call API
                    response = await CategoriesApi.update(formData, this._currentId);

                }else {
                    // Add cate Call API
                    response = await CategoriesApi.add(formData);
                }

                console.log(response.data);
                const {message} = response.data;
                

                // Handle add toast here!!

                this.clearTableData();
                this.render();
                this.closeFormModal();                
                this.showToast('success', 'Success', message);

                // Show Toast to notify here
              } catch (error) {
                
              }


        })()

    }

    // @autobind
    // clickHandler(e: Event) {
    //     e.preventDefault();

    //     console.log(e.target);

    //     const targetEl = e.target as HTMLElement;

    //     const btnEl = targetEl.closest('button')! as HTMLButtonElement;
    //     if(btnEl) {
    //         this._currentId = btnEl?.getAttribute('category-id') as string ;
    //     }

    //     // Edit
    //     if (
    //         targetEl &&
    //         targetEl.matches("button, button i") &&
    //         targetEl.classList.contains("update-modal-trigger")
    //       ) {
    //         this.editHandler();
    //     }

    //     // Delete
    //     if (
    //         targetEl &&
    //         targetEl.classList.contains("delete-modal-trigger") &&
    //         targetEl.matches("button, button i")
    //       ) {
    //         this.toggleDeleteModal();
    //       }

    // }


    // toggleDeleteModal() {
    //     this.triggerModalDeleteBtn.click();
    // }
    clearInputs() {

    }

    @autobind
    deleteHandler() {

        (async() => {
            try {
                const response = await CategoriesApi.delete(this._currentId);
                this.hideDeleteModal();
                this.clearTableData();
                this.render();
                const {message, categoryId} = response.data;

                this.showToast('warning', `Delete #id: ${categoryId}`, message);

              } catch (error) {
                console.log(error);
    
                // Handle error here
              }
        })()

        
    }

    // showModal(type: string) {
    //     this.modalFormEl = document.getElementById('CategoryModal') as HTMLDivElement;
    //     this.modal = new Modal(this.modalFormEl);
    //     this.modal.show();
    //     this.closeFormModalBtn = document.getElementById('closeModalForm') as HTMLButtonElement;
    //     this.closeFormModalBtn.addEventListener('click', this.hideModal);
    //     this.FormEl = document.getElementById(`${type}-cate-form`) as HTMLFormElement;
    //     this.FormEl.addEventListener('submit', this.submitHandler);
    // }

    // showToast(type = "primary", title = 'Add Category', message = 'Add Category Successfully!', minutes = '1 minutes') {

    //     console.log(type, title, message, minutes);

    //     this.toastMsg = new ToastMessage(type, title, message , minutes);
    //     this.closeToastBtn = document.getElementById('closeToast') as HTMLButtonElement;
    //     this.closeToastBtn.addEventListener('click', this.hideToast);
    //     this.toastMsg.show();
    // }


    @autobind
    addHandler() {
        new ModalForm('add');
        this.showModal('add');
    }

    @autobind
    editHandler() {
        console.log("Edit Category!!!");
        console.log(this._currentId);
        
        new ModalForm('update');
        this.showModal('update');

        const CategoryForm = document.getElementById('update-cate-form') as HTMLFormElement;

            (async() => {
                try {

                    const response = await CategoriesApi.getById(this._currentId);
                    const {category} = response.data;
    
                    const { name, description, cateImage } = category;
                    const elements = CategoryForm.elements as unknown as {
                        [key: string]: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
                      };
    
                   elements["name"].value = name;
                   elements["description"].textContent = description;
                   elements["oldImage"].value = cateImage;

                } catch (error) {
                    console.log(error);
                }

            })()
    }

    get component() {
        return templateHTML;
    }


}