import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder";

function UxbridgeMap() {
  const mapRef = useRef(null); // Create a ref for the map container
  const mapInstance = useRef(null); // To store the Leaflet map instance
  const customIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/15092/15092199.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });

  useEffect(() => {
    // Only initialize the map if it hasn't been already
    if (mapRef.current && !mapInstance.current) {
      // Create a Leaflet map centered at Uxbridge coordinates
      mapInstance.current = L.map(mapRef.current).setView(
        [51.5444, -0.476],
        15
      ); // Uxbridge coordinates with zoom level 15
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(mapInstance.current);
      
      // Create a search control for geocoding (searching locations) within Uxbridge
      const searchControl = L.Control.geocoder({
        defaultMarkGeocode: false, // Disable default marker on geocode
        geocoder: L.Control.Geocoder.nominatim({
          geocodingQueryParams: {
            viewbox: "-0.506,51.525,-0.446,51.563", // Define the boundary box for Uxbridge
            bounded: 1, // Limits the search to within the boundary box
          },
        }),
      }).addTo(mapInstance.current); // Add the search control to the map

      // Event listener for when a location is selected from the search results
      searchControl.on("markgeocode", function (e) {
        mapInstance.current.setView(e.geocode.center, 15); // Set the map view to the selected location with zoom level 15
        var marker = L.marker(e.geocode.center, { icon: customIcon }).addTo(
          mapInstance.current
        ); // Add a marker at the selected location
        marker
          .bindPopup(`<div style="font-size: 10px;">${e.geocode.name}</div>`)
          .openPopup(); // Show a pop up with the location name when clicked

        
        // Sends the search history to the database (back-end server)
        fetch("http://localhost:8080/addLocation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: e.geocode.name, // Sends the name of the searched location to the database
          }),
        })
          .then((response) => response.json()) // Gets a reponse from the database
          .then((data) => {
            console.log("Search history has been stored: ", data); // Shows that the data was store sucessfully
          })

          .catch((error) => {
            console.error("Search history could not be stored: ", error); // Shows that there was an error trying to store the data
          });
        });
      }

    // Cleanup function to run when the component unmounts
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove(); // This properly cleans up the map instance
        mapInstance.current = null; // Resets the map instance reference
      }
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />; // The map container
}
export default UxbridgeMap;


