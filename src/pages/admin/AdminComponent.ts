import { Modal } from "flowbite";
// import ToastMessage from "../../../components/AdminToast";

import ToastMessage from "../../components/AdminToast";
import Component from "../../components/base-component";
import { autobind } from "../../decorators/autobind";

const templateHTML = `
`;

export default abstract class AdminBaseComponent<T extends HTMLElement> extends Component<T>{

    cateForm: HTMLFormElement;
    categoriesTable: any;
    tableEl: HTMLTableElement;
    modalFormEl: HTMLDivElement;
    toastMsgEl: HTMLDivElement;
    createBtn: HTMLButtonElement
    closeFormModalBtn: HTMLButtonElement;
    closeToastBtn: HTMLButtonElement;
    triggerModalDeleteBtn: HTMLButtonElement;
    deleteConfirmBtn: HTMLButtonElement;

    modal: Modal;
    toastMsg: ToastMessage;
    _currentId: string = "";

    constructor() {
        super('admin-content');
        this.hostEl.innerHTML = templateHTML;

        this.render();

        this.tableEl = document.getElementById('table-categories') as HTMLTableElement;
        this.modalFormEl = document.getElementById('createCategoryModal') as HTMLDivElement;
        this.toastMsgEl = document.getElementById('toast-success') as HTMLDivElement;
        this.createBtn = document.getElementById("createCategoryModalButton") as HTMLButtonElement;
        
        this.closeFormModalBtn = document.getElementById('closeModalForm') as HTMLButtonElement;

        this.closeToastBtn = document.getElementById('closeToast') as HTMLButtonElement;

        this.triggerModalDeleteBtn = document.getElementById('deleteCategoryBtn') as HTMLButtonElement;
        this.deleteConfirmBtn = document.getElementById('delete-cate-btn') as HTMLButtonElement;
        this.cateForm = document.getElementById('add-cate-form') as HTMLFormElement;

        this.modal = new Modal(this.modalFormEl);
        this.toastMsg = new ToastMessage();
        
        this.attach();
    }

    abstract render() : void;
    

    abstract attach(): void;

    abstract submitHandler(e: Event) : void;

    abstract clickHandler(e: Event) : void;

    abstract deleteHandler() : void 
    
    abstract addHandler(): void
    
    abstract editHandler(): void; 

    abstract toggleDeleteModal() : void;

    clearInputs() : void  {

    }

    clearTableData() {
        if(this.categoriesTable) {
            this.categoriesTable.destroy();
        }
    }

    showModal(type: string) {
        this.modalFormEl = document.getElementById('CategoryModal') as HTMLDivElement;
        this.modal = new Modal(this.modalFormEl);
        this.modal.show();
        this.closeFormModalBtn = document.getElementById('closeModalForm') as HTMLButtonElement;
        this.closeFormModalBtn.addEventListener('click', this.hideModal);
        this.cateForm = document.getElementById(`${type}-cate-form`) as HTMLFormElement;
        this.cateForm.addEventListener('submit', this.submitHandler);
    }

    showToast(type = "primary", title = 'Add Category', message = 'Add Category Successfully!', minutes = '1 minutes') {

        console.log(type, title, message, minutes);

        this.toastMsg = new ToastMessage(type, title, message , minutes);
        this.closeToastBtn = document.getElementById('closeToast') as HTMLButtonElement;
        this.closeToastBtn.addEventListener('click', this.hideToast);
        this.toastMsg.show();
    }

    @autobind
    hideModal() {
        this.modal.hide();
    }

    @autobind
    hideToast() {
        console.log(this.toastMsg);

        this.toastMsg.hide();
    }   

    @autobind
    closeFormModal() {
        this.modal.hide();
    }

  
}