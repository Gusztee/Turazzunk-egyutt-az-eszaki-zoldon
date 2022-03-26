var slideIndex = 1;
var objectFit = true;

function generateSlideshow(index) {
  
    var imageCount = Object.keys(data[index].image).length;
    slideshowContainer.innerHTML = "";
    dotContainer.innerHTML = "";
    slideIndex = 1;

    for(var i = 0; i < imageCount; i++) {

        var slide = document.createElement("div");
        slide.classList.add("slideshow");
        slide.classList.add("fade");
        
        var numberText = document.createElement("div");
        numberText.classList.add("numbertext");
        numberText.innerHTML = (i+1).toString() + " / " + imageCount.toString();
        
        var slideImage = document.createElement("img");
        slideImage.id = "slide"+(i+1).toString();
        slideImage.classList.add("cover");
        slideImage.src = data[index].image[i];
        slideImage.alt = "slideshow-image";
        slideImage.setAttribute("onclick", "changeObjectFit(\""+slideImage.id+"\")");
        
        slide.appendChild(numberText);
        slide.appendChild(slideImage);
        slideshowContainer.appendChild(slide);

        var dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("onclick", "jumpToSlide("+(i+1).toString()+")");
        dotContainer.appendChild(dot);
    }
}

function nextSlide(n) {
    showSlide(slideIndex += n);
}

function jumpToSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("dot");
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

function changeObjectFit(id) {
    let element = document.getElementById(id);
    if(objectFit) element.classList.replace("cover", "contain");
    else element.classList.replace("contain", "cover");
    objectFit = !objectFit;
}