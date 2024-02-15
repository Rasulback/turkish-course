
let headerBtn = $('.header__button');
let overlay = $('.overlay')
let popupClose = $('.popup__close')
let popupBtn = $('.popup__form-btn')
let programsBtn = $('.programs__button')
let heroBtn = $('.hero__button')



headerBtn.on('click',function (){
    overlay.fadeIn('slow')
    overlay.css('display','flex')

});

popupClose.on('click', function (){
    overlay.fadeOut('slow')
});

popupBtn.on('click', function (e){
    e.preventDefault();
    overlay.fadeOut('slow')
});

overlay.on('click', function (e){
    if (e.target.className === 'overlay'){
        overlay.fadeOut('slow')
    }
});


programsBtn.on('click',function (){
    overlay.fadeIn('slow')
    overlay.css('display','flex')

});
heroBtn.on('click',function (){
    overlay.fadeIn('slow')
    overlay.css('display','flex')

});

let ul = $('.review__list')

ul.on('click', 'li:not(.review__item_active)', function() {
    $(this)
        .addClass('review__item_active').siblings().removeClass('review__item_active')
        .closest('div.review__tabs').find('div.review__tabs-content').removeClass('review__tabs-content_active').eq($(this).index()).addClass('review__tabs-content_active');
});

let owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    margin: 30,
    dotsContainer: '#dots',
    loop: true,
});
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
});
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});

$('.owl-dot').click(function (){
    owl.trigger('to.owl.carousel',[$(this).index(), 300]);
});








// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });