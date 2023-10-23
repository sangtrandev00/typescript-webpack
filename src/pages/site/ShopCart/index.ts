import Component from '../../../components/base-component';
import { BACKEND_URL } from '../../../constant/backend-domain';
import { autobind } from '../../../decorators/autobind';
import { ICart, CartItem } from '../../../interface/Cart';
import Router from '../../../router/router';
import Helper from '../../../util/helper';

const templateHTML = `
    <div class="shopping-cart bg-gray-100">

    <div class="md:container mx-auto mt-10">
        <div class="flex shadow-md my-10 border overflow-hidden flex-wrap">
            <div id="view-cart"
                class="max-[667px]:w-full md:w-3/4 sm:w-full bg-white px-10 py-10 h-auto md:h-[46rem] overflow-y-auto">
                <div class="flex justify-between border-b pb-8">
                    <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                    <h2 class="font-semibold text-2xl"><span id="cartQty">3</span> Items</h2>
                </div>

                <!-- Cart heading title -->
                <div class="flex my-5 bg-tertiary-color py-2 px-4">
                    <h3 class="font-semibold text-color-2 text-xs uppercase w-2/5">Product Details</h3>
                    <h3 class="font-semibold text-center text-color-2 text-xs uppercase w-1/5">
                        Quantity</h3>
                    <h3 class="font-semibold text-center text-color-2 text-xs uppercase w-1/5">
                        Price</h3>
                    <h3 class="font-semibold text-center text-color-2 text-xs uppercase w-1/5">
                        Total</h3>
                </div>

            </div>

            <div id="summary" class="max-[667px]:w-full md:w-1/4 sm:w-full px-8 py-10">
                <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                <div class="flex justify-between mt-10 mb-5">
                    <span class="font-semibold text-sm uppercase">Subtotal:</span>
                    <span id="summaryTotal" class="font-semibold text-sm">590$</span>
                </div>
                <div>
                    <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                    <select class="block p-2 text-gray-600 w-full text-sm">
                        <option>Standard shipping - $8.00</option>
                    </select>
                </div>
                <div class="py-10">
                    <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo
                        Code</label>
                    <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full">
                </div>
                <button
                    class="bg-impress-color hover:bg-impress-bold-color px-5 py-2 text-sm text-white uppercase">Apply</button>
                <div class="border-t mt-8">
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span id="totalCost">$600</span>
                    </div>
                    <a href="./checkout.html" id="checkoutBtn"
                        class="text-center bg-secondary-color font-semibold hover:bg-tertiary-color py-3 text-sm text-white uppercase w-full block">Checkout</a>
                </div>
            </div>

        </div>
    </div>

    </div>
`;

export default class ShopCart extends Component<HTMLDivElement> {
  viewCartEl: HTMLDivElement;
  checkoutBtn: HTMLLinkElement;

  constructor() {
    super('main');
    this.hostEl.innerHTML = templateHTML;
    this.viewCartEl = document.getElementById('view-cart') as HTMLDivElement;
    this.checkoutBtn = document.getElementById('checkoutBtn') as HTMLLinkElement;
    this.renderCart();

    this.attach();
  }

  attach() {
    this.viewCartEl.addEventListener('click', this.clickHandler);
    this.checkoutBtn.addEventListener('click', this.moveToCheckout);
  }

  renderCart() {
    (async () => {
      const localCart = localStorage.getItem('cart');
      if (!localCart) return;

      const cart = JSON.parse(localCart) as ICart;

      const cartList = cart.cartList as CartItem[];

      await Helper.listCartHandler(cartList, this.viewCartEl, this.insertCart);

      // Calculate cart Item and number of items in cart!.
      const { totalPrice, cartLength } = Helper.calcTotalAndLengthOfCart(cartList);

      Helper.textContent('cartQty', cartLength.toString());
      Helper.textContent('summaryTotal', `$${totalPrice.toFixed(2)}`);
      Helper.textContent('totalCost', `$${totalPrice.toFixed(2)}`);

      const continueShopEl = `
          <a  href="./shop.html" class="flex font-semibold text-impress-color text-sm my-5">
      
          <svg class="fill-current mr-2 text-impress-color w-4" viewBox="0 0 448 512">
              <path
                  d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
            Continue Shopping
          </a>
        `;

      this.viewCartEl.insertAdjacentHTML('beforeend', continueShopEl);
    })();
  }

