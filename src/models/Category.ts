// type GetCategoryResponse = {
//     data: CategoryInterface
// }

interface CategoryInterface {
    _id?: string;
    name: string;
    cateImage?: string;
    description?: string;
  }
  
  export default class Category implements CategoryInterface {
    constructor(
        public _id: string,
        public name: string,
        public cateImage: string,
        public description: string,
    ) {

    }

    

  }
  