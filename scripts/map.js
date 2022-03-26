// Tékép
var map;
var mapCenter = { lat: 48.21667, lng: 20.3 };
var marker;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: mapCenter,
      zoom: 12,
    });

    const onChangedLocation = function () {
      optionIndex = getOptionIndex();
      changeLocationMarker();
    };
  
    document.getElementById("location-select").addEventListener("change", onChangedLocation);
  
    document.getElementById("focus-button").addEventListener("click", () => {
      map.setCenter(mapCenter);
    });
}

function nextLocation(n) {
  optionIndex = chooseNextValue(optionIndex, n, locationSelect.length);
  locationSelect.value = locationSelect[optionIndex].text;
  changeLocationMarker();
}

function changeLocationMarker() {
  
    if(marker != null) marker.setMap(null);
    if(locationSelect.value == "") return;

    const locationIndex = getLocationIndex(locationSelect.value);
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(data[locationIndex].lat, data[locationIndex].lng),
      optimizid: true
    });
  
    marker.setMap(map);
    
    mapCenter = marker.position;
    map.setCenter(mapCenter);
    
    marker.addListener("click", (googleMapsEvent) => {
      showData(locationIndex);
    });
  }