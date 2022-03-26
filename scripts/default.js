// --- Adattagok ---

// Overlay
var detailsOverlay;
var detailsConntainer;
var detailsHeader;
var detailsTitle;
var deatailsDescription;
var alertMessage;

var locationSelect;
var focusButton;

var slideshowContainer;
var dotContainer;

var optionIndex = 0;

// Inicializálás

window.onload = function() {

  gatherReferences();
  
  // Helyszín legördülő menü feltöltés

  for(var i = 0; i < data.length; i++) {
    var option = document.createElement("option");
    option.value = data[i].title;
    option.text = data[i].title;
    locationSelect.add(option, null);
  }
  
  // Overlay
  detailsOverlay.addEventListener("click", () => {
    detailsOverlay.classList.remove("show-details");
    detailsConntainer.classList.remove("show-details");
  });
};

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

function getOptionIndex() {
    for (var i = 0; i < locationSelect.length; i++) {
        if (locationSelect[i].text === locationSelect.value){
            return i;
        }
    }
    return 0;
}

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    alertMessage.classList.replace("hide", "show");
  });
}

function closeAlert() {
  alertMessage.classList.replace("show", "hide");
}

function chooseNextValue(n, current, max) {
  if(current + n < 0) var value = max - 1;
  else if(current + n >= max) value = 0;
  else value = current + n;
  return value;
}