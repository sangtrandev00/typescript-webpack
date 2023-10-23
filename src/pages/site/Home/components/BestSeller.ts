import Component from '../../../../components/base-component';
import { BACKEND_URL } from '../../../../constant/backend-domain';
import { Productable } from '../../../../interface/Product';
import ShopApi from '../../../../api/shopApi';
import { autobind } from '../../../../decorators/autobind';

export default class BestSellerProducts extends Component<HTMLDivElement> {
  productNameEl!: HTMLElement;

  constructor() {
    super('best-products-seller');
    this.render();

    this.productNameEl = document.getElementById('best-seller-product-name') as HTMLElement;

    this.attach();
  }

  render() {
    (async () => {
      try {
        const productsResponse = await ShopApi.getProducts({ _limit: 8 });

        const { products } = productsResponse.data;

        this.hostEl.innerHTML = '';

        let i = 0;
        for (const productItem of products) {
          const { name, oldPrice, discount, thumbnail, _id } = productItem as Productable;

          const imageUrl = `${BACKEND_URL}/${thumbnail}`;
          const mainPrice = oldPrice - (oldPrice * (discount || 0)) / 100;
          const productHtml = `
                <div class="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900 shadow-md">
                    <div class="relative">
                        <img class="lg:block hidden" src="${imageUrl}" alt="${name}" />
                        <img class="lg:hidden" src="${imageUrl}" alt="${name}" />

                        <button class="top-4 right-4 absolute p-3.5 text-gray-600 dark:text-white hover:text-gray-500 flex justify-center items-center bg-white dark:bg-gray-900 rounded-full">
                            <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div class="flex justify-between mt-4">
                            <div>
                                <p class="best-sellers-product-name text-lg font-medium leading-none text-gray-800 dark:text-white cursor-pointer truncate w-[10rem]" data-id="${_id}">${name}</p>
                            </div>
                            <div>
                                <p class="text-lg leading-none text-right text-gray-600 dark:text-white">$${mainPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
              `;

          this.hostEl.insertAdjacentHTML('beforeend', productHtml);
          i++;
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }

  attach() {
    // this.productNameEl.addEventListener('click', this.viewProductDetail);

    this.hostEl.addEventListener('click', this.clickHandler);
  }

  clickHandler(e: Event) {
    console.log(e.target);
  }

  @autobind
  viewProductDetail() {
    // history.pushState({}, '', `/product/${this.productNameEl.getAttribute('data-id')}`);
    // new Router();
  }
}