  insertCart(
    prodId: string,
    name: string,
    thumbnail: string,
    cateName: string,
    qty: number,
    price: number,
    totalItem: number,
  ) {
    const cartItemHtml = `
            <div prod-id=${prodId} class="cart-row flex items-center hover:bg-gray-100 -mx-8 px-6 py-3">
                <div class="flex w-2/5">
                    <div class="w-20">
                        <img class="h-24"
                            src="${BACKEND_URL}/${thumbnail}" alt="${name}">
                    </div>
                    <div class="flex flex-col justify-between ml-4 flex-grow">
                        <a href="./detail-product.html?id=${prodId}" class="font-bold text-sm">${name}</a>
                        <span class="text-red-500 text-xs">${cateName}</span>
                        <a href="#"
                            class="remove-link font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                    </div>
                </div>
                <div class="flex justify-center w-1/5">
                    <svg class="descrease-btn change-qty-btn fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512">
                        <path class="descrease-btn change-qty-btn"
                            d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <input class="cart-qty mx-2 border text-center w-12" type="text" value="${qty}">

                    <svg class="increase-btn change-qty-btn fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512">
                        <path class="increase-btn change-qty-btn"
                            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                </div>
                <span class="text-center w-1/5 font-semibold text-sm">$<span class="price-item">${price.toFixed(
                  2,
                )}</span> </span>
                <span class="text-center w-1/5 font-semibold text-sm">$<span class="total-item">${totalItem.toFixed(
                  2,
                )}</span></span>
            </div>
            `;

    return cartItemHtml;
  }

  @autobind
  clickHandler(e: Event) {
    e.preventDefault();

    const actionBtn = e.target as HTMLElement;

    if (actionBtn && actionBtn.classList.contains('remove-link')) {
      this.removeCart(actionBtn);
    }

    if (actionBtn && actionBtn.classList.contains('change-qty-btn')) {
      this.updateCart(actionBtn);
    }
  }

  removeCart(actionBtn: HTMLElement) {
    const cartRow = actionBtn.closest('.cart-row');
    const prodId = cartRow?.getAttribute('prod-id');

    // Remove out of DOM
    cartRow?.remove();

    // Remove out of localstorage

    const localCart = localStorage.getItem('cart');

    if (!localCart) return;

    const currentCartList = (JSON.parse(localCart) as ICart).cartList;

    const updatedCartList = currentCartList.filter(cartItem => cartItem.prodId !== prodId);

    const updatedCart = {
      cartList: updatedCartList,
    };

    // Update Top UI number of cart items
    const { cartLength } = Helper.calcTotalAndLengthOfCart(updatedCartList);
    Helper.textContent('numberCartItems', cartLength.toString());
    // Update Cart view ui

    this.updateUiViewCart(updatedCartList);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  updateLocalStorageCart(currProdId: string, newQty: number) {
    const localCart = localStorage.getItem('cart');

    if (!localCart) return;

    const { cartList } = JSON.parse(localCart) as ICart;

    const updatedCartList = [...cartList];

    const cartItemIndex = updatedCartList.findIndex(cartItem => cartItem.prodId === currProdId);

    updatedCartList[cartItemIndex].qty = newQty;

    const updatedCart = {
      cartList: updatedCartList,
    };

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    return updatedCart;
  }

  @autobind
  updateCart(actionBtn: HTMLElement) {
    const cartRow = actionBtn.closest('.cart-row');
    const currQtyEl = cartRow?.querySelector('.cart-qty') as HTMLInputElement;
    const currQty = +currQtyEl.value;

    const priceItem = cartRow?.querySelector('.price-item') as HTMLElement;
    const priceItemVal = +(priceItem.textContent || 0);
    const totalItem = cartRow?.querySelector('.total-item') as HTMLElement;
    // const totalItemVal = +(totalItem.textContent || 0 );
    const currProdId = cartRow?.getAttribute('prod-id') as string;

    // Increase quanity number of cart
    if (actionBtn && actionBtn.classList.contains('increase-btn')) {
      // const increaseBtn = e.target.closest(".increase-btn");
      // const descreaseBtn = e.target.closest(".descrease-btn");
      const newQty = currQty + 1;
      // Update qty at DOM
      currQtyEl.value = newQty.toString();

      // update qty at local storage
      const updatedCart = this.updateLocalStorageCart(currProdId, newQty) as ICart;

      // Update total item price at DOM
      const currTotalItemVal = priceItemVal * newQty;
      totalItem.textContent = currTotalItemVal.toFixed(2);

      this.updateUiViewCart(updatedCart.cartList);
    }

    // Descrease quantity number of cart
    if (actionBtn && actionBtn.classList.contains('descrease-btn')) {
      // Handle error
      if (currQty <= 1) return;
      const newQty = currQty - 1;

      // Update qty at DOM
      currQtyEl.value = newQty.toString();

      // Update at local storage
      const updatedCart = this.updateLocalStorageCart(currProdId, newQty) as ICart;

      // Update total item price at DOM

      const currTotalItemVal = priceItemVal * newQty;
      totalItem.textContent = currTotalItemVal.toFixed(2);

      this.updateUiViewCart(updatedCart.cartList);
    }
  }

  updateUiViewCart(cartList: CartItem[]) {
    const { totalPrice, cartLength } = Helper.calcTotalAndLengthOfCart(cartList);
    Helper.textContent('cartQty', cartLength.toString());
    Helper.textContent('summaryTotal', `$${totalPrice.toFixed(2)}`);
    Helper.textContent('totalCost', `$${totalPrice.toFixed(2)}`);
  }

  @autobind
  moveToCheckout(e: Event) {
    e.preventDefault();
    history.pushState({}, '', '/checkout');
    new Router();
  }
}
