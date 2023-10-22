"use strict";
exports.__esModule = true;
var Filter = /** @class */ (function () {
    function Filter() {
    }
    Filter.prototype.render = function () {
        return "\n        <div class=\"shop-content__sidebar hidden md:w-1/4 md:block \">\n\n            <div action=\"#\" method=\"get\" id=\"shop-content__filter-bar\" class=\"w-full h-40rem max-w-xs p-4 overflow-y-auto bg-white dark:bg-gray-800 border shadow\">\n                <h5 id=\"drawer-label\" class=\"inline-flex items-center mb-4 text-base font-semibold text-gray-500 uppercase dark:text-gray-400\">\n                    Apply filters\n                </h5>\n                <button type=\"button\" data-drawer-dismiss=\"shop-content__filter-bar\" aria-controls=\"drawer-example\" class=\"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white\">\n                    <svg aria-hidden=\"true\" class=\"w-5 h-5\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill-rule=\"evenodd\" d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\" clip-rule=\"evenodd\"></path>\n                    </svg>\n                    <span class=\"sr-only\">Close menu</span>\n                </button>\n        \n                <div class=\"flex flex-col justify-between flex-1\">\n                    <div class=\"space-y-6\">\n                        <!-- Categories -->\n                        <div class=\"space-y-2\" id=\"cate-list\">\n        \n                            <h6 class=\"text-base font-medium text-black dark:text-white\">\n                                Categories\n                            </h6>\n                    </div>\n        \n                        <!-- Prices -->\n                        <div class=\"space-y-2\">\n                            <h6 class=\"text-base font-medium text-black dark:text-white\">\n                                Prices\n                            </h6>\n                            <div class=\"flex items-center justify-between col-span-2 space-x-3\">\n                                <div class=\"w-full\">\n                                    <label for=\"min-experience-input\" class=\"block mb-2 text-sm font-medium text-gray-900 dark:text-white\">\n                                        From\n                                    </label>\n        \n                                    <input type=\"number\" id=\"price-from\" value=\"47.84\" min=\"1\" max=\"10000\" class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-slate-600 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-slate-600 dark:focus:border-primary-500\" placeholder=\"\" required=\"\">\n                                </div>\n        \n                                <div class=\"w-full\">\n                                    <label for=\"price-to\" class=\"block mb-2 text-sm font-medium text-gray-900 dark:text-white\">\n                                        To\n                                    </label>\n        \n                                    <input type=\"number\" id=\"price-to\" value=\"1140\" min=\"1\" max=\"10000\" class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-slate-600 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-slate-600 dark:focus:border-primary-500\" placeholder=\"\" required=\"\">\n                                </div>\n                            </div>\n                        </div>\n        \n                    </div>\n        \n                    <div class=\"bottom-0 left-0 flex justify-center w-full pb-4 mt-6 space-x-4 md:px-4 \">\n                        <button id=\"apply-filter-btn\" type=\"submit\" class=\"w-full px-5 py-2 text-sm font-medium text-center text-white rounded-lg bg-secondary-color hover:bg-tertiary-color focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-tertiary-color dark:hover:bg-tertiary-color dark:focus:bg-tertiary-color\">\n                            Apply filters\n                        </button>\n                        <button id=\"reset-filter-btn\" type=\"reset\" class=\"w-full px-5 py-2 text-sm font-medium text-primary-color bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-secondary-color focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:bg-tertiary-color dark:bg-primary-color dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-tertiary-color\">\n                            Clear all\n                        </button>\n                    </div>\n                </div>\n            </div>\n        \n            </div>\n        ";
    };
    return Filter;
}());
exports["default"] = Filter;
