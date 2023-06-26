import Button from "../../../../components/AdminForm/Button";
import FileInput from "../../../../components/AdminForm/File";
import Input from "../../../../components/AdminForm/Input";
import Select from "../../../../components/AdminForm/Select";
import Component from "../../../../components/base-component";
enum Role { Admin = "admin", SubAdmin = "subadmin", Client = "client" }

export class Form {

    nameInput: Input;
    avatarInput: FileInput;
    oldAvatar: Input;
    emailInput: Input;
    phoneInput: Input;
    addressInput: Input;
    passwordInput: Input;
    roleSelect: Select;
    submitBtn: Button;

    constructor( private _id: string, private _type: string) {
        this.nameInput = new Input('col-span-2', 'name', 'Name', 'text', 'name', 'Type User Name');
        this.avatarInput = new FileInput('col-span-2', 'avatar', 'Avatar', 'file', 'avatar', "image/png, image/jpeg", true);
        this.oldAvatar = new Input('col-span-2 hidden', 'oldAvatar', 'Old avatar', 'hidden', 'oldAvatar', 'Avatar');
        this.emailInput = new Input('col-span-1', 'email', 'Email', 'text', 'email', 'Email');
        this.phoneInput = new  Input('col-span-1', 'phone', 'Phone', 'text', 'phone', 'Phone');
        this.addressInput = new Input('col-span-1', 'address', 'Address', 'text', 'address', 'Address');
        this.passwordInput = new Input('col-span-1', 'password', 'Password', 'text', 'password', 'Password');
        this.roleSelect = new Select('col-span-2', 'role', 'Role', 'role', 'Select Role', [Role.Admin, Role.SubAdmin, Role.Client]);
        this.submitBtn = new Button(`${this._type}-user-btn`, `Save`, 'submit');
    }

    get component() {
        return `
        <form id="${this._id}" action="#">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
                
                ${this.nameInput.component}
                ${this.avatarInput.component}
                ${this.oldAvatar.component}
                ${this.emailInput.component}
                ${this.phoneInput.component}
                ${this.addressInput.component}
                ${this.passwordInput.component}
                ${this.roleSelect.component}

                <!-- 
                    <div class="col-span-2">
                        <div id="editorAddUser"></div>
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
        super('UserModal');

        this.hostEl.innerHTML = this.component;

    }
    get component() {
        return `
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <!-- Modal header -->

                <div
                    class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">${this._type} User</h3>
                    <button type="button" id="closeModalForm"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-target="UserModal" data-modal-toggle="UserModal">
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
                ${(new Form(`${this._type}-user-form`, `${this._type}`)).component}

            </div>
        </div>
        `
    }
}