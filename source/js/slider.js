  
const slider = document.querySelector('.swiper-container');

let mySwiper;

 const initSlider = () => {
   if (window.innerWidth < 768 && slider.dataset.mobile == 'true') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      
     });
     
     slider.dataset.mobile = 'true';
   }

   if (window.innerWidth >= 768) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
 }

 window.addEventListener('load', () => {
  initSlider();
 });

 window.addEventListener('resize', () => {
  initSlider();
 });
