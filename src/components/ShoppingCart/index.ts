interface IShoppingCart {
    addItem(item: string): void;
    removeItem(index: number): void;
    getItemCount(): number;
    render(): void;
  }
  

export default class ShoppingCart implements IShoppingCart{
    private items: string[];
  
    constructor() {
      this.items = [];
    }
  
    addItem(item: string): void {
      this.items.push(item);
    }
  
    removeItem(index: number): void {
      this.items.splice(index, 1);
    }
  
    getItemCount(): number {
      return this.items.length;
    }
  
    render(): void {
      const itemCount = this.getItemCount();
  
      console.log(`You have ${itemCount} items in your cart:`);
  
      for (let i = 0; i < itemCount; i++) {
        console.log(`${i + 1}. ${this.items[i]}`);
      }
    }
  }
  
  const myCart = new ShoppingCart();
  myCart.addItem("Shirt");
  myCart.addItem("Pants");
  
  myCart.render();
  