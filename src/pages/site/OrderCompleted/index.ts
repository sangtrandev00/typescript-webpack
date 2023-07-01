import ShopApi from "../../../api/shopApi";
import Component from "../../../components/base-component";
import { BACKEND_URL } from "../../../constant/backend-domain";
import Helper from "../../../util/helper";

const templateHTML = `
<div id="order-completed" class="">

    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div class="flex justify-start item-start space-y-2 flex-col">
            <h1 class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Order <span id="orderId">#13432</span></h1>
            <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600" id="orderCreatedAt">21st
                Mart 2021 at 10:34
                PM</p>
        </div>
        <div
            class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0 border-2 shadow">
            <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <div id="view-history-cart"
                    class="flex flex-col justify-start items-start dark:bg-slate-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                    <p
                        class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                        Customer’s Cart</p>
                    <div
                        class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                        <div class="pb-4 md:pb-8 w-10 md:w-40 ">
                            <img class="w-28 hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                                alt="dress" />
                            <img class="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                                alt="dress" />
                        </div>
                        <div
                            class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                            <div class="w-full flex flex-col justify-start items-start space-y-8">
                                <h3
                                    class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                    Premium Quaility Dress</h3>
                                <div class="flex justify-start items-start flex-col space-y-2">
                                    <p class="text-sm dark:text-white leading-none text-gray-800"><span
                                            class="dark:text-gray-400 text-gray-300">Style: </span> Italic
                                        Minimal Design</p>
                                </div>
                            </div>
                            <div class="flex justify-between space-x-8 items-start w-full">
                                <p class="text-base dark:text-white xl:text-lg leading-6">$36.00 <span
                                        class="text-red-300 line-through"> $45.00</span></p>
                                <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                                <p
                                    class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                                    $36.00</p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                        <div class="w-full md:w-40">
                            <img class="w-28 hidden md:block" src="https://i.ibb.co/s6snNx0/Rectangle-17.png"
                                alt="dress" />
                            <img class="w-full md:hidden" src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png"
                                alt="dress" />
                        </div>
                        <div
                            class="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                            <div class="w-full flex flex-col justify-start items-start space-y-8">
                                <h3
                                    class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                    High Quaility Italic Dress</h3>
                                <div class="flex justify-start items-start flex-col space-y-2">
                                    <p class="text-sm dark:text-white leading-none text-gray-800"><span
                                            class="dark:text-gray-400 text-gray-300">Style: </span> Italic
                                        Minimal Design</p>

                                </div>
                            </div>
                            <div class="flex justify-between space-x-8 items-start w-full">
                                <p class="text-base dark:text-white xl:text-lg leading-6">$20.00 <span
                                        class="text-red-300 line-through"> $30.00</span></p>
                                <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                                <p
                                    class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                                    $20.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                    <div
                        class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-slate-800 space-y-6">
                        <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                        <div
                            class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                            <div class="flex justify-between w-full">
                                <p class="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                <p class="text-base dark:text-gray-300 leading-4 text-gray-600" id="subtotal">
                                    $56.00</p>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base dark:text-white leading-4 text-gray-800">Discount <span
                                        class="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span>
                                </p>
                                <p class="text-base dark:text-gray-300 leading-4 text-gray-600" id="discount">
                                    -$28.00 (50%)
                                </p>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                                <p class="text-base dark:text-gray-300 leading-4 text-gray-600" id="shipping">
                                    $8.00</p>
                            </div>
                        </div>
                        <div class="flex justify-between items-center w-full">
                            <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                            <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600"
                                id="allTotal">$36.00
                            </p>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-slate-800 space-y-6">
                        <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
                        <div class="flex justify-between items-start w-full">
                            <div class="flex justify-center items-center space-x-4">
                                <div class="w-8 h-8">
                                    <img class="w-full h-full" alt="logo"
                                        src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                </div>
                                <div class="flex flex-col justify-start items-center">
                                    <p class="text-lg leading-6 dark:text-white font-semibold text-gray-800">GHN
                                        Delivery<br /><span class="font-normal">Delivery with 24 Hours</span>
                                    </p>
                                </div>
                            </div>
                            <p class="text-lg font-semibold leading-6 dark:text-white text-gray-800">$8.00</p>
                        </div>
                        <div class="w-full flex justify-center items-center">
                            <button
                                class="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-slate-800 text-base font-medium leading-4 text-white">View
                                Carrier Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="bg-gray-50 dark:bg-slate-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                <div
                    class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                    <div class="flex flex-col justify-start items-start flex-shrink-0">
                        <div
                            class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                            <!-- <img class="w-16 h-16 rounded-full" id="customerAvatar"
                                src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" /> -->
                            <div class="flex justify-start items-start flex-col space-y-2">
                                <p class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800"
                                    id="customerName">
                                    David Kent</p>
                                <!-- <p class="text-sm dark:text-gray-300 leading-5 text-gray-600">10 Previous Orders
                                </p> -->
                            </div>
                        </div>

                        <div
                            class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                            <img class="dark:hidden"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                                alt="email">
                            <img class="hidden dark:block"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg"
                                alt="email">
                            <p class="cursor-pointer text-sm leading-5 " id="email">david89@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                        <div
                            class="flex justify-start md:justify-center xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                            <div
                                class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                <p
                                    class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                                    Shipping Address</p>
                                <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"
                                    id="shippingAddress">
                                    180 North King Street, Northhampton MA 1060</p>
                            </div>
                            <div
                                class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                <p
                                    class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                                    Phone number: </p>
                                <p id="phone"
                                    class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                    09898392423</p>
                            </div>

                            <div
                                class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                <p
                                    class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                                    Payment method </p>
                                <p id="paymentMethod"
                                    class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                    COD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
`

