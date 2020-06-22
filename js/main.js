$(function(){

      $('.header__slider').slick({
      	dots: true,
      });
     


     $('.list__slider').slick({
      slidesToShow: 3,

      responsive: [
          {
                  breakpoint: 737,
                  settings:{
                    slidesToShow: 2
                  }

          },
          {


             breakpoint: 550,
                  settings:{
                    slidesToShow: 1
                  }
          }




      ]
      
     
      


      });
     
      


     let anchors = document.querySelectorAll('header a[href*="#"]');

     for(anchor of anchors){
     	if (anchor){

     		anchor.addEventListener('click', function(e){
     			e.preventDefault();
                 anchorId = this.getAttribute('href');
                 document.querySelector(anchorId).scrollIntoView({
                 	behavior: 'smooth', block: 'start'
                 })
     		});

     	}
     }
       
   let header = $('#head-top');
   let headerM = $('.header');
   let headerH = headerM.innerHeight();
   let scrollPos = $(window).scrollTop();



   $(window).on('scroll', function(){
      scrollPos = $(this).scrollTop();

      if(scrollPos > headerH){
            header.addClass('fixed');
      } else {
      	header.removeClass('fixed');
      }

    
   });


$( "#burger" ).click(function() {
  $( "#head-menu" ).toggleClass('ama');
});


   

    let search = document.getElementById('search-s');

    search.onclick = function(){
      search.classList.toggle('active');
    }


    let searchL = document.getElementById('search-link');

    searchL.onclick = function(event){
      event.preventDefault();

    }

    let s1 = document.getElementById('s1');

    function myFunction(x) {
  if (x.matches) { // If media query matches
    search.onclick = function(){
      search.classList.toggle('active');
    }
  } else {
   
  }
}


    var x = window.matchMedia("(max-width: 1040px)")

    myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes





   new WOW().init();

});