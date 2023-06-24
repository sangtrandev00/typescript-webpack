import ShopApi from "../../api/shopApi";
import ProductItem from "../ProductItem";


export default class ProductList {
    // static instance: ProductList = new ProductList();
    hostEl: HTMLElement;
    numOfProds: number = 8;
    constructor() {
        this.hostEl =  document.getElementById('show-product')! as HTMLElement
    }

    load() {

        const loadList = async () => {

           const response = await ShopApi.getProducts({_limit: this.numOfProds}) 
            
            console.log(response)

            const {products} = response.data;

            this.hostEl.innerHTML = "";
            for (const product of products) {
                
                const {_id, name, oldPrice, discount, thumbnail} = product;

                const prodItem = new ProductItem(_id, name, oldPrice, discount, thumbnail as string);
                
                this.hostEl?.insertAdjacentHTML('beforeend', prodItem.component);
            }


        }

       loadList();

    }


}