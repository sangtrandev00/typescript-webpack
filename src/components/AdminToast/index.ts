import Component from "../base-component";
// Initialization for ES Users
import {
    Toast,
    initTE,
  } from "tw-elements";


export default class ToastMessage extends Component<HTMLDivElement>{
    toastEl: HTMLDivElement;
    toastMsg: any;
    
    // init Toast here!!!
    constructor(private _type: string = "primary", private _title: string = "", private _message: string = "", private _minutes: string = "") {
        super('toast-wrapper');
        initTE({ Toast })
        this.hostEl.innerHTML = this.component;
        console.log(_type, _title, _message, _minutes);
        this.toastEl = document.getElementById(`toast-${this._type}`) ! as HTMLDivElement;

        console.log(this.toastEl);
    }


    show() {
        this.toastEl.classList.remove("hidden");
    }

   
    hide() {
        this.toastEl.classList.add("hidden");
    }
    
    toggle() {
        this.hostEl.classList.toggle('hidden');
    }

    get component() {
        return `
            <div id="toast-success" class="pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-success-100 bg-clip-padding text-sm text-success-700 shadow-lg shadow-black/5  data-[te-toast-hide]:hidden " id="toast-success" role="alert" aria-live="assertive" aria-atomic="true" data-te-autohide="false" data-te-toast-init="" data-te-toast-show="">
                <div class="flex items-center justify-between rounded-t-lg border-b-2 border-success/20 bg-success-100 bg-clip-padding px-4 pb-2 pt-2.5">
                    <p class="toast-title flex items-center font-bold text-success-700">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="mr-2 h-4 w-4 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                        </svg>
                        ${this._title}
                    </p>
                    <div class="flex items-center">
                        <p class="text-xs text-success-700 toast-minutes">${this._minutes} ago</p>
                        <button type="button" id="closeToast" class="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-toast-dismiss="" aria-label="Close">
                            <span class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&amp;.disabled]:pointer-events-none [&amp;.disabled]:select-none [&amp;.disabled]:opacity-25">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="toast-message break-words rounded-b-lg bg-success-100 px-4 py-4 text-success-700">
                    ${this._message}
                </div>
            </div>
            
        `
    }

}