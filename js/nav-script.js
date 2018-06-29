(function(){

    'use strict';

    var isMenuOpen = false;

$(document).ready(function(){
    $('.menu-toggle').on('click', function(){
        $('.menu-toggle').children('span').fadeToggle();
        $('nav').slideToggle();
        isMenuOpen = !isMenuOpen;
    });
});

$(window).on('resize', function(){
    if( $(window).width() > 767 ){
        $('nav').show();
    }else{
        if(isMenuOpen){
            $('nav').show();
        }else{
            $('nav').hide();
        }
    }
});
}());