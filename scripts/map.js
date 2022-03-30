// --- Adattagok ---
var map;
var mapCenter = { lat: 48.21667, lng: 20.3 };
var marker;
var optionIndex = 0;

// Google térkép inicializálása
function initMap() {
  
  // Térkép létrehozása
  map = new google.maps.Map(document.getElementById("map"), {
    center: mapCenter,
    zoom: 12,
  });

  // Legördülő lista listaelem kiválasztási esemény
  const onChangedLocation = function () {
    optionIndex = getOptionIndex();
    changeLocationMarker();
  };
  document.getElementById("location-select").addEventListener("change", onChangedLocation);

  // Fókusz gomb esemény
  document.getElementById("focus-button").addEventListener("click", () => {
    map.setCenter(mapCenter);
  });
}

// --- A függvény a helyszín indexét adja vissza a data tömb alapján
function getOptionIndex() {
  for (var i = 0; i < locationSelect.length; i++) {
    if (locationSelect[i].text === locationSelect.value){
      return i;
    }
  }
  return 0;
}

// --- Következő állomás kiválasztása
// n: eltérés mértéke az aktuális helyszín indexétől
function nextLocation(n) {
  optionIndex = chooseNextValue(n, optionIndex, locationSelect.length);
  locationSelect.value = locationSelect[optionIndex].text;
  changeLocationMarker();
}

// --- Új térkép marker elhelyezése
function changeLocationMarker() {

  // Érték hiányában visszatér
  if(locationSelect.value == "") return;
  // Meglévő marker törlése
  if(marker != null) marker.setMap(null);
  
  // Marker elhelyezése a helyszínhez tartozó pozícióra
  const locationIndex = getLocationIndex(locationSelect.value);
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(data[locationIndex].lat, data[locationIndex].lng),
    optimizid: true
  });
  marker.setMap(map);
  
  // Fókuszálás markerre
  mapCenter = marker.position;
  map.setCenter(mapCenter);
  
  // A leírás ablakot megnyitó esemény elhelyezése a markerre.
  marker.addListener("click", () => {
    showDetails(locationIndex);
  });
}