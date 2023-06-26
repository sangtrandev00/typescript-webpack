import Button from "../../../../components/AdminForm/Button";
import FileInput from "../../../../components/AdminForm/File";
import Input from "../../../../components/AdminForm/Input";
import Textarea from "../../../../components/AdminForm/Textarea";
import Component from "../../../../components/base-component";

export class Form {
    CateNameInput: Input;
    CateImageInput: FileInput;
    CateDesc: Textarea;
    SubmitBtn: Button;
    CateOldImages: Input;

    constructor( private _id: string,private _type: string) {
       this.CateNameInput = new Input('col-span-2', 'name', 'Tên danh mục', 'text', 'name', 'Tên danh mục');
       this.CateImageInput = new FileInput('col-span-2', 'cateImage', 'Hình ảnh', 'file', 'cateImage', "image/png, image/jpeg");
       this.CateDesc = new Textarea('col-span-2', 'description', 'Description', 'description', 'Description', 4);
       this.CateOldImages = new Input('col-span-2 hidden', 'oldImage', 'Hình ảnh', 'hidden', 'oldImage', "old image");
       this.SubmitBtn = new Button(`${this._type}-cate-btn`, `Save`, 'submit');

    }

    get component() {
        return `
        <form action="#" id="${this._id}">
                        <div class="grid gap-4 mb-4 sm:grid-cols-2">
                            ${this.CateNameInput.component}
                           ${this.CateImageInput.component}
                           ${this.CateOldImages.component}
                           ${this.CateDesc.component}
                        </div>
                        ${this.SubmitBtn.component}
        </form>
        `
    }

}


export default class ModalForm extends Component<HTMLDivElement> {
    constructor(private _type: string) {
        super('CategoryModal');

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
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">${this._type} Category</h3>
                    <button type="button" id="closeModalForm"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-target="CategoryModal" data-modal-toggle="CategoryModal">
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
                ${(new Form(`${this._type}-
                -form`, `${this._type}`)).component}

            </div>
        </div>
        `
    }
}