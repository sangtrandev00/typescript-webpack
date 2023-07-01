// Write a class component
import ShopApi from "../../../../api/shopApi";
import ProductList from "../../../../components/ProductList";
import { Productable } from "../../../../interface/Product";
import Pagination from './Pagination';
import ProductCard from "./ProductCard";

interface Iquery {
    _limit?: number;
    _page?: number;
    _sort?: string;
    _order?: string;
    _q?: string;
    _min?: number;
    _max?: number;
    _cateIds?: string;
}

export default class ProductCardList extends ProductList {

    // hostEl: HTMLDivElement;

    pagination: Pagination;
    products: Productable[] = [];

    constructor(public query: Iquery) {
        // call super to extends from ProductItem class with arguments
        super('product-list');
        
        console.log(this.hostEl);

        console.log("init productcard list");

        this.pagination = new Pagination();
    }

    // attach() {

    //     console.log(this.hostEl);

    //     this.hostEl.addEventListener('click', this.clickHandler);
    // }
    
    load() {
        const loadList = async () => {

            const response = await ShopApi.getProducts(this.query) 
            
            const {
                products,
                pagination: {_totalRows}
            } = response.data;

            this.products = products;

            this.hostEl.innerHTML = "";

            for (const product of products) {
                
                const {_id, name, oldPrice, discount, thumbnail} = product;

                const prodItem = new ProductCard(_id, name, oldPrice, discount, thumbnail as string);
                
                this.hostEl?.insertAdjacentHTML('beforeend', prodItem.component);
            }

            const {_page,_limit} = this.query;

            
            this.pagination.createPagination(_page || 1, _totalRows, _limit || 12);

        }

       loadList();

    }

}