export default class OrderCompleted extends Component<HTMLDivElement> {
    
    _orderId: string;
    viewCartEl: HTMLDivElement;

    constructor() {
        super('main')
        this.hostEl.innerHTML = templateHTML;

        this._orderId = Helper.getParams('id') as string;
        this.viewCartEl = document.getElementById("view-history-cart") as HTMLDivElement;

        this.renderHistoryOrder();
    }

    renderHistoryOrder(){

        (async () => {

            try {
                const orderResponse = await ShopApi.getOrderById(this._orderId);

            const {
                order: {
                  user: { fullName, email, phone, shippingAddress },
                  products: { items, totalPrice },
                  createdAt,
                },
              } = orderResponse.data;
            
              const allTotal = (totalPrice + 8).toFixed(2);
            
              Helper.textContent("orderId", `#${this._orderId}`);
              Helper.textContent("orderCreatedAt", `${createdAt}`);
              Helper.textContent("subtotal", `$${totalPrice.toFixed(2)}`);
              Helper.textContent("discount", `0`);
              Helper.textContent("allTotal", `$${allTotal}`);
            
              //   Customer info
              Helper.textContent("customerName", `${fullName}`);
              Helper.textContent("shippingAddress", `${shippingAddress}`);
              Helper.textContent("email", `${email}`);
              Helper.textContent("phone", `${phone}`);
            
              Helper.imageContent("customerAvatar", `${BACKEND_URL}/images/user-avatar.jpg`);
            
              const cartList = items;
            
              this.viewCartEl.innerHTML = "";
              
              Helper.listCartHandler(cartList, this.viewCartEl, this.insertCart);
            } catch (error) {
                console.log(error);
            }
            
        })()

      };

      insertCart(prodId: string, name: string, thumbnail: string, cateName: string, qty: number, price: number, totalItem: number){
        const cartItemHtml = `
              <div prod-id=${prodId}
              class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
              <div class="pb-4 md:pb-8 w-10 md:w-40 ">
                  <img class="w-28 hidden md:block" src="${BACKEND_URL}/${thumbnail}"
                      alt="${name}" />
                  <img class="w-full md:hidden" src="${BACKEND_URL}/${thumbnail}"
                      alt="${name}" />
              </div>
              <div
                  class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                  <div class="w-full flex flex-col justify-start items-start space-y-8">
                      <h3
                          class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                          ${name}</h3>
                      <div class="flex justify-start items-start flex-col space-y-2">
                          <p class="text-sm dark:text-white leading-none text-gray-800"><span
                                  class="dark:text-gray-400 text-gray-300">Brand: </span>
                              ${cateName}</p>
                      </div>
                  </div>
                  <div class="flex justify-between space-x-8 items-start w-full">
                      <p class="text-base dark:text-white xl:text-lg leading-6">$${price} </p>
                      <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">${qty} <span class="italic font-normal text-gray-500">(item)</span></p>
                      <p
                          class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                          $${totalItem}</p>
                  </div>
              </div>
              </div>
            `;
      
        return cartItemHtml;
      };
    
}