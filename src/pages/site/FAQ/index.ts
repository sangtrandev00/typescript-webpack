import Component from '../../../components/base-component';

const templateHTML = `

<div class="relative">
<img src="https://i.ibb.co/DQ4FZhL/pattern-bg.png" alt="blue pattern background" class="absolute w-full h-64 md:h-96 object-center object-fit z-0" />
<div class="relative flex flex-col items-center justify-center sm:px-0 px-6 z-1 pb-32  bg-gradient-to-b from-tertiary-color to-secondary-color">
    <div class="md:py-16 py-16">
        <h1 role="heading" class="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-white">Frequently asked questions</h1>
    </div>
    <div class="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full"> 
        <div class="bg-white dark:bg-gray-800 shadow rounded p-8">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-base font-semibold leading-none text-gray-800 dark:text-white">Why should I use your service?</h2>
                </div>
                <button data-menu class="px-1 py-1.5 rounded dark:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                    <img class="hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-2-svg1.svg" alt="dropdown">
                    <img class="transform rotate-180" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-2-svg1.svg" alt="dropdown">
                </button>
            </div>
            <ul class="hidden">
                <li>
                    <p class="text-base leading-normal text-gray-600 dark:text-gray-200 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                </li>
            </ul>
        </div>
        <div class="bg-white dark:bg-gray-800 shadow rounded p-8 mt-8">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-base font-semibold leading-none text-gray-800 dark:text-white">What payment method I can use?</h2>
                </div>
                <button data-menu class="px-1 py-1.5 rounded dark:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                    <img class="hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-2-svg1.svg" alt="dropdown">
                    <img class="transform rotate-180" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-2-svg1.svg" alt="dropdown">
                </button>
            </div>
            <ul class="hidden">
                <li>
                    <p class="text-base leading-normal text-gray-600 dark:text-gray-200 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                </li>
            </ul>
        </div>
        <div class="bg-white dark:bg-gray-800 shadow rounded p-8 mt-8">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-base font-semibold leading-none text-gray-800 dark:text-white">Is your service safe to use?</h2>
                </div>
                <button data-menu class="px-1 py-1.5 rounded dark:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                    <img class="hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-2-svg1.svg" alt="dropdown">
                    <img class="transform rotate-180" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-2-svg1.svg" alt="dropdown">
                </button>
            </div>
            <ul class="hidden">
                <li>
                    <p class="text-base leading-normal text-gray-600 dark:text-gray-200 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                </li>
            </ul>
        </div>
        <div class="bg-white dark:bg-gray-800 shadow rounded p-8 mt-8">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-base font-semibold leading-none text-gray-800 dark:text-white">How to recover password?</h2>
                </div>
                <button data-menu class="px-1 py-1.5 rounded dark:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer">
                    <img class="hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-2-svg1.svg" alt="dropdown">
                    <img class="transform rotate-180" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-2-svg1.svg" alt="dropdown">
                </button>
            </div>
            <ul class="hidden">
                <li>
                    <p class="text-base leading-normal text-gray-600 dark:text-gray-200 mt-4 lg:w-96">If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.</p>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>

`;

export default class FAQ extends Component<HTMLDivElement> {
  constructor() {
    super('main');
    this.hostEl.innerHTML = templateHTML;

    this.attach();
  }

  attach() {}
}
