import { BACKEND_URL } from "../../constant/backend-domain";
import { autobind } from "../../decorators/autobind";
import Router from "../../router/router";
import Helper from "../../util/helper";
import Component from "../base-component";


export default class QuickViewModal extends Component<HTMLDivElement> {

    viewBoxEl?: HTMLDivElement;
    closeQuickViewBtn: HTMLButtonElement;
    viewDetailBtn: HTMLButtonElement;
    addCartBtn: HTMLButtonElement
    _newPrice?: number;
    constructor(private _id: string, private _name: string, private _oldPrice: number, private _discount: number, private _thumbnail: string, private _shortDesc: string) {
        super('quick-view-modal');
        this.viewBoxEl = document.getElementById('viewBox') ! as HTMLDivElement;
        this.hostEl.innerHTML = this.component;
        this.closeQuickViewBtn = document.getElementById('closeQuickViewBtn') ! as HTMLButtonElement;
        this.viewDetailBtn = document.getElementById('viewDetailBtn') ! as HTMLButtonElement;
        this.addCartBtn = document.getElementById('addCartBtn') ! as HTMLButtonElement;
        this.attach();
    }

    attach() {
        this.closeQuickViewBtn.addEventListener('click', this.hide);
        this.viewDetailBtn.addEventListener('click', this.moveToDetail);
        this.addCartBtn.addEventListener('click', this.addToCartHandler);
    }

    @autobind
    show() {
        this.hostEl.classList.remove("hidden");
    }

    @autobind
    hide() {
        this.hostEl.classList.add("hidden");
    }

   get component() {
    

    if(this._oldPrice) {
        this._newPrice = this._oldPrice * (1 - this._discount/100); 
    }else {
        this._newPrice = 0;
    }

    return `
        <div id="viewerBox" class="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900">
            <div class="flex justify-end">
                <button id="closeQuickViewBtn" onclick="" aria-label="Close" class="focus:outline-none focus:ring-2 focus:ring-gray-800">
                    <img class="dark:hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick-view-2-svg1.svg" alt="cross">
                    <img class="dark:block hidden"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick-view-2-svg1dark.svg" alt="cross">
                </button>
            </div>
            <div class="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
                <div
                    class="lg:w-1/2 flex justify-between items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6 lg:py-24">
                    <div class="flex items-center">
                        <button onclick="" aria-label="slide back"
                            class="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                            <img class="" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick-view-2-svg2.svg"
                                alt="previous">
                        </button>
                    </div>
                    <div class="slider">
                        <div class="slide-ana lg:relative">
                            <div class="flex h-[200px]" style="">
                                <img src="${BACKEND_URL}/${this._thumbnail}"
                                    alt="${this._name}" class="w-full h-full" />
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <button onclick="" aria-label="slide forward"
                            class="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                            <img class="transform -rotate-180"
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/quick-view-2-svg2.svg"
                                alt="next">
                        </button>
                    </div>
                </div>
                <div class="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
                    <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">${this._name}</h1>
                    <p class="text-base leading-normal text-gray-600 dark:text-white mt-2">${this._shortDesc}</p>
                    <p class="text-lg font-medium text-gray-600 dark:text-white mt-8"><span class="line-through">$${this._oldPrice}</span> <span class="text-2xl text-red-600">$${this._newPrice}</span></p>
                    <div
                        class="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-8">
                        <button id="addCartBtn" data-id="${this._id}"
                            class="w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">Add
                            to Cart</button>
                        <button data-id="${this._id}" id="viewDetailBtn"
                            class="w-full md:w-2/5 border border-gray-800 text-base font-medium leading-none text-gray-800 dark:text-white uppercase py-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-transparent dark:border-white dark:text-white focus:ring-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 ">View
                            Details</button>
                    </div>
                    <div class="mt-6">
                        <button
                            class="text-xl underline text-gray-800 dark:text-white dark:hover:text-gray-200 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">add
                            to wishlist</button>
                    </div>
                </div>
            </div>
        </div>

    `
   }

   @autobind
   moveToDetail(e: Event) {

    const btn = e.target as HTMLButtonElement;
    const prodId = btn.dataset.id;
    history.pushState(null, "", `/detail?id=${prodId}`);
    new Router();
    this.hide();
   }

   @autobind
   addToCartHandler(e: Event) {
    const btn = e.target as HTMLButtonElement;
    const prodId = btn.dataset.id;
    Helper.addToCart((prodId as string), 1);
   }
}