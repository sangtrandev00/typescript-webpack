

export default class Filter {
    constructor() {

    }

    render() {
        return `
        <div class="shop-content__sidebar hidden md:w-1/4 md:block ">

            <div action="#" method="get" id="shop-content__filter-bar" class="w-full h-40rem max-w-xs p-4 overflow-y-auto bg-white dark:bg-gray-800 border shadow">
                <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                    Apply filters
                </h5>
                <button type="button" data-drawer-dismiss="shop-content__filter-bar" aria-controls="drawer-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>
        
                <div class="flex flex-col justify-between flex-1">
                    <div class="space-y-6">
                        <!-- Categories -->
                        <div class="space-y-2" id="cate-list">
        
                            <h6 class="text-base font-medium text-black dark:text-white">
                                Categories
                            </h6>
                    </div>
        
                        <!-- Prices -->
                        <div class="space-y-2">
                            <h6 class="text-base font-medium text-black dark:text-white">
                                Prices
                            </h6>
                            <div class="flex items-center justify-between col-span-2 space-x-3">
                                <div class="w-full">
                                    <label for="min-experience-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        From
                                    </label>
        
                                    <input type="number" id="price-from" value="47.84" min="1" max="10000" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-slate-600 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-slate-600 dark:focus:border-primary-500" placeholder="" required="">
                                </div>
        
                                <div class="w-full">
                                    <label for="price-to" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        To
                                    </label>
        
                                    <input type="number" id="price-to" value="1140" min="1" max="10000" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-slate-600 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-slate-600 dark:focus:border-primary-500" placeholder="" required="">
                                </div>
                            </div>
                        </div>
        
                    </div>
        
                    <div class="bottom-0 left-0 flex justify-center w-full pb-4 mt-6 space-x-4 md:px-4 ">
                        <button id="apply-filter-btn" type="submit" class="w-full px-5 py-2 text-sm font-medium text-center text-white rounded-lg bg-slate-600 hover:bg-slate-600-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-slate-600 dark:hover:bg-slate-600-800 dark:focus:ring-primary-800">
                            Apply filters
                        </button>
                        <button id="reset-filter-btn" type="reset" class="w-full px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Clear all
                        </button>
                    </div>
                </div>
            </div>
        
            </div>
        `
    }

}