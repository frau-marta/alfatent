$(document).ready(function () {

    $('.nav-toggle').on('click',function () {
        $(this).toggleClass('active');
        // $('.content').toggleClass('d-none');
        // $('.footer').toggleClass('d-none');
        $('.head_menu').toggleClass('d-none');
        return false;
    });
    const clients_list_slider = new Swiper('.clients_list_slider', {
        pagination: {
            el: ".clients-swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".clients-swiper-button-next",
            prevEl: ".clients-swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            },
        }
    });
    const portfolio_list_slider = new Swiper('.portfolio_list_slider', {
        navigation: {
            nextEl: ".portfolio-swiper-button-next",
            prevEl: ".portfolio-swiper-button-prev",
        },
        pagination: {
            el: ".portfolio-swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });
    const gallery_block_slider = new Swiper('.gallery_block-slider', {
        navigation: true,
        pagination: {
            el: ".gallery-swiper-pagination",
            clickable: true,
        },
        autoHeight: false,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 3,
                },
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 4,
                grid: {
                    rows: 4,
                },
                spaceBetween: 20,
            },
        }
    });
    $('.cat_item-pict-small a').on('click',function () {
        let smallPict = $(this).attr('href');
        let bigPict = $('.cat_item-pict-large img');
        $(this).addClass('active').siblings().removeClass('active');
        bigPict.attr('src',smallPict);
        return false;
    });
});