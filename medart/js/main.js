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
    $('.ma-doctor__sert .row').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      adaptiveHeight: true,
      appendArrows:'.ma-doctor__sert_navs',
      prevArrow:'<svg class="ma-team-slider_btn" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M102 11C45.8462 11 11.9359 11 2 11M2 11L14.5 21M2 11L14.5 1"  stroke-width="2"/></svg>',
      nextArrow:'<svg class="ma-team-slider_btn" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 11C56.1538 11 90.0641 11 100 11M100 11L87.5 21M100 11L87.5 1"  stroke-width="2"/></svg>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
           
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
           
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });
    $('.ma-team-slider').slick({
        
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        appendArrows:'.ma-team-slider_navs',
        prevArrow:'<svg class="ma-team-slider_btn" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M102 11C45.8462 11 11.9359 11 2 11M2 11L14.5 21M2 11L14.5 1"  stroke-width="2"/></svg>',
        nextArrow:'<svg class="ma-team-slider_btn" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 11C56.1538 11 90.0641 11 100 11M100 11L87.5 21M100 11L87.5 1"  stroke-width="2"/></svg>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
               
              }
            },
            {
              breakpoint: 600,
              settings: {
               
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
               
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]
    }).on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
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