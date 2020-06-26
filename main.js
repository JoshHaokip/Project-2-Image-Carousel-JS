const leftArrow = document.querySelector('.left');

const rightArrow = document.querySelector('.right');


var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("images");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";

}


  var slideIndex = 0; 
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("images");
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
  }





var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
	pauseButton.innerHTML = 'Play';
	playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
	pauseButton.innerHTML = 'Pause';
	playing = true;
	slideInterval = setInterval(showSlides, 2000);
}

pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};

showSlides();
playSlideshow();

let button = () => {
    if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
}

let rightMovement = () => {
    showSlides(slideIndex + 1);
  }

let leftMovement = () => {
    showSlides(slideIndex - 1);
}

rightArrow.addEventListener('click', rightMovement);

leftArrow.addEventListener('click', leftMovement);

document.addEventListener('keydown', (e) =>{

    switch (e.key) {

        case 'ArrowRight':
            rightMovement();
            break;
        
        case 'ArrowLeft': 
            leftMovement();
            break;
        
        
    }

})
