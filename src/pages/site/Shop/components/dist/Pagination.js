"use strict";
exports.__esModule = true;
var templateHTML = "\n    <nav aria-label=\"Page navigation example\" class=\"py-8\"><ul id=\"paginationEl\" class=\"list-style-none flex justify-center\"><li><a class=\"pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400\">Previous</a></li><li aria-current=\"page\"><a class=\"border-2 border-slate-300 relative block rounded bg-slate-600-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300\" data-page=\"1\" href=\"?_page=1\">1<span class=\"absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]\">(current)</span></a></li><li><a class=\"pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400\">Next</a></li></ul></nav>\n";
var Pagination = /** @class */ (function () {
    function Pagination() {
        var _a;
        this.hostEl = document.getElementById('pagination');
        this.hostEl.innerHTML = templateHTML;
        this.paginationEl = document.getElementById('pagination');
        console.log(this.paginationEl);
        this.ulPaginationEl = (_a = this.paginationEl) === null || _a === void 0 ? void 0 : _a.querySelector('#paginationEl');
        this.createPagination(1, 20, 12);
        // this.attach();
    }
    // attach() {
    //     console.log("attach event");
    //     console.log(this.paginationEl);
    //     console.log(this.ulPaginationEl);
    //     this.paginationEl.addEventListener('click', this.paginationHandler);
    // }
    Pagination.prototype.render = function () {
    };
    Pagination.prototype.createPagination = function (currentPage, totalProds, limit) {
        var totalPages = Math.ceil(totalProds / limit);
        // console.log("total pages: ", totalPages);
        // console.log("current page: ", currentPage);
        // console.log("total products: ", totalProds);
        // console.log("limit: ", limit);
        var navigationHTML = '<nav aria-label="Page navigation example" class="py-8"><ul id="paginationEl" class="list-style-none flex justify-center">';
        // Add the "Previous" link
        if (currentPage > 1) {
            navigationHTML += "<li><a class=\"border-2 border-slate-300 relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white\" data-page=" + (currentPage - 1) + " href=\"?_page=" + (currentPage - 1) + "\">Previous</a></li>";
        }
        else {
            navigationHTML += "<li><a class=\"pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400\">Previous</a></li>";
        }
        // Add the page links
        for (var page = 1; page <= totalPages; page++) {
            if (page === currentPage) {
                navigationHTML += "<li aria-current=\"page\"><a class=\"border-2 border-slate-300 relative block rounded bg-slate-600-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300\" data-page=" + page + " href=\"?_page=" + page + "\">" + page + "<span class=\"absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]\">(current)</span></a></li>";
            }
            else {
                navigationHTML += "<li><a class=\"relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white\" data-page=" + page + " href=\"?_page=" + page + "\">" + page + "</a></li>";
            }
        }
        // Add the "Next" link
        if (currentPage < totalPages) {
            navigationHTML += "<li><a class=\"border-2 border-slate-300 relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white\" data-page=" + (currentPage + 1) + " href=\"?_page=" + (currentPage + 1) + "\">Next</a></li>";
        }
        else {
            navigationHTML += "<li><a class=\"pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400\">Next</a></li>";
        }
        navigationHTML += "</ul></nav>";
        this.paginationEl.innerHTML = navigationHTML;
    };
    ;
    return Pagination;
}());
exports["default"] = Pagination;
