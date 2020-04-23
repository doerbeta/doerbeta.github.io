function openInfo1() {
  openInfo("Mental AI","https://www.baihan.nyc/img/publications/lin2020astory.gif","Presented at AAMAS 2020 <br /> Watch an RL agent playing games with mental disorder symptoms. Ongoing work includes human behavioral modeling with clinical data and understanding how reward processing bias affect reinforcement learning in nonstationary setting.");
}

function openInfo2() {
  openInfo("Dynamic Representational Similarity Analysis (dynRSA)","https://www.baihan.nyc/img/publications/lin2019visualize.gif","Presented at CCN 2019 <br /> Observe the dynamical changes of neural representations for brains or neural networks in action. Ongoing work includes visualization and inference on recurrent neural networks given different time-stamped stimuli and neuroimaging recordings given different visual inputs.");
}

function openInfo3() {
  openInfo("interactive Topological Data Analysis (iTDA)","https://www.baihan.nyc/img/publications/lin2019cliques2.png","Presented at ISMB 2019 <br /> Investigate the shape of the data through the lens of neighborhood information. Ongoing work includes higher-order simplicial characterization, temporal constraining topological mapping, dimensional reduction visualization etc.");
}


function openInfo4() {
  openInfo("Neural Minimum Description Length (Neural MDL)","https://www.baihan.nyc/img/publications/lin2019unsupervised.png","Presented at IJCAI 2019 Workshop <br /> Understand the model complexity of neural networks during learning, adapting and failing. Ongoing work includes information flow characterization with coding length, incrementally computed regularity-based normalizations as deep network regularization etc..");
}

function openInfo5() {
  openInfo("Voice ID on the fly","https://www.baihan.nyc/img/publications/lin2020voice.gif","Interact with this AI system to help it learn about speaker identity in real-time. Ongoing work includes semi-supervision with self-supervision in contextual bandits, real-time feature extraction given adaptive parameters etc.");
}

function openInfo6() {
  openInfo("Virtual-to-Real Mirrors/Windows (V2R)","https://www.baihan.nyc/img/publications/lin2020keep.gif","Presented at IJCAI 2020 <br /> Experience your real world projected into a virtual space (e.g. AR, VR, or even a movie). Ongoing work include V2R activation with interactive gesture detection, real-time style transform of virtual objects into real-world styles etc..");
}

function openInfo(title,image,text) {
  document.getElementById("info").style.width = "60%";
  document.getElementById("info").style.height = "60%";
  document.getElementById("infotext").innerHTML = '<div class="inforow"><h3 class="infotitle">&nbsp;&nbsp;' + title + '</h3></div><br>' +
      '<div class="infoimgcolumn"><img src=' + image + ' alt=""  style="width:100%;"></div>' +
      '<div class="infotextcolumn"><p class="infocontent"> ' + text + '</p></div>';
}

function closeInfo() {
  document.getElementById("info").style.width = "0";
  document.getElementById("info").style.height = "0";
}

function hideLoader() {
    $('#loading').hide();
}
function waithideLoader() {
    $(window).ready(hideLoader);
}
// setTimeout(waithideLoader, 0 * 1000);
// setTimeout(waithideLoader, 1 * 1000);
// setTimeout(waithideLoader, 2 * 1000);
setTimeout(waithideLoader, 3 * 1000);
setTimeout(waithideLoader, 4 * 1000);
setTimeout(hideLoader, 10 * 1000);

function showImg() {
    // $('#profileimg').show();
    document.getElementById("profileimg").src = "https://www.baihan.nyc/img/profiles/profile500.jpg"; 
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
 
$(".field-b").hover(function(){
$(this).attr("src", "./img/fields/brain-o.png");
}, function(){
$(this).attr("src", "./img/fields/brain.png");
});   

$(".field-r").hover(function(){
$(this).attr("src", "./img/fields/robot-o.png");
}, function(){
$(this).attr("src", "./img/fields/robot.png");
});   

$(".field-d").hover(function(){
$(this).attr("src", "./img/fields/design-o.png");
}, function(){
$(this).attr("src", "./img/fields/design.png");
});   

$(".field-a").hover(function(){
$(this).attr("src", "./img/fields/art-o.png");
}, function(){
$(this).attr("src", "./img/fields/art.png");
}); 

$(".field-p").hover(function(){
$(this).attr("src", "./img/fields/psych-o.png");
}, function(){
$(this).attr("src", "./img/fields/psych.png");
});   

$(".field-t").hover(function(){
$(this).attr("src", "./img/fields/topology-o.png");
}, function(){
$(this).attr("src", "./img/fields/topology.png");
});   

setTimeout(showImg, 1 * 1000);

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

