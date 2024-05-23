$(document).ready(function(){
 

  // project_slider 
  $('#project_slider').owlCarousel({
    items:4,
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    smartspeed:5000,
    autoplay:true,
})

  // team 
  $('#team').owlCarousel({
    items:4,
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    smartspeed:5000,
    autoplay:true,
})
 
// donate_project
  $('#donate_project').owlCarousel({
    items:2,
    loop:true,
    margin:25,
    nav:true,
    dots:false,
    navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
})


    AOS.init();
  });

    // scrolling
        
    $(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });
    

   // loader start
   $(document).ready(function(){
    setTimeout(function(){
        $('.pre_loader').fadeOut();
    },3000);
})
//loader end


//Scroll back to top
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {  
      $('#return-to-top').fadeIn(200); 
  } else {
      $('#return-to-top').fadeOut(200);
  }
});
$('#return-to-top').click(function() {   
  $('body,html').animate({
      scrollTop : 0                      
  }, 500);
});


// accodion
$(function() {
  // (Optional) Active an item if it has the class "is-active"	
  $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
  
  $(".accordion > .accordion-item").click(function() {
      // Cancel the siblings
      $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      // Toggle the item
      $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
  });
});