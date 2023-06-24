import CategoryApi from '../api/categoriesApi';
import Category from '../models/Category';
type Listener<T> = (items: T[]) => void;
 class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(listener: Listener<T>) {
    this.listeners.push(listener);
  }
}
 export class CategoryState extends State<Category>{
  private categories: Category[] = [];
  private static instance: CategoryState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new CategoryState();
    return this.instance;
  }

   addCategory(
    name: string,
    cateImage: string = "https://placehold.co/100x100",
    description: string,
  ) {

    (async() => {

        const categoryData = {
            name,
            cateImage,
            description,
        };
        const response = await CategoryApi.add(categoryData);

        const {category} = response.data; 

        const newCategory = new Category(
            category._id,
            name,
            cateImage,
            description,
          );

          this.categories.push(newCategory);
          this.updateListeners();

    })()
 
  }

    updateCategory() {

  }

    deleteCategory() {
    
  }

  private updateListeners() {

    for (const listenerFn of this.listeners) {
      listenerFn(this.categories.slice());
    }

    console.log(this.listeners);

  }
  
}

export default CategoryState.getInstance();