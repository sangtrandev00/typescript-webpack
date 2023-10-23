import Component from '../../../components/base-component';

const templateHTML = `
     
<div class="py-12">
<!-- Desktop Responsive Start -->
<div class="hidden sm:flex flex-col justify-start items-start">
    <div class="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
        <h1 class="text-4xl font-semibold leading-9 text-gray-800  dark:text-white">Favourites</h1>
        <p class="text-base leading-4 text-gray-600 dark:text-white pb-1">(12 Items)</p>
    </div>
    <table class="w-full mt-16 whitespace-nowrap">
        <thead aria-label="table heading" class="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 dark:bg-gray-800 border-b">
            <tr>
                <th class="text-base font-medium leading-4 text-gray-600 dark:text-white 2xl:pl-20 pl-4 lg:pl-10">YOUR PRODUCT</th>
                <th class="text-base font-medium leading-4 text-gray-600 dark:text-white pl-4 lg:pl-10 2xl:pl-20">DESCRIPTION</th>
                <th class="text-base font-medium leading-4 text-gray-600 dark:text-white pl-4 lg:pl-10 2xl:pl-20">PRICE</th>
                <th class="text-base font-medium leading-4 text-gray-600 dark:text-white pl-4 lg:pl-10 2xl:pl-20">MORE OPTIONS</th>
                <th class="text-base font-medium leading-4 text-gray-600 dark:text-white 2xl:pl-28"></th>
            </tr>
        </thead>
        <tbody class="w-full text-left">
            <tr class="border-gray-200 border-b">
                <th><img class="pl-4 lg:pl-10 2xl:pl-20 w-[12rem]" src="https://i.ibb.co/44vJTd4/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-3.png" alt="shoe" /></th>
                <th class="mt-10 text-base font-medium leading-4 text-gray-600 pl-4 lg:pl-10 2xl:pl-20">
                    <p class="text-base leading-4 text-gray-800 dark:text-white">Jet black sportsmen shoes</p>
                </th>
                <th class="my-10 pl-4 lg:pl-102xl:pl-20">
                    <p class="dark:text-white">$90</p>
                </th>
                <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-4 lg:pl-10 2xl:pl-20">
                    <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none text-gray-800 dark:text-white focus:outline-none focus:underline">View details</a>
                </th>
                <th class="my-10 pl-4 lg:pl-12 2xl:pl-28 pr-4 2xl:pr-20">
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                </th>
            </tr>

            <tr class="border-gray-200 border-b">
                <th><img class="pl-4 lg:pl-10 2xl:pl-20 w-[12rem]" src="https://i.ibb.co/D40htNc/daniel-storek-JM-q-KEd1-GMI-unsplash-1.png" alt="shoes" /></th>
                <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-4 lg:pl-10 2xl:pl-20">
                    <p class="text-base leading-4 text-gray-800 dark:text-white">Jet black sportsmen shoes</p>
                </th>
                <th class="mt-10 pl-4 lg:pl-10 2xl:pl-20">
                    <p class="dark:text-white">$90</p>
                </th>
                <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-4 lg:pl-10 2xl:pl-20">
                    <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none text-gray-800 dark:text-white focus:outline-none focus:underline">View details</a>
                </th>
                <th class="mt-10 pl-4 lg:pl-12 2xl:pl-28 pr-4 2xl:pr-20">
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                </th>
            </tr>

            <tr class="border-gray-200 border-b">
                <th><img class="pl-4 lg:pl-10 2xl:pl-20 w-[12rem]" src="https://i.ibb.co/WsPGLM9/charles-deluvio-1-nx1-QR5d-TE-unsplash-1.png" alt="glasses" /></th>
                <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-4 lg:pl-10 2xl:pl-20">
                    <p class="text-base leading-4 text-gray-800 dark:text-white">Jet black sportsmen shoes</p>
                </th>
                <th class="my-10 pl-4 lg:pl-102xl:pl-20">
                    <p class="dark:text-white">$90</p>
                </th>
                <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-4 lg:pl-10 2xl:pl-20">
                    <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none text-gray-800 dark:text-white focus:outline-none focus:underline">View details</a>
                </th>
                <th class="my-10 pl-4 lg:pl-12 2xl:pl-28 pr-4 2xl:pr-20">
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                </th>
            </tr>

            <tr class="border-gray-200 border-b">
                <th><img class="pl-4 lg:pl-10 2xl:pl-20 w-[12rem]" src="https://i.ibb.co/k9YJ0q2/rocknwool-8-Lsy75-Lq-GVc-unsplash-1.png" alt="girl" /></th>
                <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-4 lg:pl-10 2xl:pl-20">
                    <p class="text-base leading-4 text-gray-800 dark:text-white">Jet black sportsmen shoes</p>
                </th>
                <th class="my-10 pl-4 lg:pl-102xl:pl-20">
                    <p class="dark:text-white">$90</p>
                </th>
                <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-4 lg:pl-10 2xl:pl-20">
                    <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none text-gray-800 dark:text-white focus:outline-none focus:underline">View detail</a>
                </th>
                <th class="my-10 pl-4 lg:pl-12 2xl:pl-28 pr-4 2xl:pr-20">
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                </th>
            </tr>
        </tbody>
    </table>
</div>
<!-- Desktop Responsive End -->

<!-- Mobile Responsive Start -->
<div class="flex justify-center items-center">
    <div class="sm:hidden flex flex-col justify-start items-start">
        <div class="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
            <p class="text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Favourites</p>
            <p class="text-base leading-4 text-gray-600 pb-1">(12 Items)</p>
        </div>
        <div class="border-gray-200 border-b pb-10">
            <div class="px-4 flex flex-col jusitfy-center items-start mt-10">
                <div>
                    <img src="https://i.ibb.co/bHgJDpd/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-2.png" alt="shoe" />
                </div>
            </div>
            <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                <div>
                    <p class="w-36 text-base leading-6 text-gray-800 dark:text-white">Jet black sportsmen shoes</p>
                </div>
                <div>
                    <p class="text-base font-semibold leading-4 text-gray-800 dark:text-white">$90</p>
                </div>
            </div>
            <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                <div>
                    <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none focus:outline-none focus:underline text-gray-800 dark:text-white"> View details</a>
                </div>
                <div>
                    <button class="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                </div>
            </div>
        </div>
        <div class="border-gray-200 border-b pb-10">
            <div class="px-4 flex flex-col jusitfy-center items-start mt-10">
                <div>
                    <img src="https://i.ibb.co/6y62DnT/daniel-storek-JM-q-KEd1-GMI-unsplash-1-1.png" alt="shoes" />
                </div>
            </div>
            <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                <div>
                    <p class="w-36 text-base leading-6 text-gray-800 dark:text-white">Jet black sportsmen shoes</p>
                </div>
                <div>
                    <p class="text-base font-semibold leading-4 text-gray-800 dark:text-white">$90</p>
                </div>
            </div>
            <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                <div>
                    <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none focus:outline-none focus:underline text-gray-800 dark:text-white"> View details</a>
                </div>
                <div>
                    <button class="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                </div>
            </div>
        </div>

        <div class="border-gray-200 border-b pb-10">
            <div class="px-4 flex flex-col jusitfy-center items-start mt-10">
                <div>
                    <img src="https://i.ibb.co/LR5LyDw/charles-deluvio-1-nx1-QR5d-TE-unsplash-1-1.png" alt="glasses" />
                </div>
            </div>
            <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                <div>
                    <p class="w-36 text-base leading-6 text-gray-800 dark:text-white">Jet black sportsmen shoes</p>
                </div>
                <div>
                    <p class="text-base font-semibold leading-4 text-gray-800 dark:text-white">$90</p>
                </div>
            </div>
            <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                <div>
                    <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none focus:outline-none focus:underline text-gray-800 dark:text-white"> View details</a>
                </div>
                <div>
                    <button class="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                </div>
            </div>
        </div>

        <div class="border-gray-200 border-b pb-10">
            <div class="px-4 flex flex-col jusitfy-center items-start mt-10">
                <div>
                    <img src="https://i.ibb.co/XzvpLZz/rocknwool-8-Lsy75-Lq-GVc-unsplash-1-4.png" alt="girl" />
                </div>
            </div>
            <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                <div>
                    <p class="w-36 text-base leading-6 text-gray-800 dark:text-white">Jet black sportsmen shoes</p>
                </div>
                <div>
                    <p class="text-base font-semibold leading-4 text-gray-800 dark:text-white">$90</p>
                </div>
            </div>
            <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                <div>
                    <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none focus:outline-none focus:underline text-gray-800 dark:text-white"> View details</a>
                </div>
                <div>
                    <button class="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Mobile Responsive End -->
</div>

`;

export default class Wishlist extends Component<HTMLDivElement> {
  constructor() {
    super('main');
    this.hostEl.innerHTML = templateHTML;

    this.attach();
  }

  attach() {}
}
