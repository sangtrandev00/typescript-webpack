import CategoriesApi from '../api/categoriesApi';
import ProductsApi from '../api/productsApi';
import ShopApi from '../api/shopApi';
import { ICart, CartItem } from '../interface/Cart';

export default class Helper {
  static cart: CartItem[] = [];

  constructor() {
    Helper.cart = JSON.parse(localStorage.getItem('cart') || '[]').cartList;

    console.log(Helper.cart);
  }

  static toggleModal(
    toastElId: string,
    toastTitle: string,
    toastMinutes: string,
    toastMessage: string,
  ) {
    const toastEl = document.getElementById(toastElId) as HTMLElement;
    try {
      // Toast.getInstance(document.getElementById(toastElId)).update({
      //   autohide: true,
      //   deplay: 2000,
      // });

      toastEl.classList.add('data-[te-toast-show]:block');
      const toastTitleEl = toastEl.querySelector('.toast-title') as HTMLDivElement;
      const toastMinutesEl = toastEl.querySelector('.toast-minutes') as HTMLDivElement;
      const toastMessageEl = toastEl.querySelector('.toast-message') as HTMLDivElement;
      toastTitleEl.textContent = toastTitle;
      toastMinutesEl.textContent = toastMinutes;
      toastMessageEl.textContent = toastMessage;
    } catch (error) {
      console.log('error: ', error);
    }
  }

  static textContent(elementId: string, text: string) {
    if (!elementId) return;
    const element = document.getElementById(elementId)! as HTMLElement;
    if (element) {
      element.textContent = text;
    }
  }

  static innerHTML(elementId: string, html: string) {
    if (!elementId) return;
    const element = document.getElementById(elementId)! as HTMLElement;
    element.innerHTML = html;
  }

  static imageContent(elementId: string, imageUrl: string, alt?: string) {
    if (!elementId) return;
    const imageEl = document.getElementById(elementId)! as HTMLImageElement;

    imageEl?.setAttribute('src', imageUrl);
    if (alt) {
      imageEl?.setAttribute('alt', alt);
    } else {
      imageEl?.setAttribute('alt', 'Error image');
    }
  }

  static inputValue(elementId: string, value: string) {
    if (!elementId) return;
    const inputEl = document.getElementById(elementId)! as HTMLInputElement;
    inputEl?.setAttribute('value', value || '');
  }

  static getParams(params: string) {
    const url = new URL(location.href);
    return url.searchParams.get(params);
  }

  static setParams(key: string, value: string) {
    const url = new URL(location.href);
    url.searchParams.set(key, value);
    history.pushState({}, '', url);
  }

  static calcTotalAndLengthOfCart(cartList: CartItem[]) {
    const { totalPrice, cartLength } = cartList.reduce(
      (acc, item) => {
        acc['cartLength'] += item.qty;
        acc['totalPrice'] += item.qty * (item.price as number);

        return acc;
      },
      {
        totalPrice: 0,
        cartLength: 0,
      },
    );
    return {
      totalPrice,
      cartLength,
    };
  }

  static async addToCart(productId: string, qtyValue: number) {
    if (!productId) return;

    if (qtyValue <= 0 || typeof qtyValue !== 'number') {
      // show error message before return;

      alert(`${qtyValue} is lower than zero!!! or not valid!`);
    }

    const response = await ProductsApi.getById(productId);
    const { product } = response.data;
    const { oldPrice, discount, thumbnail, name, stockQty } = product;
    if (qtyValue > stockQty) {
      // Show modal alert
      alert(`Your quantity has overloaded at stock: ${stockQty} available`);
      return;
    }
    let newPrice = 0;

    if (oldPrice) {
      newPrice = oldPrice * (1 - discount / 100);
    }

    const currCart = JSON.parse(localStorage.getItem('cart')!) as ICart;

    console.log('current cart: ', currCart);

    let currCartList: CartItem[] = [];

    if (currCart) {
      currCartList = currCart.cartList;
    }

    // currCartList = currCart.cartList;
    const cartItemExistingIdx = currCartList.findIndex(
      (cartItem: CartItem) => cartItem.prodId === productId,
    );

    if (cartItemExistingIdx >= 0) {
      console.log('cart item: ', currCartList[cartItemExistingIdx]);
      currCartList[cartItemExistingIdx].qty += Number(qtyValue);
    } else {
      const cartItem: CartItem = {
        prodId: productId,
        name,
        image: thumbnail,
        price: newPrice,
        qty: qtyValue,
      };

      currCartList.push(cartItem);
    }

    const totalPrice = currCartList.reduce((acc: number, cartItem: CartItem) => {
      return acc + cartItem.qty * (cartItem.price as number);
    }, 0);

    const updatedCart = {
      cartList: currCartList,
      totalPrice: totalPrice,
    };
    // Up date UI here ???
    const { cartLength } = this.calcTotalAndLengthOfCart(currCartList);
    this.textContent('numberCartItems', cartLength + '');
    this.showPopupModal('popupModalBtn');

    this.cart = currCartList;
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  static updateUICartNumber() {
    const localCart = JSON.parse(localStorage.getItem('cart') as string) as ICart;
    const cartList = localCart.cartList;
    const { cartLength } = this.calcTotalAndLengthOfCart(cartList);

    if (this.cart) {
      this.textContent('numberCartItems', `${cartLength}`);
    } else {
      this.textContent('numberCartItems', '0');
    }
  }

  static capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static listCartHandler(
    cartList: CartItem[],
    viewCartEl: HTMLDivElement,
    callback: (
      prodId: string,
      name: string,
      thumbnail: string,
      cateName: string,
      qty: number,
      price: number,
      totalItem: number,
    ) => string,
  ) {
    (async () => {
      let sum = 0;

      for (const cartItem of cartList) {
        const { prodId, qty } = cartItem;

        const prodResponse = await ProductsApi.getById(prodId);

        const { product } = prodResponse.data;

        if (!product) return;

        const { oldPrice, discount, name, thumbnail, categoryId } = product;

        const cateResponse = await CategoriesApi.getById(categoryId);

        const { category } = cateResponse.data;
        let cateName = '';

        if (category) {
          cateName = category.name;
        }

        let price = 0;

        if (oldPrice) {
          price = oldPrice * (1 - discount / 100);
        }

        sum += qty * price;
        const totalItem = price * qty;
        const cartItemHtml = callback(prodId, name, thumbnail, cateName, qty, price, totalItem);

        viewCartEl.insertAdjacentHTML('beforeend', cartItemHtml);
      }
    })();
  }

  static updateViews(id: string) {
    (async () => {
      const viewsAtSessionStorage = JSON.parse(sessionStorage.getItem('views') as string);

      let alreadyViewed = id in viewsAtSessionStorage;

      if (alreadyViewed) return;

      // Set it to view session storage!
      viewsAtSessionStorage[id] = 'viewed';
      sessionStorage.setItem('views', JSON.stringify(viewsAtSessionStorage));
      // Add it into database

      try {
        await ShopApi.updateViews(id);
      } catch (error) {
        console.log(error);
      }
    })();
  }

  static showPopupModal(modalBtnId: string) {
    (document.getElementById(modalBtnId) as HTMLButtonElement).click();

    const modalTitle = document.getElementById('modalTitle') as HTMLHeadingElement;
    modalTitle.innerHTML = `Add To Cart Successfully!`;
  }
}
