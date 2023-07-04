import DataTables from "datatables.net-dt";
import { OrderInterface } from "../../../interface/Order";
import OrdersApi from "../../../api/orderApi";
import { autobind } from "../../../decorators/autobind";
import Component from "../../../components/base-component";
import { Modal } from "flowbite";
import Helper from "../../../util/helper";
import { BACKEND_URL } from "../../../constant/backend-domain";
import { OrderStatus } from "../../../interface/Order";
import Utilities from "./components/Utilites";
import ToastMessage from "../../../components/AdminToast";

const templateHTML = `
<!-- Main content wrapper -->
            <main class="p-4 md:ml-64 h-auto pt-20">
                <!-- Start block -->
                <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
                    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
                        <!-- Start coding here -->
                        <div id="display-order"
                            class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                            <div class="overflow-x-auto">
                                <table id="table-orders"
                                    class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead
                                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-4 py-4">#ID</th>
                                            <th scope="col" class="px-4 py-4">Customer</th>
                                            <th scope="col" class="px-4 py-4">Total($)</th>
                                            <th scope="col" class="px-4 py-3">Status</th>
                                            <th scope="col" class="px-4 py-3">Payment method</th>
                                            <th scope="col" class="px-4 py-3">Date order</th>
                                            <th scope="col" class="px-4 py-3">Qty (items)</th>
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

               ${Utilities.component}
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

export default class Orders extends Component<HTMLDivElement>{
    tableEl: HTMLTableElement;
    _tableId: string = "table-orders";
    _currentOrderStatus: OrderStatus = OrderStatus.ALL;
    _currentId: string = "";
    dataTable: any;
   
    modalEl!: HTMLDivElement;
    viewDetailTableCartEl: HTMLDivElement;
    deleteConfirmBtn: HTMLButtonElement;
    closeDeleteModalBtn: HTMLButtonElement;
    closeModalBtn: HTMLButtonElement;
    updateOrderForm!: HTMLFormElement;
    deleteModalEl: HTMLDivElement;
    closeToastBtn: HTMLButtonElement;

    modal!: Modal;
    deleteModal?: Modal;
    toastMsg?: ToastMessage;
    constructor(hostElId: string  = "admin-content") {
        super(
            hostElId
        )

        this.hostEl.innerHTML = this.component || templateHTML;
        
        this.hostEl.scrollIntoView({
            behavior: 'smooth',
            block: "center",
        })

        this.render(OrderStatus.ALL);

        this.tableEl = document.getElementById(this._tableId) as HTMLTableElement;
        this.viewDetailTableCartEl = document.getElementById('view-detail-cart') as HTMLDivElement;
        this.deleteConfirmBtn = document.getElementById('deleteOrderBtn') as HTMLButtonElement;
        this.closeModalBtn = document.getElementById('closeModalBtn') ! as HTMLButtonElement;
        this.closeDeleteModalBtn = document.getElementById('closeDeleteModal') ! as HTMLButtonElement
        this.updateOrderForm = document.getElementById('update-order-form') as HTMLFormElement;
        this.deleteModalEl = document.getElementById('deleteModal') as HTMLDivElement;
        this.closeToastBtn = document.getElementById('closeToast') as HTMLButtonElement;

        this.attach();

    }       

    attach() {
        this.tableEl.addEventListener('click', this.clickHandler);
        this.deleteConfirmBtn.addEventListener('click', this.deleteHandler);
        this.closeModalBtn.addEventListener('click', this.hideModal);
        this.updateOrderForm.addEventListener('submit', this.updateOrderHandler);
        this.closeDeleteModalBtn.addEventListener('click', this.hideDeleteModal);
        
    }

    render(orderStatus: OrderStatus = OrderStatus.ALL ) {
        const renderOrderList = async () => {
            try {
              const response = await OrdersApi.getAll({});
              const {orders} = response.data;
            //   tableBody.innerHTML = "";
            let filteredOrders = [];
            
            orderStatus = this._currentOrderStatus;

            if(orderStatus !== OrderStatus.ALL) {
                filteredOrders = orders.filter((order: OrderInterface) => orderStatus === order.status);
            }else {
                filteredOrders = orders;
            }

            // console.log("order status: ", orderStatus);

            // console.log("filtered orders: ", filteredOrders);

              const tableRows = filteredOrders.map((order: OrderInterface) => {
                const {
                  _id,
                  paymentMethod,
                  status,
                  user: { fullName },
                  products: { items, totalPrice },
                  createdAt,
                } = order;
          
                const cartLength = items.reduce((acc, item) => acc + (item?.qty as number || 0), 0);
          
                return [
                  `<p class="truncate-id">${_id}</p>`,
                  fullName,
                  totalPrice.toFixed(2),
                  status,
                  paymentMethod,
                  `<p class="truncate-text">${createdAt}</p>`,
                  cartLength,
                  `
                  <div class="flex space-x-2 w-30 h-full py-2 px-2">
                    <button class="update-modal-trigger" order-id="${_id}" type="button">
                      <i class="update-modal-trigger fa-solid fa-pen-to-square text-primary-700"></i>
                      Update
                    </button>
                    <button class="view-detail-modal-trigger" order-id="${_id}" type="button">
                    <i class="view-detail-modal-trigger fa-regular fa-eye text-secondary-700"></i>
                      View
                    </button>
                    <button class="delete-modal-trigger" order-id="${_id}" type="button">
                      <i class="delete-modal-trigger fa-solid fa-delete-left text-red-600"></i>
                      Delete
                    </button>
                   
                  </div>
                  
                  `,
                ];

              });

            this.clearTableData();
          
            console.log("render at table: ", this._tableId);

            this.dataTable =   new DataTables(`#${this._tableId}`, {
                data: tableRows,
                columns: [
                  { title: "#ID" },
                  { title: "Customer" },
                  { title: "Total($)" },
                  { title: "Status" },
                  { title: "Payment method" },
                  { title: "Date order" },
                  { title: "Qty (items)" },
                  { title: "Action" },
                ],
              });
            } catch (error) {
              console.log(error);
            }
          };
        renderOrderList();
    }

    @autobind
    clickHandler(e: Event) {
        e.preventDefault();
        const targetEl = e.target as HTMLElement;
        
        const btnEl = targetEl.closest('button')! as HTMLButtonElement;

        if(btnEl) {
            this._currentId = btnEl?.getAttribute(`order-id`) as string ;
        }

        // Edit
        if (
            targetEl &&
            targetEl.matches("button, button i") &&
            targetEl.classList.contains("update-modal-trigger")
          ) {
            this.showModal('updateOrderModal');
            this.editHandler();
        }

        // View Detail

        if(targetEl && targetEl.classList.contains("view-detail-modal-trigger") && targetEl.matches("button, button i")) {
            this.viewDetail();
        }

        // Delete
        if (
            targetEl &&
            targetEl.classList.contains("delete-modal-trigger") &&
            targetEl.matches("button, button i")
          ) {

            console.log("trigger delete modal!");
            
            this.showDeleteModal();
          }

    }

    @autobind
    deleteHandler(): void {
        console.log("id: ", this._currentId);

        (async() => {
            try {
                const response = await OrdersApi.delete(this._currentId);
                // Remove out of DOM

                console.log(response.data);

                const {message, orderId} = response.data;
             
                this.showToast('success', `Delete #id: ${orderId}`, message);
                this.hideDeleteModal();
                this.render();

                // Should i use websocket.io ?
              } catch (error) {
                console.log(error);
              }
        })()

    }
   
    editHandler(): void {

        console.log("edit handler: ", this._currentId);

        (async () => {

            try {
                const response = await OrdersApi.getById(this._currentId);

                console.log("response: ", response);

                const {
                  user: { fullName, email },
                  status,
                } = response.data.order;
        
                const elements = this.updateOrderForm.elements as unknown as {
                    [key: string]: HTMLInputElement  | HTMLSelectElement
                };

                console.log(elements["name"]);
                console.log(elements["email"]);
                console.log(elements["currStatus"]);
        
                elements["name"].value = fullName;
                elements["email"].value = email;
                elements["currStatus"].value = status;
             
              } catch (error) {
                console.log(error);
              }

        })()

    }

    @autobind
    updateOrderHandler(e: Event): void {
        e.preventDefault();

        const updateFormEl =  e.target as HTMLFormElement;

        console.log(updateFormEl);

        (async () => {

            try {
      
                const updatedOrderStatus = (updateFormEl.querySelector("select[name='category']") as HTMLInputElement).value;
      
                const response = await OrdersApi.updateOrderStatus({ status: updatedOrderStatus }, this._currentId);
      
                console.log(response.data);

                const {orderId, message} = response.data;
                
                this.render(this._currentOrderStatus);

                this.hideModal();

                this.removeBackdrop();

                this.showToast("success", `Update #id: ${orderId}`, message);

            } catch (error) {
                
                console.log(error);
            }

        })()
    }


    whichStatusOrder(status: string) {
        switch (status) {
            case "success":
                return OrderStatus.SUCCESS;                
            case "failed":
                return OrderStatus.FAILED;                
            case "shipping":
                return OrderStatus.SHIPPING;                
            case "confirmed":
                return OrderStatus.CONFIRMED;                
            case "unconfirmed":
                return OrderStatus.UNCONFIRMED;                
            default:
                return OrderStatus.ALL;
        }
    }

    showModal(modalId: string): void {
        this.modalEl = document.getElementById(modalId) as HTMLDivElement;
        // this.closeModalBtn = this.modalEl.querySelector('#closeModalBtn') as HTMLButtonElement;
        // this.closeModalBtn.addEventListener('click', this.hideModal);
        // console.log(this.closeModalBtn);
        // const OrderDetailModal = document.getElementById(`viewOrderDetailModal`) as HTMLDivElement;
        this.modal = new Modal(this.modalEl);

        console.log(this.modal);

        this.modal.show();
    }

    showToast(type = "primary", title = ``, message = `Add  Successfully!`, minutes = '1 minutes') {
        this.toastMsg = new ToastMessage(type, title, message , minutes);

        console.log(document.getElementById("closeToast"));
        this.closeToastBtn = document.getElementById("closeToast") as HTMLButtonElement;
        this.closeToastBtn.addEventListener('click', this.hideToast);
        this.toastMsg.show();
    }

    @autobind
    hideToast() {
        this.toastMsg?.hide();
    }

    @autobind
    hideModal() {
        console.log(this.modal);
        this.modal.hide();
    }

    @autobind
    showDeleteModal() {
        this.deleteModal = new Modal(this.deleteModalEl);

        console.log(this.deleteModal);

        console.log(this.deleteModal.show());
        this.deleteModal._isHidden = false;
        this.deleteModal.show();
    }

    @autobind
    hideDeleteModal() {
        this.deleteModal?.hide();
        this.removeBackdrop();
    }

    viewDetail(): void {
        console.log("id: ", this._currentId);
        this.showModal(`viewOrderDetailModal`);

        (async () => {

            try {

            const response = await OrdersApi.getById(this._currentId);
            const {order} = response.data;

            const {
              _id,
              products: { items, totalPrice },
              user: { phone, shippingAddress, email, fullName },
              shippingFee,
              createdAt,
              status,
            } = order;
    
            const allTotal = (totalPrice + shippingFee).toFixed(2);
    
            this.viewDetailTableCartEl.innerHTML = "";
    
            Helper.listCartHandler(items, this.viewDetailTableCartEl, this.insertCart);
            Helper.textContent("orderId", _id);
            Helper.textContent("createdAt", createdAt);
            Helper.textContent("phone", phone);
            Helper.textContent("email", email);
            Helper.textContent("fullName", fullName);
            Helper.textContent("status", status);
            Helper.textContent("shippingAddress", shippingAddress);
            // Helper.textContent('discountPercent', discount);
            // Helper.textContent('discountMoney', phone);
            Helper.textContent("shippingFee", `$${shippingFee}`);
            Helper.textContent("subtotal", `$${totalPrice.toFixed(2)}`);
            Helper.textContent("allTotal", `$${allTotal}`);
    
            } catch (error) {
                console.log(error);
            }

        })()

    }

    insertCart(prodId: string, name: string, thumbnail: string, cateName: string, qty: number, price: number, totalItem: number) {
        const cartItemHtml = `
        <div
        prod-id = ${prodId}
        class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full">
        <div class="-m-px w-40 md:w-32">
            <img class="hidden md:block"
                src="${BACKEND_URL}/${thumbnail}"
                alt="${name}" />
            <img class="md:hidden"
                src="${BACKEND_URL}/${thumbnail}"
                alt="${name}" />
        </div>
        <div
            class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8">
            <div
                class="flex flex-col md:flex-shrink-0 justify-start items-start">
                <h3
                    class="text-lg md:text-xl dark:text-white w-full font-semibold leading-6 md:leading-5 text-gray-800">
                    ${name}</h3>
                <div
                    class="flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-4">
                    <p
                        class="text-sm leading-none dark:text-gray-300 text-gray-600">
                        Brand: <span class="text-gray-800 dark:text-white">
                            ${cateName}</span></p>
                    <p
                        class="text-sm leading-none dark:text-gray-300 text-gray-600">
                        Quantity: <span class="text-gray-800 dark:text-white">
                            ${qty}</span></p>
                    <p
                        class="text-sm leading-none dark:text-gray-300 text-gray-600">
                        Price/item: <span class="text-gray-800 dark:text-white">
                            $${price}</span></p>
              
  
                </div>
            </div>
            <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                <p
                    class="text-xl dark:text-white lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                    $${totalItem}</p>
            </div>
        </div>
      </div>
      `;
  
    return cartItemHtml;
    }

    clearTableData() {
        if(this.dataTable) {
            this.dataTable.destroy();
        }
    }

    removeBackdrop() {
        const backdropEl = document.querySelector("div[modal-backdrop]") as HTMLDivElement;
        if(backdropEl) {
            backdropEl.remove();
        }
    }

    get component() {
        return templateHTML;
    }

}