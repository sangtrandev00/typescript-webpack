export default class Utilities {
    constructor() {
        
    }

    static get component() {
        return `
        <!-- Update modal -->
            <div id="updateOrderModal" tabindex="-1" aria-hidden="true"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <!-- Modal header -->
                        <div
                            class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Update Order Status
                                #<span id="orderFormId">234324324</span> </h3>
                            <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="updateOrderModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <form action="#" id="update-order-form">
                            <div class="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customer
                                        Name: </label>
                                    <input readonly type="text" name="name" id="name" value="iPad Air Gen 5th Wi-Fi"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Ex. Apple iMac 27&ldquo;">
                                </div>
                                <div>
                                    <label for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customer
                                        Email: </label>
                                    <input readonly type="text" name="email" id="email" value="sang@gmail.com"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Ex. Apple">
                                </div>
                                <div>
                                    <label for="currStatus"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current
                                        Status: (Readonly )</label>
                                    <input type="text" value="399" readonly name="currStatus" id="currStatus"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="$299">
                                </div>
                                <div><label for="category"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select name="category" id="category"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Update status</option>
                                        <option value="confirmed">Confirm Order</option>
                                        <option value="shipping">Give to Shipper</option>
                                        <option value="destroyed">Destroy order</option>
                                        <option value="failed">Order failed</option>
                                        <option value="success">Order Success</option>
                                    </select>
                                </div>

                                <div id="titleGroup" class="col-span-2 hidden">
                                    <label for="title"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:
                                    </label>
                                    <input type="text" value="Your order has been created and send to shipping "
                                        name="title" id="title"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="$299">
                                </div>

                                <div id="descGroup" class="sm:col-span-2 hidden"><label for="description"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label><textarea
                                        id="description" rows="5"
                                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Write a description...">Thank your for ordering at our website. You will get your order soon! Thank for every thing!</textarea>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <button type="submit"
                                    class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update
                                    Order status</button>
                                <button type="button"
                                    class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                    <svg class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Read modal -->
            <div id="viewOrderDetailModal" tabindex="-1" aria-hidden="true"
                class=" hidden overflow-y-auto overflow-x-hidden fixed top-10 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full md:p-10 p-10 ">
                <div class="relative py-4 w-3/4 ">
                    <!-- Modal content -->
                    <div
                        class="relative py-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 mt-96 border border-slate-400">
                        <!-- Modal header -->

                        <div class="2xl:container 2xl:mx-auto px-4 ">
                            <div
                                class="flex flex-col xl:flex-row justify-center space-y-10 xl:space-y-0 xl:space-x-8">
                                <div class="flex justify-center flex-col items-start w-full">
                                    <h3
                                        class="text-3xl xl:text-4xl dark:text-white font-semibold leading-7 xl:leading-9 w-full md:text-left text-gray-800">
                                        Order Summary # <span id="orderId"></span></h3>
                                    <p class="text-base leading-none dark:text-white mt-4 text-gray-800">Created at
                                        <span class="font-semibold" id="createdAt"></span>
                                    </p>
                                    <div class="rounded-lg bg-info-100 p-2 text-base text-info-800 my-4 "
                                        role="alert">
                                        Status: <span id="status"></span>
                                    </div>

                                    <div id="view-detail-cart"
                                        class="flex justify-center w-full flex-col space-y-4 ">
                                        <div
                                            class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full">
                                            <div class="-m-px w-40 md:w-32">
                                                <img class="hidden md:block"
                                                    src="https://i.ibb.co/wWp4m6W/Rectangle-8.png"
                                                    alt="girl-in-red-dress" />
                                                <img class="md:hidden"
                                                    src="https://i.ibb.co/f8pyz8q/Rectangle-8.png"
                                                    alt="girl-in-red-dress" />
                                            </div>
                                            <div
                                                class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8">
                                                <div
                                                    class="flex flex-col md:flex-shrink-0 justify-start items-start">
                                                    <h3
                                                        class="text-lg md:text-xl dark:text-white w-full font-semibold leading-6 md:leading-5 text-gray-800">
                                                        Premium Quaility Red Dress</h3>
                                                    <div
                                                        class="flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-4">
                                                        <p
                                                            class="text-sm leading-none dark:text-gray-300 text-gray-600">
                                                            Size: <span class="text-gray-800 dark:text-white">
                                                                Small</span></p>
                                                        <p
                                                            class="text-sm leading-none dark:text-gray-300 text-gray-600">
                                                            Quantity: <span class="text-gray-800 dark:text-white">
                                                                01</span></p>
                                                    </div>
                                                </div>
                                                <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                                                    <p
                                                        class="text-xl dark:text-white lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                                                        $28.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full">
                                            <div class="-m-px w-40 md:w-32">
                                                <img class="hidden md:block"
                                                    src="https://i.ibb.co/3ftbsMT/Rectangle-8-1.png"
                                                    alt="girl-in-yellow-dress" />
                                                <img class="md:hidden"
                                                    src="https://i.ibb.co/D79dzHg/Rectangle-8.png"
                                                    alt="girl-in-yellow-dress" />
                                            </div>
                                            <div
                                                class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8">
                                                <div
                                                    class="flex flex-col md:flex-shrink-0 justify-start items-start">
                                                    <h3
                                                        class="text-lg md:text-xl dark:text-white font-semibold leading-6 md:leading-5 text-gray-800">
                                                        Premium Quaility Yellow Dress</h3>
                                                    <div
                                                        class="flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-4">
                                                        <p
                                                            class="text-sm leading-none dark:text-gray-300 text-gray-600">
                                                            Size: <span class="text-gray-800 dark:text-white">
                                                                Small</span></p>
                                                        <p
                                                            class="text-sm leading-none dark:text-gray-300 text-gray-600">
                                                            Quantity: <span class="text-gray-800 dark:text-white">
                                                                01</span></p>
                                                    </div>
                                                </div>
                                                <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                                                    <p
                                                        class="text-xl dark:text-white lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                                                        $28.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="flex md:flex-row justify-start items-start md:items-center border border-gray-200 w-full">
                                            <div class="-m-px w-40 md:w-32">
                                                <img class="hidden md:block"
                                                    src="https://i.ibb.co/C7M7Mvx/Rectangle-8-2.png"
                                                    alt="girl-in-white-dress" />
                                                <img class="md:hidden"
                                                    src="https://i.ibb.co/MsbCZNJ/Rectangle-8.png"
                                                    alt="girl-in-white-dress" />
                                            </div>
                                            <div
                                                class="flex justify-start md:justify-between items-start md:items-center flex-col md:flex-row w-full p-4 md:px-8">
                                                <div
                                                    class="flex flex-col md:flex-shrink-0 justify-start items-start">
                                                    <h3
                                                        class="text-lg md:text-xl dark:text-white font-semibold leading-6 md:leading-5 text-gray-800">
                                                        Premium Quaility White Dress</h3>
                                                    <div
                                                        class="flex flex-row justify-start space-x-4 md:space-x-6 items-start mt-4">
                                                        <p
                                                            class="text-sm leading-none dark:text-gray-300 text-gray-600">
                                                            Size: <span class="text-gray-800 dark:text-white">
                                                                Small</span></p>
                                                        <p
                                                            class="text-sm leading-none dark:text-gray-300 text-gray-600">
                                                            Quantity: <span class="text-gray-800 dark:text-white">
                                                                01</span></p>
                                                    </div>
                                                </div>
                                                <div class="flex mt-4 md:mt-0 md:justify-end items-center w-full">
                                                    <p
                                                        class="text-xl dark:text-white lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                                                        $28.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex flex-col flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
                                        <div
                                            class="flex justify-start items-start flex-col md:flex-row w-full md:w-auto space-y-8 md:space-y-0 md:space-x-14 xl:space-x-8 lg:w-full">
                                            <div class="flex jusitfy-start items-start flex-col space-y-2">
                                                <p
                                                    class="text-base dark:text-white font-semibold leading-4 text-gray-800">
                                                    Phone number: </p>
                                                <p class="text-sm leading-5 dark:text-gray-300 text-gray-600"
                                                    id="phone">09240234</p>
                                            </div>
                                            <div class="flex jusitfy-start items-start flex-col space-y-2">
                                                <p
                                                    class="text-base dark:text-white font-semibold leading-4 text-gray-800">
                                                    Shipping Address</p>
                                                <p class="text-sm leading-5 dark:text-gray-300 text-gray-600"
                                                    id="shippingAddress">180
                                                    North King Street, Northhampton MA 1060</p>
                                            </div>
                                            <div class="flex jusitfy-start items-start flex-col space-y-2">
                                                <p
                                                    class="text-base dark:text-white font-semibold leading-4 text-gray-800">
                                                    Shipping Method</p>
                                                <p class="text-sm leading-5 dark:text-gray-300 text-gray-600"> <span
                                                        id="shippingMethod">GHN</span> -
                                                    Takes up to 3 working days</p>
                                            </div>
                                            <div class="flex jusitfy-start items-start flex-col space-y-2">
                                                <p
                                                    class="text-base dark:text-white font-semibold leading-4 text-gray-800">
                                                    Email</p>
                                                <p class="text-sm leading-5 dark:text-gray-300 text-gray-600"> <span
                                                        id="email">sang@gmail.com</span></p>
                                            </div>
                                            <div class="flex jusitfy-start items-start flex-col space-y-2">
                                                <p
                                                    class="text-base dark:text-white font-semibold leading-4 text-gray-800">
                                                    Full Name</p>
                                                <p class="text-sm leading-5 dark:text-gray-300 text-gray-600"> <span
                                                        id="fullName">sang@gmail.com</span></p>
                                            </div>
                                        </div>
                                        <div class="flex flex-col w-full space-y-4">
                                            <div
                                                class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                                <div class="flex justify-between w-full">
                                                    <p class="text-base dark:text-white leading-4 text-gray-800">
                                                        Subtotal</p>
                                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600"
                                                        id="subtotal">
                                                        $56.00</p>
                                                </div>
                                                <div class="flex justify-between w-full">
                                                    <p class="text-base leading-4 dark:text-white text-gray-800">
                                                        Discount
                                                        <span
                                                            class="bg-gray-200  p-1 text-xs font-medium leading-3 text-gray-800">STUDENT</span>
                                                    </p>
                                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">
                                                        <!-- <span id="discountMoney">-$28.00</span> <span
                                                            id="discountPercent">(50%)</span> -->
                                                    </p>
                                                </div>
                                                <div class="flex justify-between w-full">
                                                    <p class="text-base dark:text-white leading-4 text-gray-800">
                                                        Shipping</p>
                                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600"
                                                        id="shippingFee">
                                                        $8.00</p>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center w-full">
                                                <p
                                                    class="text-base dark:text-white font-semibold leading-4 text-gray-800">
                                                    Total</p>
                                                <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600"
                                                    id="allTotal">
                                                    $36.00</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            
                            </div>

                        </div>
                    </div>
                </div>


            </div>

            <!-- Delete modal -->
            <div id="deleteModal" tabindex="-1" aria-hidden="true"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <!-- Modal content -->
                    <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <button id="closeModalBtn" type="button"
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
                            <button id="deleteOrderBtn" type="submit"
                                class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">Yes,
                                I'm sure</button>
                        </div>
                    </div>
                </div>
            </div>


            <button class="hidden" type="button" id="updateOrderBtn" data-modal-target="updateOrderModal"
                data-modal-toggle="updateOrderModal">Update Order Modal Button</button>
            <button class="hidden" type="button" id="viewOrderDetailBtn" data-modal-target="viewOrderDetailModal"
                data-modal-toggle="viewOrderDetailModal">View Order Detail Modal Button</button>
            <button class="hidden" type="button" id="deleteOrderBtnTrigger" data-modal-target="deleteModal"
                data-modal-toggle="deleteModal">Delete order Modal Button</button>

        
        `
    }

}