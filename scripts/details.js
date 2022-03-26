function showData(index) {
  
    detailsOverlay.classList.add("show-details");
    detailsConntainer.classList.add("show-details");
    
    var placeData = getLocationData(index);
    
    generateSlideshow(index);
    showSlide(slideIndex);
    
    const text = placeData.lat.toString()+", "+placeData.lng.toString();
    detailsHeader.innerHTML = 
    "<i class=\"fa-solid fa-location-dot fa-lg\"></i><span class=\"geo\")>"+text+"</span><span class=\"alert hide\" onclick=\"closeAlert()\">- másolva. &times;</span>";
   
    detailsTitle.innerHTML = placeData.title;
    deatailsDescription.innerHTML = placeData.description;
  
    document.querySelector(".geo").setAttribute("onclick", "copyTextToClipboard(\""+text+"\")");
    alertMessage = document.querySelector(".alert");
  }

  function closeOverlay() {
    detailsOverlay.classList.remove("show-details");
    detailsConntainer.classList.remove("show-details");
  }