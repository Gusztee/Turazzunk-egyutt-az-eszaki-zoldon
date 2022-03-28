// --- Adattagok ---
var slideIndex = 1;
var objectFit = true;

// --- Slideshow generálása
// index: helyszín indexe a data tömbben
function generateSlideshow(index) {
    
    // Képek számának meghatározása
    const imageCount = Object.keys(data[index].image).length;
    
    // Kezdőértékek beállítása
    slideshowContainer.innerHTML = "";
    dotContainer.innerHTML = "";
    slideIndex = 1;

    // Képek és léptető pontok generálása
    for(var i = 0; i < imageCount; i++) {
        
        // Tároló készítése, formázása
        const slide = document.createElement("div");
        slide.classList.add("slideshow");
        slide.classList.add("fade");
        
        // Aktuális kép száma / összes képek száma szöveg készítése
        const numberText = document.createElement("div");
        numberText.classList.add("numbertext");
        numberText.innerHTML = (i+1).toString() + " / " + imageCount.toString();
        
        // Kép betöltése, esemény hozzáadása
        const slideImage = document.createElement("img");
        slideImage.id = "slide"+(i+1).toString();
        slideImage.classList.add("cover");
        slideImage.src = data[index].image[i];
        slideImage.alt = "slideshow-image";
        slideImage.setAttribute("onclick", "changeObjectFit(\""+slideImage.id+"\")");
        
        // HTML struktúra összeállítása
        slide.appendChild(numberText);
        slide.appendChild(slideImage);
        slideshowContainer.appendChild(slide);

        // Léptetőgombok létrehozása, esemény hozzáadása
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("onclick", "jumpToSlide("+(i+1).toString()+")");
        dotContainer.appendChild(dot);
    }

    // Slideshow megjelenítése
    showSlide();
}

// --- Megjeleníti a slideshow-t
function showSlide() {
    
    // Referenciák gyűjtése
    var slides = document.getElementsByClassName("slideshow");
    var dots = document.getElementsByClassName("dot");
    
    // Betöltendő kép számának ellenőrzése
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    
    // Képek és pontok elrejtése
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Aktív kép megjelenítése
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// --- A slideshow következő képének kérése
// n: 1 vagy -1
function nextSlide(n) {
    showSlide(slideIndex += n);
}

// --- Ugrás képre a slideshow-ban ---
// n: a kért kép sorszáma
function jumpToSlide(n) {
    showSlide(slideIndex = n);
}

// --- A slideshow képigazításának változtatása
// id: a kép html cimkéjén lévő id attribútum szövege
function changeObjectFit(id) {
    const element = document.getElementById(id);
    if(objectFit) element.classList.replace("cover", "contain");
    else element.classList.replace("contain", "cover");
    objectFit = !objectFit;
}