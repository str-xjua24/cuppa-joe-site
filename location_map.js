let map;

function initMap() {
  let options = {
    center: { lat: 34.052, lng: -118.244 },
    zoom: 14
  }

  map = new google.maps.Map(document.getElementById("map"), options);
}

window.initMap = initMap;