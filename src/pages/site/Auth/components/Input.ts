
// interface InputComponent {
//     render(): string;
//     get id(): string;
//     get name(): string;
//     get placeholder(): string;
//     get label(): string;
//     get value(): string;
// }


export default class Input {

    private _id: string;
    private _name: string;
    private _type: string;
    private _placeholder: string;
    private _label: string;
    private _value: string;
    constructor(id: string, type: string, name: string, placeholder: string, value: string = "", label: string) {
        this._id = id;
        this._name = name;
        this._placeholder = placeholder;
        this._value = value;
        this._label = label;
        this._type = type;
    }

    render() {
        return `
        <div class="relative mb-6 border">
            <input type="${this._type}" name="${this._name}"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="${this._id}" placeholder="${this._placeholder}" value="${this._value}" />
            <label for="${this._id}"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">${this._label}
            </label>
        </div>
        `
    }

}