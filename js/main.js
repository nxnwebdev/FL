$(document).ready(function(){
    $('.ma-burger').on('click', function(e){
     $(e.currentTarget).toggleClass('ma-burger_open');
     $('.ma-header_col-menu').toggleClass('d-block');
     $('.ma-header__menu').toggleClass('d-block');
     $('.ma-header__menu_item-sub').toggleClass('ma-header__menu_item-sub-mobile');
    });

    $('.ma-header__menu_item-sub').on('click',function(e){
        if ($(e.currentTarget).hasClass('ma-header__menu_item-sub-mobile')){
            e.preventDefault();
            $(e.currentTarget).toggleClass('active');
            $(e.currentTarget).find('.ma-header__menu-sub').toggleClass('ma-header__menu-sub-mobile')
        }
    });
});