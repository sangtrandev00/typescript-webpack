import CategoriesApi from '../../../../api/categoriesApi';
import Component from '../../../../components/base-component';
import CategoryItem from './Category';
import { CategoryInterface } from '../../../../interface/Category';

export default class CategoryList extends Component<HTMLDivElement> {
  // catesWrapperEl: HTMLDivElement;

  constructor() {
    super('categories-slider');
    this.render();
  }

  render() {
    (async () => {
      try {
        const cateResponse = await CategoriesApi.getAll();

        const { categories } = cateResponse.data;

        this.hostEl.innerHTML = '';

        let i = 0;
        for (const cateItem of categories) {
          const { name, cateImage } = cateItem as CategoryInterface;
          const cateItemHtml = new CategoryItem(i + 1, name, cateImage);
          this.hostEl.insertAdjacentHTML('beforeend', cateItemHtml.component);
          i++;
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }
}
