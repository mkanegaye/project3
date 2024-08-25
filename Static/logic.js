// Store our API endpoint as queryUrl. *************we still need to change this file to match our geojsons**********************************

let myMap = L.map("map", {
  center: [38.9072, -77.0369],
  zoom: 15,
})
let queryUrl = "../Data/Crime_Incidents_in_2021.geojson";
function init(){
// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  
  createFeatures(data);
});

}
function createFeatures(crimeData) {
console.log(crimeData)
  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${feature.properties.SHIFT}</h3><hr><p>${feature.properties.OFFENSE}</p>`);
  }
function homicide_filter(feature){
  if(feature.properties.OFFENSE==="HOMICIDE")return true
}
  // Create a GeoJSON layer that contains the features array on the crimeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  let Crime_incidents = L.geoJSON(crimeData, {
    onEachFeature: onEachFeature, 
    filter: homicide_filter
  });

  // Send our crimeData layer to the createMap function/
  createMap(Crime_incidents);
}

function createMap(crimeData) {

  // Create the base layers.
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object.
  let baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

  // Create an overlay object to hold our overlay.
  let overlayMaps = {
    Crimedata: crimeData
  };

  // Create our map, giving it the streetmap and crimeData layers to display on load.
  // let myMap = L.map("map", {
  //   center: [38.9072, -77.0369]
  //   ,
  //   zoom: 5,
  //   layers: [street, crimeData]
  // });
  // console.log("logic")
  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
//   // Getting our GeoJSON data
// d3.json(link).then(function(data) {
//   // Creating a GeoJSON layer with the retrieved data
//   L.geoJson(data, {
//     style: function(feature) {
//       return {
//         color: "white",
//         fillColor: chooseColor(feature.properties.WARD),
//         fillOpacity: 0.5,
//         weight: 1.5
//       };
    // }
  // }).addTo(myMap);

}init()