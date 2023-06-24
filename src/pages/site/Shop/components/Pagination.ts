

const templateHTML = `
    <nav aria-label="Page navigation example" class="py-8"><ul id="paginationEl" class="list-style-none flex justify-center"><li><a class="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">Previous</a></li><li aria-current="page"><a class="border-2 border-slate-300 relative block rounded bg-slate-600-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300" data-page="1" href="?_page=1">1<span class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">(current)</span></a></li><li><a class="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">Next</a></li></ul></nav>
`

export default class Pagination {

    hostEl: HTMLElement;
    

    constructor() {
        this.hostEl = document.getElementById('pagination') ! as HTMLDivElement;
        this.hostEl.innerHTML = templateHTML;
        
    }

    attach() {
        
    }

    render() {

    }

}