
export default class Input {
    constructor(private _classSize: string, private _id: string, private _label: string, private _type: string, private _name: string, private _placeholder: string) {

    }

    get component() {
        return `
        <div class=${this._classSize}>
            <label for="${this._id}" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">${this._label}</label>
            <input type="${this._type}" name="${this._name}" id="${this._id}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="${this._placeholder}" required="">
        </div>
        `
    }

}