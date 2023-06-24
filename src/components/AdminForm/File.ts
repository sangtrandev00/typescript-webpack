

export default class FileInput {
    constructor(private _classSize: string, private _id: string, private _label: string, private _type: string = "file", private _name: string, private _accept: "image/png, image/jpeg") {
    }

    get component() {
        return `
        <div class="${this._classSize}">
            <label for=${this._id} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="cateImage">${this._label} </label>
            <input name="${this._name}" ${this._id} accept="${this._accept}" class="block w-full mb-5 text-sm text-primary-900 border border-gray-300 rounded-lg cursor-pointer bg-primary-50 dark:text-primary-400 focus:outline-none dark:bg-primary-700 dark:border-gray-600 dark:placeholder-primary-400"  type="${this._type}">
        </div>
        `
    }
}