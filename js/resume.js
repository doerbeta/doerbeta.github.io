function hideLoader() {
    $('#loading').hide();
}

function showImg() {
    // $('#profileimg').show();
    document.getElementById("profileimg").src = "./img/profiles/profile500.jpg"; 
}

function changeText(text) {
  var display = document.getElementById('questions');
  display.innerHTML = text;
}
   
function fieldB() { changeText('How to capture the information flow of the brain in a dynamic domain? How to compare brain with models? How is brain generative or adversarial? How to understand the biological constraints of these neural computations?');}
function fieldR() { changeText('How to develop AI that generalize across tasks and evolve across environments? How to model human behaviors with artificial agents via few-shot interactions? How to interpret the neural computations in deep networks?');}
function fieldD() { changeText('How to best visualize high-dimensional dynamic data? How to generate creative design computationally given simple aesthetic prior? How to model human creativity? How to generate creative processes with state-space language?');}
function fieldT() { changeText('How to represent complex data and their internal structures? What is the proper mathematical language that is both interpretable and informative? Should these invariant graphical structures be static, dynamic, or interactive?');}
function fieldP() { changeText('How do mind work in general? Is there a cogntive map for thought process? What is the time resolution of thinking? What is a meta mechanism to judicate between competing processes? How to model a society of minds?');}
function fieldA() { changeText('How do biological sensory systems allocate resources during a task? What are the critical states during a complicated high-level sensory understanding, such as storyline extracting from a scene, or imaginations?');}

function defaultText(text) {
  var display = document.getElementById('questions');
  display.innerHTML = "<span style='color: white;'>How to best visualize high-dimensional dynamic data? How to generate creative design computationally given simple aesthetic prior? How to model human creativity? How to generate creative processes with state-space language?</span>";
}
          

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

