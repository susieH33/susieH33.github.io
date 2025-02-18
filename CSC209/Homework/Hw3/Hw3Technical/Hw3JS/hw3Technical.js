function buttonClick() {
let buttonText = document.getElementById("readMeB").textContent;
if(buttonText==='readMe'){
var text = document.getElementById("readMe");
  text.style.display = "block";
const button = 
        document.querySelector('button');
     button.innerHTML = 'Hide';
} else if(buttonText=='Hide'){
var text = document.getElementById("readMe");
  text.style.display = "none";
const button = 
        document.querySelector('button');
     button.innerHTML = 'readMe';
}

        }

/*theme change code adapted from https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript/*/
 function toggleThemeSmall() {
            // Select the <link> element
            let theme = document.getElementById('theme');

            theme.setAttribute('href', 'Hw3CSS/hw3Small.css');
        }
       function toggleThemeMed() {
            // Select the <link> element
            let theme = document.getElementById('theme');

            theme.setAttribute('href', 'Hw3CSS/technicalLevel1.css');
        }
       function toggleThemeBig() {
            // Select the <link> element
            let theme = document.getElementById('theme');

            theme.setAttribute('href', 'Hw3CSS/hw3Big.css');
        }

function makeSlideDiv(){
const slideNumber = ["1 / 3", "2 / 3", "3 / 3"];
const imgSrc = ["Hw3Images/img1.jpg", "Hw3Images/img2.jpg", "Hw3Images/img3.jpg"];
const captions = ["Dragonfly Specimens", "Collection Trip in NJ", "Final Presentation"];

const container = document.querySelector(".slideshow-container");

for(let i = 0; i < 3; i++){
console.log("is this even working...");
 document.querySelector(".slideshow-container").innerHTML =  document.querySelector(".slideshow-container").innerHTML+
        `<div class="mySlides">
              <div class="numbertext">${slideNumber[i]}</div>
              <img src="${imgSrc[i]}" style="width:100%">
              <div class="text">${captions[i]}</div>
         </div>`
  }
}


let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
            makeSlideDiv(); // First, generate the slides
            showSlides(slideIndex);  // Then, run the slideshow starting at slide 1
        });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



