import Component from "../../../components/base-component";

const templateHTML = `
    <div class="shopping-cart bg-gray-100">

    <div class="md:container mx-auto mt-10">
        <div class="flex shadow-md my-10 border overflow-hidden flex-wrap">
            <div id="view-cart"
                class="max-[667px]:w-full md:w-3/4 sm:w-full bg-white px-10 py-10 h-auto md:h-[46rem] overflow-y-auto">
                <div class="flex justify-between border-b pb-8">
                    <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                    <h2 class="font-semibold text-2xl"><span id="cartQty">3</span> Items</h2>
                </div>

                <!-- Cart heading title -->
                <div class="flex my-5 bg-slate-300 py-2 px-4">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                        Quantity</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                        Price</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                        Total</h3>
                </div>

            </div>

            <div id="summary" class="max-[667px]:w-full md:w-1/4 sm:w-full px-8 py-10">
                <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div class="flex justify-between mt-10 mb-5">
                    <span class="font-semibold text-sm uppercase">Subtotal:</span>
                    <span id="summaryTotal" class="font-semibold text-sm">590$</span>
                </div>
                <div>
                    <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                    <select class="block p-2 text-gray-600 w-full text-sm">
                        <option>Standard shipping - $8.00</option>
                    </select>
                </div>
                <div class="py-10">
                    <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo
                        Code</label>
                    <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full">
                </div>
                <button
                    class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                <div class="border-t mt-8">
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span id="totalCost">$600</span>
                    </div>
                    <a href="./checkout.html" id="checkoutBtn"
                        class="text-center bg-slate-500 font-semibold hover:bg-slate-600 py-3 text-sm text-white uppercase w-full block">Checkout</a>
                </div>
            </div>

        </div>
    </div>

    </div>
`

export default class ShopCart extends Component<HTMLDivElement>{
    
    constructor() {
        super('main');

        this.hostEl.innerHTML = templateHTML;
    }

}