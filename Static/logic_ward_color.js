// Creating the map object
// let myMap = L.map("map", {
//   center: [38.9072, -77.0369],
//   zoom: 11
// });

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Use this link to get the GeoJSON data.
let link = "../Data/Crime_Incidents_in_2021.geojson";

// The function that will determine the color of a neighborhood based on the borough that it belongs to
function chooseColor(WARD) {
  if (WARD == "1") return "yellow";
  else if ( WARD == "2") return "red";
  else if (WARD == "3") return "orange";
  else if (WARD == "4") return "green";
  else if (WARD == "5") return "purple";
  else if (WARD == "6") return "blue";
  else if (WARD == "7") return "brown";
  else return "black";
}

