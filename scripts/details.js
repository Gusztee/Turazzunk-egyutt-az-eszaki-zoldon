// --- Leírás ablak megnyitásakor ---
// index: a helyszín sorszáma a listában
function showDetails(index) {
  
  // Leírás ablak megjelenítése
  detailsOverlay.classList.add("show-details");
  detailsConntainer.classList.add("show-details");
  
  // Helyszín adatok kiolvasása
  var placeData = getLocationData(index);
  
  // Slideshow generálása és megjelenítése
  generateSlideshow(index);
  
  // Geokoordináták kiírása
  const text = placeData.lat.toString()+", "+placeData.lng.toString();
  detailsHeader.innerHTML = 
  "<i class=\"fa-solid fa-location-dot fa-lg\"></i><span class=\"geo\")>"+text+"</span><span class=\"alert hide\" onclick=\"closeAlert()\">- másolva. &times;</span>";
  
  // Leírás szövegek beállítása
  detailsTitle.innerHTML = placeData.title;
  deatailsDescription.innerHTML = placeData.description;

  // Geokoordináta másolási esemény létrehozása és üzenet szöveg beállítása
  document.querySelector(".geo").setAttribute("onclick", "copyTextToClipboard(\""+text+"\")");
  alertMessage = document.querySelector(".alert");
}

// --- Leírás ablak bezárása ---
function closeOverlay() {
  detailsOverlay.classList.remove("show-details");
  detailsConntainer.classList.remove("show-details");
}