function hideLoader() {
    $('#loading').hide();
}

function showImg() {
    // $('#profileimg').show();
    document.getElementById("profileimg").src = "./img/profiles/profile500.jpg"; 
}

$("#field").hover(function(){
    document.getElementById('questions').innerHTML = "brain";
    }, function(){ document.getElementById('questions').innerHTML = "";});


$("#field-r").hover(function(){
    document.getElementById('questions').innerHTML = "intelligence";
    }, function(){ document.getElementById('questions').innerHTML = "";});


$("#field-d").hover(function(){
    document.getElementById('questions').innerHTML = "design";
    }, function(){ document.getElementById('questions').innerHTML = "";});


$("#field-p").hover(function(){
    document.getElementById('questions').innerHTML = "psychology";
    }, function(){ document.getElementById('questions').innerHTML = "";});

$("#field-t").hover(function(){
    document.getElementById('questions').innerHTML = "topology";
    }, function(){ document.getElementById('questions').innerHTML = "";});


$("#field-a").hover(function(){
    document.getElementById('questions').innerHTML = "perception";
    }, function(){ document.getElementById('questions').innerHTML = "";});

function waithideLoader() {
    $(window).ready(hideLoader);
}

setTimeout(waithideLoader, 4 * 1000);
setTimeout(showImg, 1 * 1000);
setTimeout(hideLoader, 20 * 1000);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

