import Button from "../../../../components/AdminForm/Button";
import FileInput from "../../../../components/AdminForm/File";
import Input from "../../../../components/AdminForm/Input";
import Select from "../../../../components/AdminForm/Select";
import Textarea from "../../../../components/AdminForm/Textarea";
import Component from "../../../../components/base-component";

export class Form {

    nameInput: Input;
    qtyInput: Input;
    priceInput: Input;
    SelectCates: Select;
    discountInput: Input;
    imagesInput: FileInput;
    shortDesc: Textarea;
    fullDesc: Textarea;
    submitBtn: Button;
    oldImages: Input;

    constructor( private _id: string,private _type: string) {
       this.nameInput = new Input('col-span-1', 'name', 'Name', 'text', 'name', 'Type Product Name');
       this.qtyInput = new Input('col-span-1', 'quantity', 'Quantity', 'number', 'quantity', "Ex: 10");
       this.priceInput = new Input('col-span-1', 'price', 'Price', 'number', 'price', "Ex: 20$");
       this.SelectCates = new Select('col-span-1', 'categorySelectId', 'Category', 'category', 'Select category'); 
       this.discountInput = new Input('col-span-2','discount', 'Discount', 'number', 'discount', 'Discount (%) Ex: 5' )
        // this.oldImages = new Input('col-span-2', 'oldImages', 'Old Images', 'hidden', 'oldImages', 'Old images');
        this.imagesInput = new FileInput('col-span-2', 'images', 'Images', 'file', 'images', "image/png, image/jpeg", true);
        this.shortDesc = new Textarea('col-span-2', 'shortDescription', 'Short description', 'shortDesc', 'Write product short description here', 4);
        this.fullDesc = new Textarea('col-span-2', 'fullDescription', 'Full description', 'fullDesc', 'Write product full description here', 4);
       this.oldImages = new Input('col-span-2 hidden', 'oldImages', 'Hình ảnh', 'hidden', 'oldImages', "old images");
       this.submitBtn = new Button(`${this._type}-product-btn`, `Save`, 'submit');

    }

    get component() {
        return `
        <form id="${this._id}" action="#">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
                
                ${this.nameInput.component}
                ${this.qtyInput.component}
                ${this.priceInput.component}
                ${this.SelectCates.component}
                ${this.discountInput.component}
                ${this.oldImages.component}
                ${this.imagesInput.component}
                ${this.shortDesc.component}
                ${this.fullDesc.component}

                <!-- 
                    <div class="col-span-2">
                        <div id="editorAddProduct"></div>
                    </div> 
                -->

            </div>
         ${this.submitBtn.component}
        </form>
        `
    }

}


export default class ModalForm extends Component<HTMLDivElement> {
    constructor(private _type: string) {
        super('ProductModal');

        this.hostEl.innerHTML = this.component;

        console.log(this.hostEl)

    }
    get component() {
        return `
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <!-- Modal header -->

                <div
                    class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">${this._type} Product</h3>
                    <button type="button" id="closeModalForm"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-target="ProductModal" data-modal-toggle="ProductModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                ${(new Form(`${this._type}-product-form`, `${this._type}`)).component}

            </div>
        </div>
        `
    }
}