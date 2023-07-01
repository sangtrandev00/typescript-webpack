
export default class Slider {

    constructor() {

    }

    makeSlider(){
        const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLDivElement>;
        const btnLeft = document.querySelector('.slider__btn--left') as HTMLButtonElement;
        const btnRight = document.querySelector('.slider__btn--right') as HTMLButtonElement;
        const dotContainer = document.querySelector('.dots') as HTMLDivElement;
      
        let curSlide = 0;
        const maxSlide = slides.length;
      
        // Functions
        const createDots = function () {
          slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML(
              'beforeend',
              `<button class="dots__dot" data-slide="${i}"></button>`
            );
          });
        };
      
        const activateDot = function (slide: number) {
          document
            .querySelectorAll('.dots__dot')
            .forEach(dot => dot.classList.remove('dots__dot--active'));
      
          (document
            .querySelector(`.dots__dot[data-slide="${slide}"]`) as HTMLElement ) 
            .classList.add('dots__dot--active');
        };
      
        const goToSlide = function (slide: number) {
          slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
          );
        };
      
        // Next slide
        const nextSlide = function () {
          if (curSlide === maxSlide - 1) {
            curSlide = 0;
          } else {
            curSlide++;
          }
      
          goToSlide(curSlide);
          activateDot(curSlide);
        };
      
        const prevSlide = function () {
          if (curSlide === 0) {
            curSlide = maxSlide - 1;
          } else {
            curSlide--;
          }
          goToSlide(curSlide);
          activateDot(curSlide);
        };
      
        const init = function () {
          goToSlide(0);
          createDots();
      
          activateDot(0);
        };
        init();
      
        // Event handlers
        btnRight.addEventListener('click', nextSlide);
        btnLeft.addEventListener('click', prevSlide);
      
        document.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowLeft') prevSlide();
          e.key === 'ArrowRight' && nextSlide();
        });
      
        dotContainer.addEventListener('click', function (e) {

            const dotBtn = e.target as HTMLButtonElement;

          if (dotBtn.classList.contains('dots__dot')) {
            const { slide } = dotBtn.dataset;
            goToSlide(+(slide as string ) || 1);
            activateDot(+(slide as string) || 1);
          }
        });
      };
      

}