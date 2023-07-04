// import DataTables from "datatables.net-responsive-dt";
import DataTables from "datatables.net-dt";
import ProductsApi from "../../../api/productsApi";
import { Productable } from "../../../interface/Product";
import { BACKEND_URL } from "../../../constant/backend-domain";
import { autobind } from "../../../decorators/autobind";
import ModalForm from "./components/ModalForm";
import AdminBaseComponent from "../AdminComponent";
import Editor from "./components/Editor";
import CategoriesApi from "../../../api/categoriesApi";
import { CategoryInterface } from "../../../interface/Category";

//@ts-ignore
import JustValidate from 'just-validate';
// import { BACKEND_URL } from "../../../constant/backend-domain";

const templateHTML = `
<!-- Main content wrapper -->
<main class="p-4 md:ml-64 h-auto pt-20">
    <!-- Start block -->
    <section class="bg-gray-50 dark:bg-gray-900 px-3 sm:px-5 antialiased">
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
            <!-- Start coding here -->
            <div id="products-display"
                class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div
                    class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">

                    <div
                        class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <button type="button" id="ProductModalButton"
                            data-modal-target="ProductModal" data-modal-toggle="ProductModal"
                            class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                            <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>
                            Add product
                        </button>
                        
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table id="table-products"
                        class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr class="">
                                <th scope="col" class="px-4 py-4">#ID</th>
                                <th scope="col" class="px-4 py-4">Product name</th>
                                <th scope="col" class="px-4 py-4">Image</th>
                                <th scope="col" class="px-4 py-3">Category</th>
                                <!-- <th scope="col" class="px-4 py-3">Description</th> -->
                                <th scope="col" class="px-4 py-3">Price</th>
                                <th scope="col" class="px-4 py-3">Discount</th>
                                <th scope="col" class="px-4 py-3">Sold</th>
                                <th scope="col" class="px-4 py-3">Stock</th>
                                <th scope="col" class="px-4 py-3">
                                    Action
                                    <!-- <span class="sr-only">Actions</span> -->
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
    <div id="ProductModal" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        
        </div>
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
                    <button id="delete-product-btn" type="submit"
                        class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">Yes,
                        I'm sure</button>
                </div>
            </div>
        </div>
    </div>

    <button class="hidden" type="button" id="updateProductBtn" data-modal-target="updateProductModal"
        data-modal-toggle="updateProductModal">Update Product Modal Button</button>
    <button class="hidden" type="button" id="deleteProductBtn" data-modal-target="deleteModal"
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
export default class Products extends AdminBaseComponent{
    validator: any;
    fullDescEditor: any;
    shortDescEditor: any;

    constructor() {
        super(
            'product',
            'table-products',
             'createProductModal', 
             'toast-success', 
             'ProductModalButton', 
             'closeModalForm', 
             'closeToast', 
             'deleteProductBtn', 
             'delete-product-btn', 
             'add-product-form'
            );

        this.tableEl.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        })

    }

    // override method
    render() : void {
        const renderProductsList = async () => {
            try {
              const response = await ProductsApi.getAll({});
          
            const {products} = response.data;

              const tableRows = products.map((product : Productable) => {
                
                const {
                  _id,
                  name,
                  oldPrice,
                  thumbnail,
                  stockQty,
                  categoryId,
                  discount,
                } = product;

                let imageUrl;

                if (thumbnail) {
                  imageUrl = thumbnail.startsWith("http") ? thumbnail : `${BACKEND_URL}/${thumbnail}`;
                } else {
                  imageUrl = `https://placehold.co/358x358`;
                }
          
                const imageHtml = `<img src="${imageUrl}" alt="${name}" class="w-12 h-12 object-cover" />`;

                return [
                  `<p class="truncate-id">${_id}</p>`,
                  name,
                  imageHtml,
                  categoryId,
                  oldPrice,
                  discount,
                  0,
                  stockQty,
                  `
                  <div class="flex space-x-2 w-10 h-full">
                    <button class="update-modal-trigger" product-id="${_id}" type="button">
                      <i class="update-modal-trigger fa-solid fa-pen-to-square text-primary-700"></i>
                      Edit
                    </button>
                    <button class="delete-modal-trigger" product-id="${_id}" type="button">
                      <i class="delete-modal-trigger fa-solid fa-delete-left text-red-600"></i>
                      Delete
                    </button>
                   
                  </div>
                  `,
                ];
              });
              this.clearTableData();
              this.dataTable = new DataTables("#table-products", {
                dom: '<"top"<"row"<"col-md-6"l><"col-md-6 text-right"f>>B>rt<"bottom"p>',
                data: tableRows,
                columns: [
                  { title: "ID" },
                  { title: "Name" },
                  { title: "Image" },
                  { title: "Category" },
                  { title: "Old Price" },
                  { title: "Discount" },
                  { title: "Rating" },
                  { title: "Stock Qty" },
                  { title: "Actions" },
                ],
              });
            } catch (error) {
              console.log(error);
            }
          };

          renderProductsList();
    }

    @autobind
    submitHandler(e: Event) {

        e.preventDefault();

        // Add/update category logic
        (async () => {
            
            const ProductForm = e.target as HTMLFormElement;

            const typeForm = ProductForm.getAttribute('id');
    
            const shortDesc = this.shortDescEditor.getData;
    
            const fullDesc = this.fullDescEditor.getData;
    
            const elements = (ProductForm).elements as unknown as {
                [key: string]: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLAreaElement | File
              };
    
              let images: File[] | any;
    
              if (elements["images"]) {
                images = (elements["images"] as HTMLInputElement).files;
              }
    
              const name = (elements["name"] as HTMLInputElement).value as string;
              const stockQty = (elements["quantity"] as HTMLInputElement).value as string;
              const oldPrice = (elements["price"] as HTMLInputElement).value as string;
              const categoryId = (elements["category"] as HTMLSelectElement).value as string;
              const discount = (elements["discount"] as HTMLSelectElement).value as string;
    
              const formData = new FormData();
    
              formData.append("name", name);
              formData.append("stockQty", stockQty);
              formData.append("oldPrice", oldPrice);
              formData.append('shortDesc', shortDesc);
              formData.append('fullDesc', fullDesc);
              formData.append('categoryId', categoryId);
              formData.append('discount', discount);
    
                console.log(images);
    
              for (let i = 0; i < images.length; i++) {
                formData.append("images[]", images[i]);
              }
    
              console.log(this.validator);
              
              console.log(this.validator.isValid);
    
              if(!this.validator.isValid) return; 

              try {

                let response: any;

                if(typeForm === "update-product-form") {
                    
                    const oldImage = (elements['oldImages'] as HTMLInputElement).value as string;
                    
                    formData.append("oldImages", oldImage);

                    // Update cate call API
                    response = await ProductsApi.update(formData, this._currentId);

                }else {
                    // Add cate Call API
                    response = await ProductsApi.add(formData);
                }

                console.log(response.data);
                const {message} = response.data;

                // Handle add toast here!!

                this.render();
                this.closeFormModal();                
                this.showToast('success', 'Success', message);
                this.removeBackdrop();
                // Show Toast to notify here
              } catch (error) {
                
                console.log(error);
              }

        })()

    }

    configEditorData() {
        this.shortDescEditor = new Editor('#shortDescription');
        this.fullDescEditor = new Editor('#fullDescription');
    }


    async renderCateList () {
            const selectElement = document.getElementById("categorySelectId")! as HTMLSelectElement;
            console.log(selectElement);
            const response = await CategoriesApi.getAll();
            
            const {categories} = response.data;

            const categoryHtmls = categories.map((cate: CategoryInterface) => {
              return `
                <option value="${cate._id}">${cate.name}</option>
              `;
            });
            categoryHtmls.unshift(`<option value="">Select Category</option>`);
          
            selectElement.innerHTML = categoryHtmls;
    };

    @autobind
    // CRUD
    addHandler(): void {
        new ModalForm('add');
        this.showModal('add');
          // get editor Value
        this.configEditorData();

        this.formValidator("add-product-form");
      
       (async () => {
        await this.renderCateList();
       })()

    }


    @autobind
    editHandler(): void {
        new ModalForm('update');
        this.showModal('update');

        this.configEditorData();

        const updateProductForm = document.getElementById('update-product-form') as HTMLFormElement;

        (async () => {

            try {
                const response = await ProductsApi.getById(this._currentId);
                const {product} = response.data;

                const {name, discount, stockQty, oldPrice, categoryId, images, shortDesc, fullDesc} =
                  product;
        
                // const selectCateEl = document.querySelector("#update-product-form #categorySelectId");
                // await renderCateList(selectCateEl);
                const elements = updateProductForm.elements as unknown as {
                    [key: string]: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
                  };

                await this.renderCateList();

                elements["name"].value = name;
                elements["quantity"].value = stockQty;
                elements["price"].value = oldPrice;
                elements["discount"].value = discount;
                elements["category"].value = categoryId;
                elements["oldImages"].value = images;
                this.shortDescEditor.setData = shortDesc;
                this.fullDescEditor.setData = fullDesc;
  
              } catch (error) {
                console.log(error);
              }

        })()

        this.formValidator('update-product-form');
        this.validator.removeField("#images");
    }

    @autobind
    deleteHandler(): void {
        (async() => {
            try {
                const response = await ProductsApi.delete(this._currentId);
                
                // Remove out of DOM

                console.log(response.data);

                const {message, productId} = response.data;
             
                this.showToast('success', `Delete #id: ${productId}`, message);
                this.hideDeleteModal();
                this.render();
                this.removeBackdrop();
                // Remove product from DOM here!!!
                // Should i use websocket.io ?
              } catch (error) {
                console.log(error);
              }
        })()
    }

    get component() {
        return templateHTML;
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
        .addField("#quantity", [
            {
                rule: "required",
            },
            {
                rule: "minNumber",
                value: 1,
                errorMessage: "Quantity must be greater than 0"                
            }
        ])
        .addField("#price", [
            {
                rule: "required",
            },
            {
                rule: "minNumber",
                value: 1,
                errorMessage: "Price must be greater than 0"
            }
        ])
        .addField("#discount", [
            {
                rule: "required",
            },
            {
                rule: "minNumber",
                value: 0,
                errorMessage: "Discount must be greater or equal than 0"
            }
        ])
        .addField("#categorySelectId", [
            {
                rule: "required",
            },
        ])
        .addField("#images", [
            {
                rule: "minFilesCount",
                value: 1
            },
        ])
        // Wrong here!!!
        // .addField("#shortDescription ", [
        //     {
        //         rule: "required",
        //     },
        //     {
        //         rule: "minLength",
        //         value: 10
        //     }
        // ]).
        // addField("#fullDescription", [
        //     {
        //         rule: "required",
        //     },
        //     {
        //         rule: "minLength",
        //         value: 10
        //     }
        // ])
        
    }

    removeBackdrop() {
        const modalBackdropEl = document.querySelector("div[modal-backdrop]") as HTMLDivElement;
        if(modalBackdropEl) {
            modalBackdropEl.remove();
        }
    }

}