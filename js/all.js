$(document).ready(function () {
   //做出header選單效果
   $('.header > ul > li > a').click(function (e) { 
    e.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    $(this).parent().find('ul').slideToggle();
    
   });

   $('.top a').click(function(e) { 
      e.preventDefault();
      $('html,body').animate({
         scrollTop:0
      },1000);
     });
      
   });
    
