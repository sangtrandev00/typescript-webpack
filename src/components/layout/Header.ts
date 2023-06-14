// enum HeaderType { Warrior, Mage, Healer };

// import { autobind } from "../../decorators/autobind";

export default class Header {

  private element: HTMLElement;

  constructor(
  
  ) {
    this.element = document.createElement('header');
    this.element.id = 'header';
    this.element.classList.add('header');

    this.render();
    
    
  }

  private render() : void {
    console.log("render");
    const appEl = document.getElementById('app')! as HTMLElement;
    const headerHtml = `
      <ul class="header__navigation">
        <li>
          <a href="/">Home page</a>
          <a href="/shop">Shop page</a>
          <a href="/detail">Detail page</a>
        </li>
      </ul>
    `
    if(appEl) {
      appEl.insertAdjacentHTML('afterbegin',headerHtml);
    }

  }



}