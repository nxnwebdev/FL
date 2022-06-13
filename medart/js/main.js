$(document).ready(function(){
    $('.ma-burger').on('click', function(e){
     $(e.currentTarget).toggleClass('ma-burger_open');
     $('.ma-header_col-menu').toggleClass('d-block');
     $('.ma-header__menu').toggleClass('d-block');
     $('.ma-header__menu_item-sub').toggleClass('ma-header__menu_item-sub-mobile');
     $('.ma-header_col-phones').toggleClass('order-7 col-6 py-3');
     $('.ma-header_col-address').toggleClass('order-9 col-6 d-block py-3');
     $('.ma-header_col-time').toggleClass('order-8 col-6 d-block py-3');
     $('.ma-header_col-order').toggleClass('order-12 d-block');
     $('.ma-header_col-socials').toggleClass('order-10 col-6  d-block');
     $('.ma-header_col-search').toggleClass('order-11 d-block m-auto');
    });
    $('.ma-main-slider__items').slick({
        prevArrow:'<svg class="ma-main-slider_btn" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33 2L3 37L33 72"  stroke-width="4" stroke-linecap="round"/></svg>',
        nextArrow:'<svg class="ma-main-slider_btn" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L32 37L2 72"  stroke-width="4" stroke-linecap="round"/></svg>',
        dots:true,
        customPaging : function(slider, i) {
            return '<a href="#"><span></span></a>';
        },
    });
    $('.ma-header__menu_item-sub').on('click',function(e){
      e.preventDefault();

        if ($(e.currentTarget).hasClass('ma-header__menu_item-sub-mobile')){
            
            $(e.currentTarget).toggleClass('active');
            $(e.currentTarget).find('.ma-header__menu-sub').toggleClass('ma-header__menu-sub-mobile')
        }
       
    });

    $('.ma-header__menu-sub_item a').on('click',function(e){
        e.stopPropagation();
        const href = $(e.target).attr('href');
        if(href){
            document.location.href = $(e.target).attr('href');
        }
        
    });

});