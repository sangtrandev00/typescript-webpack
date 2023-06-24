import Component from "../../../components/base-component";

const templateHTML = `
<div class="checkout-content py-12">
<div class="grid sm:px-10 lg:grid-cols-2 shadow-md border">
    <div class="px-4 pt-8">
        <p class="text-xl font-medium">Order Summary</p>
        <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
        <div id="view-cart" class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                <img class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="" />
                <div class="flex w-full flex-col px-4 py-4">
                    <span class="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                    <span class="float-right text-gray-400">42EU - 8.5US</span>
                    <p class="text-lg font-bold">$138.99</p>
                </div>
            </div>
            <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                <img class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="" />
                <div class="flex w-full flex-col px-4 py-4">
                    <span class="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
                    <span class="float-right text-gray-400">42EU - 8.5US</span>
                    <p class="mt-auto text-lg font-bold">$238.99</p>
                </div>
            </div>
        </div>

        <p class="mt-8 text-lg font-medium">Checkout Methods</p>
        <form class="mt-5 grid gap-6">
            <div class="relative">
                <input class="peer hidden" id="checkoutMethod1" type="radio" name="radio" checked />
                <span
                    class="peer-checked:border-slate-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-slate-300 bg-white"></span>
                <label
                    class="peer-checked:border-2 peer-checked:border-slate-700 peer-checked:bg-slate-50 flex cursor-pointer select-none rounded-lg border border-slate-300 p-4"
                    for="checkoutMethod1">
                    <img class="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                    <div class="ml-5">
                        <span class="mt-2 font-semibold">At Home (COD )</span>
                        <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                    </div>
                </label>
            </div>
            <div class="relative">
                <input class="peer hidden" id="checkoutMethod2" type="radio" name="radio" checked />
                <span
                    class="peer-checked:border-slate-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-slate-300 bg-white"></span>
                <label
                    class="peer-checked:border-2 peer-checked:border-slate-700 peer-checked:bg-slate-50 flex cursor-pointer select-none rounded-lg border border-slate-300 p-4"
                    for="checkoutMethod2">
                    <img class="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
                    <div class="ml-5">
                        <span class="mt-2 font-semibold">VNPay</span>
                        <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                    </div>
                </label>
            </div>
        </form>
    </div>
    <div class="mt-10 bg-slate-50 px-4 pt-8 lg:mt-0">
        <form action="" method="post" id="order-form">
            <p class="text-xl font-medium">Payment Details</p>
            <p class="text-gray-400">Complete your order by providing your payment details.</p>
            <div class="">
                <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
                <div class="relative">
                    <input type="text" id="email" name="email"
                        class="w-full rounded-md border border-slate-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your.email@gmail.com" />
                    <div
                        class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                    </div>
                </div>
                <label for="fullName" class="mt-4 mb-2 block text-sm font-medium">Full Name</label>
                <div class="relative">
                    <input type="text" id="fullName" name="fullName"
                        class="w-full rounded-md border border-slate-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your full name here" />
                    <div
                        class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                        </svg>
                    </div>
                </div>
                <label for="phone" class="mt-4 mb-2 block text-sm font-medium">Phone Number</label>
                <div class="flex">
                    <div class="relative w-full flex-shrink-0">
                        <input type="text" id="phone" name="phone"
                            class="w-full rounded-md border border-slate-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Ex: 093898852432" />
                        <div
                            class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                    </div>

                </div>
                <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing
                    Address</label>

                <!-- Radio options -->
                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] default-shipping-el hidden">
                    <input
                        class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio" name="shippingRadioInput" id="radioDefault01" checked />
                    <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer mb-3"
                        for="radioDefault01">
                        Default Shipping Addresss
                    </label>
                </div>

                <input id="default-shipping-input"
                    class="default-shipping-input hidden rounded-md border border-slate-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 w-full mb-3"
                    type="text" value="HELLO First options">

                <div class="new-shipping-el mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                        class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                        type="radio" name="shippingRadioInput" id="radioDefault02" />
                    <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer mb-3"
                        for="radioDefault02">
                        New Shipping Address
                    </label>
                </div>


                <div class="new-shipping-address-select-el flex"
                    class="flex flex-col sm:flex-row gap-2 items-center">
                    <div class="relative flex-shrink-0 sm:w-1/3">
                        <select id="selectProvince" data-te-select-init data-te-select-filter="true">
                            <option value="default">Province</option>

                        </select>
                    </div>
                    <div class="sm:w-1/3">
                        <select id="selectDistrict" data-te-select-init data-te-select-filter="true">
                            <option value="0">District</option>

                        </select>

                    </div>
                    <div class="sm:w-1/3">
                        <select id="selectWard" data-te-select-init data-te-select-filter="true">
                            <option value="0">Ward</option>

                        </select>

                    </div>
                </div>
                <label for="Note" class="mt-4 mb-2 block font-medium">Your Note:
                </label>

                <div class="relative mb-3" data-te-input-wrapper-init>
                    <textarea name="note"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="Note" rows="3" placeholder="Your message"></textarea>
                    <label for="Note"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Take
                        some note to Admin</label>
                </div>
                <!-- Total -->
                <div class="mt-6 border-t border-b py-2">
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Subtotal</p>
                        <p class="font-semibold text-gray-900" id="subtotal">$399.00</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Shipping</p>
                        <p class="font-semibold text-gray-900">$8.00</p>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-900">Total</p>
                    <p class="text-2xl font-semibold text-gray-900" id="allTotal">$408.00</p>
                </div>
            </div>
            <button type="submit"
                class="mt-4 mb-8 w-full rounded-md bg-slate-900 px-6 py-3 font-medium text-white">Place
                Order</button>

        </form>
    </div>
</div>

</div>

`;

export default class Checkout extends Component<HTMLDivElement> {

    constructor() {
        super("main");
        this.hostEl.innerHTML = templateHTML;
    }

}

