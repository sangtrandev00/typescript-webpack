

export default class ActionBtn {

    // static instance: ProductItem = new ProductItem('', '', 0, 0, '');
    protected _newPrice: number = 0;
    constructor(protected btnClass: string, protected attrType: string, protected attributeId: string, protected buttonType: string = "button", protected iconClass: string, protected text: string) {
    }

    get component(): string {

         return `
        <button class="${this.btnClass}" ${this.attrType}-id="${this.attributeId}" type="${this.buttonType}">
            <i class="${this.btnClass} ${this.iconClass}"></i>
           ${this.text}
        </button>
        `
    }

}
