
// Write a class component

import ShopApi from "../../../../api/shopApi";
import ProductList from "../../../../components/ProductList"
import { autobind } from "../../../../decorators/autobind";
import Router from "../../../../router/router";
import ProductCard from "./ProductCard";


export default class ProductCardList extends ProductList {
 


    constructor() {
        // call super to extends from ProductItem class with arguments
        super();

        this.hostEl = document.getElementById('product-list')! as HTMLDivElement;


        this.attach();
    }
    
    load() {

        const loadList = async () => {

           const response = await ShopApi.getProducts({_limit: this.numOfProds}) 
            
            const {products} = response.data;

            this.hostEl.innerHTML = "";

            for (const product of products) {
                
                const {_id, name, oldPrice, discount, thumbnail} = product;

                const prodItem = new ProductCard(_id, name, oldPrice, discount, thumbnail as string);
                


                this.hostEl?.insertAdjacentHTML('beforeend', prodItem.component);
            }


        }

       loadList();

    }

    attach() {
        this.hostEl.addEventListener('click', this.moveDetailHandler)
    }

    @autobind
    moveDetailHandler(e: Event) {
        e.preventDefault();

        console.log(e.target);
        const imgEl = e.target as HTMLElement;

        if(imgEl && imgEl.nodeName === "IMG") {
            
            const cardProdEl = imgEl.closest('.card-product') as HTMLDivElement;
            const prodId = cardProdEl?.dataset.id;

            history.pushState(null, '', `/detail?id=${prodId}`);
            new Router();
        }
    }

}