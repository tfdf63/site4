// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         speed: 300,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/lefts.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/rights.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});