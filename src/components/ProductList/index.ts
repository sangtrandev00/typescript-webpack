import ShopApi from "../../api/shopApi";
import { autobind } from "../../decorators/autobind";
import { Productable } from "../../interface/Product";
import Router from "../../router/router";
import Helper from "../../util/helper";
import ProductItem from "../ProductItem";

export default class ProductList  {
    // static instance: ProductList = new ProductList();
    hostEl: HTMLElement;
    _limit: number = 8;
    _currPage: number;

    products: Productable[] = [];

    constructor(hostElId?: string) {
        if(hostElId) {
            this.hostEl =  document.getElementById(hostElId)! as HTMLElement;
        }else {
            this.hostEl =  document.getElementById("show-product")! as HTMLElement;
        }
        this._currPage = +(Helper.getParams('_page') as string ) || 1;

        this.attach();
    }

    attach() {
        console.log("host: ", this.hostEl);

        this.hostEl.addEventListener('click', this.clickHandler);
    }

    load(): void {
        this._limit = +(Helper.getParams('_limit') as string) || 8;
        this._currPage = +(Helper.getParams('_page') as string) || 1;

        (async () => {

           const response = await ShopApi.getProducts({_limit: this._limit, _page: this._currPage}) 
            
            const {products} = response.data;
            this.products = products;
            this.hostEl.innerHTML = "";
            for (const product of products) {
                
                const {_id, name, oldPrice, discount, thumbnail} = product;

                const prodItem = new ProductItem(_id, name, oldPrice, discount, thumbnail as string);
                
                this.hostEl?.insertAdjacentHTML('beforeend', prodItem.component);
            }

            const showProductsEl = document.getElementById('show-result-products') as HTMLDivElement;
            showProductsEl.innerText = `Showing ${this.products.length} products`;

        })()

    }

    @autobind
    clickHandler(e: Event){
        e.preventDefault();

        console.log("clicked",e.target);

        const clickBtn = e.target as HTMLElement;

        if(clickBtn && clickBtn.nodeName === "IMG" || clickBtn.classList.contains('detail-product')) {
            this.moveDetailHandler(clickBtn);
        }

        if(clickBtn && clickBtn.classList.contains('add-to-cart')) {
            this.addCartHandler(clickBtn);
        }
    }

    @autobind
    moveDetailHandler(linkEl: any) {

            const cardProdEl = linkEl.closest('.card-product') as HTMLDivElement;
            const prodId = cardProdEl?.dataset.id;

            history.pushState(null, '', `/detail?id=${prodId}`);
            new Router();
    }

    addCartHandler(addToCartBtn: any) {

        const cardProdEl = addToCartBtn.closest('.card-product') as HTMLDivElement;
        const prodId = cardProdEl?.dataset.id;
        Helper.addToCart(prodId as string, 1);

    }

    get getProducts() {
        return this.products;
    }

}