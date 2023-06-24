

export default class Textarea {
    constructor(private _classSize: string, private _id: string, private _label: string, private _name: string, private _placeholder: string, private _rows: number) {

    }

    get component() {
        return `
        <div class="${this._classSize}">
            <label for="${this._id}"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                ${this._label}
            </label>
            <textarea
                id="${this._id}" name="${this._name}" rows="${this._rows}"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="${this._placeholder}"></textarea>
        </div>
        `
    }

}