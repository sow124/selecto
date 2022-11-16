var swiper = new Swiper(".mySwiper", {
  autoplay:true,
  loop:true,
  grabCursor:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
setTimeout(function(){
  odometer.innerHTML = 276.422;
}, 1000);