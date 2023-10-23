import Component from '../../../components/base-component';

const templateHTML = `
    
`;

export default class Wishlist extends Component<HTMLDivElement> {
  constructor() {
    super('main');
    this.hostEl.innerHTML = templateHTML;

    this.attach();
  }

  attach() {}
}
