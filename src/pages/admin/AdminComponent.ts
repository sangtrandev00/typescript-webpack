import { Modal } from "flowbite";

import Component from "../../components/base-component";
import { autobind } from "../../decorators/autobind";
import ToastMessage from "../../components/AdminToast";
import Helper from "../../util/helper";
import {IsString} from 'class-validator';

const templateHTML = `
`;

export default abstract class AdminBaseComponent extends Component<HTMLDivElement>{

    // cateForm: HTMLFormElement;
    FormEl: HTMLFormElement;
    dataTable: any;
    tableEl: HTMLTableElement;
    modalFormEl: HTMLDivElement;
    toastMsgEl: HTMLDivElement;
    createBtn: HTMLButtonElement
    closeFormModalBtn: HTMLButtonElement;
    closeToastBtn: HTMLButtonElement;
    triggerModalDeleteBtn: HTMLButtonElement;
    deleteConfirmBtn: HTMLButtonElement;
    closeDeleteModalBtn: HTMLButtonElement;
    deleteModalEl: HTMLDivElement;

    modal: Modal;
    deleteModal?: Modal;
    toastMsg: ToastMessage;

    @IsString()
    _currentId: string = "";

    constructor(
        protected _type: string,
        protected _tableElId: string,
        protected _modalFormId: string, 
        protected _toastId: string,
        protected _createBtnId: string,
        protected _closeFormModalBtnId: string,
        protected _closeToastBtnId: string,
        protected _triggerModalDeleteBtnId: string,
        protected _deleteConfirmBtnId: string,
        protected _formId: string,

         ) {
        super('admin-content');
        this.hostEl.innerHTML = this.component;
        this.clearTableData();
        this.render();
        this.toastMsg = new ToastMessage();
        

        this.tableEl = document.getElementById(this._tableElId) as HTMLTableElement;
        this.modalFormEl = document.getElementById(this._modalFormId) as HTMLDivElement;
        this.toastMsgEl = document.getElementById(this._toastId) as HTMLDivElement;
        this.createBtn = document.getElementById(this._createBtnId) as HTMLButtonElement;
        
        this.closeFormModalBtn = document.getElementById(this._closeFormModalBtnId) as HTMLButtonElement;
        this.closeDeleteModalBtn = document.getElementById("closeDeleteModal") as HTMLButtonElement;
        this.closeToastBtn = document.getElementById(this._closeToastBtnId) as HTMLButtonElement;

        this.triggerModalDeleteBtn = document.getElementById(this._triggerModalDeleteBtnId) as HTMLButtonElement;
        this.deleteConfirmBtn = document.getElementById(this._deleteConfirmBtnId) as HTMLButtonElement;
        this.FormEl = document.getElementById(this._formId) as HTMLFormElement;

        this.deleteModalEl = document.getElementById('deleteModal') as HTMLDivElement;
        this.modal = new Modal(this.modalFormEl);
        
        
    
        this.attach();
    }

    render() : void {
        
    }

    attach(): void {
        // this.FormEl.addEventListener('submit', this.submitHandler);
        this.tableEl.addEventListener('click', this.clickHandler);
        console.log(this.createBtn);

        if(this.createBtn) {
            this.createBtn.addEventListener('click', this.addHandler);
        }

        console.log(this.deleteConfirmBtn);
       

        this.deleteConfirmBtn.addEventListener('click', this.deleteHandler);
        this.closeDeleteModalBtn.addEventListener('click', this.hideDeleteModal);
        // this.closeFormModalBtn.addEventListener('click', this.closeFormModal);
        this.closeToastBtn.addEventListener('click', this.hideToast)
    }

    abstract submitHandler(e: Event) : void;

    @autobind
    clickHandler(e: Event) {
        e.preventDefault();

        const targetEl = e.target as HTMLElement;

        const btnEl = targetEl.closest('button')! as HTMLButtonElement;
        
        console.log(btnEl);

        if(btnEl) {
            this._currentId = btnEl?.getAttribute(`${this._type}-id`) as string ;
        }

        console.log(this._currentId);

        // Edit
        if (
            targetEl &&
            targetEl.matches("button, button i") &&
            targetEl.classList.contains("update-modal-trigger")
          ) {
            this.editHandler();
        }

        // Delete
        if (
            targetEl &&
            targetEl.classList.contains("delete-modal-trigger") &&
            targetEl.matches("button, button i")
          ) {
            this.showDeleteModal();
          }

    };

    abstract deleteHandler() : void 
    
    abstract addHandler(): void
    
    abstract editHandler(): void; 

    showDeleteModal() {

        // const deleteModalEl = document.getElementById('deleteModal');
        this.deleteModal = new Modal(this.deleteModalEl);
        this.deleteModal.show();
    };

    @autobind
    hideDeleteModal() {

        console.log("hide modal clicked!");

        // this.deleteModal = new Modal(this.deleteModalEl);
        this.deleteModal?.hide();
    }

    clearInputs() : void  {

    }

    clearTableData() {
        if(this.dataTable) {
            this.dataTable.destroy();
        }
    }

    showModal(type: string) {
        // type = add/update
        const typeCapitalized = Helper.capitalize(this._type);
        console.log(typeCapitalized);

        this.modalFormEl = document.getElementById(`${typeCapitalized}Modal`) as HTMLDivElement;
        this.modal = new Modal(this.modalFormEl);
        this.modal.show();
        this.closeFormModalBtn = document.getElementById('closeModalForm') as HTMLButtonElement;
        this.closeFormModalBtn.addEventListener('click', this.hideModal);

        let formElId = "";
        
        if(this._type === "category") {
            formElId = `${type}-cate-form`;
        }else if(this._type === "product") {
            formElId = `${type}-product-form`;
        }else {
            formElId = `${type}-${this._type}-form`;
        }

        this.FormEl = document.getElementById(formElId) as HTMLFormElement; // update-product/cate-form
        this.FormEl.addEventListener('submit', this.submitHandler);
    }

    @autobind
    showToast(type = "primary", title = `Add ${this._type}`, message = `Add ${this._type} Successfully!`, minutes = '1 minutes') {
        
        console.log(type, title, message, minutes);

        this.toastMsg = new ToastMessage(type, title, message , minutes);
       
        console.log(this.toastMsg);

        console.log(this.closeToastBtn);

        this.toastMsg.show();
    }

    @autobind
    hideModal() {

        console.log(this.modal);

        this.modal.hide();
    }

    @autobind
    hideToast() {
        console.log(this.toastMsg);

        console.log(this);

        console.log("hide toast successfully!");

        this.toastMsg.hide();
    }   

    @autobind
    closeFormModal() {
        this.modal.hide();
        this.removeBackdrop();
    }

    get component() {
        return templateHTML;
    }

    removeBackdrop() {
        const backdropEl = document.querySelector("div[modal-backdrop]") as HTMLDivElement;
        if(backdropEl) {
            backdropEl.remove();
        }
    }

}