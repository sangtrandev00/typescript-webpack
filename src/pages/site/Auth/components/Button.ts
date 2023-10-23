export default class Input {
  private _type: string;
  private _name: string;
  constructor(type: string, name: string) {
    this._type = type;
    this._name = name;
  }
  render() {
    return `
        <button type="${this._type}"
        class="inline-block rounded bg-primary-color px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[slate-400] transition duration-150 ease-in-out hover:bg-tertiary-color hover:shadow-tertiary-color focus:bg-tertiary-color focus:shadow-tertiary-color focus:outline-none focus:ring-0 active:bg-slate-600-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init data-te-ripple-color="light">
           ${this._name}
        </button>
        `;
  }
}
