// --- Adattagok ---

// Leírás ablak
var detailsOverlay;
var detailsConntainer;
var detailsHeader;
var detailsTitle;
var deatailsDescription;
var alertMessage;

// Kezelő eszközök
var locationSelect;
var focusButton;

// Slideshow
var slideshowContainer;
var dotContainer;

// --- Inicializálás ---

window.onload = function() {

  gatherReferences();
  
  // Helyszín legördülő lista feltöltés

  for(var i = 0; i < data.length; i++) {
    var option = document.createElement("option");
    option.value = data[i].title;
    option.text = data[i].title;
    locationSelect.add(option, null);
  }
  
  // Leírás ablak bezáró esemény
  detailsOverlay.addEventListener("click", () => {
    detailsOverlay.classList.remove("show-details");
    detailsConntainer.classList.remove("show-details");
  });
};

// --- Hivatkozások gyűjtése ---
function gatherReferences() {
  detailsOverlay = document.querySelector(".details-overlay");
  detailsConntainer = document.querySelector(".details-container");
  detailsHeader = document.querySelector(".details-header");
  detailsTitle = document.querySelector(".details-title");
  deatailsDescription = document.querySelector(".details-description");
  alertMessage = null;
  locationSelect = document.getElementById("location-select");
  focusButton = document.getElementById("focus-button");
  slideshowContainer = document.querySelector(".slideshow-container");
  dotContainer = document.querySelector(".dot-container");
}

// --- Szöveg másolása vágólapra ---
function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    alertMessage.classList.replace("hide", "show");
  });
}

// --- Üzenet bezárása ---
function closeAlert() {
  alertMessage.classList.replace("show", "hide");
}

// --- Érték változásának vizsgálata, következő érték meghatározása ---
// n: változás mértéke
// current: aktuális érték
// max: a tartomány felső határa
function chooseNextValue(n, current, max) {
  if(current + n < 0) return max - 1;
  if(current + n >= max) return 0;
  return current + n;
}