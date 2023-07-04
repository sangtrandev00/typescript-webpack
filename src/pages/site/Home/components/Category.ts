import { BACKEND_URL } from "../../../../constant/backend-domain";


export default class CategoryItem {
    constructor(private _sliderNum: number, private _name: string,private  _image: string) {

    }

    get component() {
        return `
            <div class="keen-slider__slide number-slide${this._sliderNum} flex flex-shrink-0 relative w-full sm:w-auto">
            <img src="${BACKEND_URL}/${this._image}"
                alt="black chair and white table" class="object-cover object-center w-full h-full" />
            <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                <h2 class="lg:text-xl leading-4 text-base lg:leading-5 text-white dark:text-gray-900">
                    Catalog ${this._sliderNum}</h2>
                <div class="flex h-full items-end pb-6">
                    <h3
                        class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white dark:text-gray-900 cursor-pointer">
                        ${this._name}</h3>
                </div>
            </div>
        </div>
        `
    }
    
}