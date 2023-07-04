export default class Select {
    constructor(private _classSize: string, private _id: string, private _label: string, private _name: string, private _placeholder: string, private _data: any[] = []) {
    }

    get component() {

        console.log(this._data);

        return `
        <div class="${this._classSize}">
            <label for="${this._id}" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">${this._label}</label>
            <select autocomplete="off" name="${this._name}" id="${this._id}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected value="">${this._placeholder}</option>
               ${this._data.map((role) => {
                return `<option value="${role}">${role}</option>`
               })}
            </select>
        </div>
        `
    }

}