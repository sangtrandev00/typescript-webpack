import { BACKEND_URL } from './../../constant/backend-domain';


export default class ProductItem {

    // static instance: ProductItem = new ProductItem('', '', 0, 0, '');
    protected _newPrice: number = 0;
    constructor(protected _id: string | undefined, protected _name: string, protected _oldPrice: number | undefined, protected _discount: number | undefined, protected _thumbnail: string) {
     
    }


    get component(): string {

        if(this._oldPrice && this._discount) {
            this._newPrice = this._oldPrice * (1 - 1/this._discount);
        }

         return `
            <div class="relative mb-10 card-product" data-id ="${this._id}">
                        <div class="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50">
                            <p class="text-xs leading-3 text-gray-800">New</p>
                        </div>
                        <div class="relative group h-[240px]">
                            <div
                                class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                            </div>
                            <img class="w-full h-full object-contain"
                                src="${BACKEND_URL}/${this._thumbnail}"
                                alt="${this._name}" />
                            <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button
                                    class="add-to-cart dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add
                                    to bag</button>
                                <button
                                    class="show-quick-view bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick
                                    View</button>
                            </div>
                        </div>
                        <p class="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">${this._name}</p>
                        <div class="flex">
                            <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-red-700 mt-4">$${this._newPrice.toFixed(2)}</p>
                            <p
                                class="font-semibold dark:text-gray-300 text-lg leading-5 text-gray-800 mt-4 ms-4 line-through">
                                $${this._oldPrice}
                            </p>

                        </div>

                        <a href="/detail?id=${this._id}"
                            class="detail-product inline-block font-normal dark:text-gray-300 text-base leading-4 text-gray-600 mt-4 border border-slate-400 p-4">Xem
                            ngay</a>
                    </div>
        `

    }


}
