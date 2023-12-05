// Create a Leaflet map centered at Uxbridge coordinates
var map = L.map('map').setView([51.5444, -0.476], 15); // Uxbridge coordinates with zoom level 15

// Add OpenStreetMap as the base tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19, // Set the maximum zoom level
}).addTo(map); // Add the tile layer to the map

// Create a search control for geocoding (searching locations) within Uxbridge
var searchControl = L.Control.geocoder({
  defaultMarkGeocode: false, // Disable default marker on geocode
  geocoder: L.Control.Geocoder.nominatim({
    geocodingQueryParams: {
      viewbox: '-0.506,51.525,-0.446,51.563', // Define the boundary box for Uxbridge
      bounded: 1, // Limit search to within the boundary box
    },
  }),
}).addTo(map); // Add the search control to the map

// Event listener for when a location is selected from the search results
searchControl.on('markgeocode', function (e) {
  map.setView(e.geocode.center, 15); // Set the map view to the selected location with zoom level 15
  var marker = L.marker(e.geocode.center).addTo(map); // Add a marker at the selected location
  marker.bindPopup(e.geocode.name).openPopup(); // Show a popup with the location name when clicked
});

