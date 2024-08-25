//This is the center of Washington D.C.
// let myMap = L.map("map", {
//   center: [38.9072, -77.0369],
//   zoom: 15,
// });
// console.log("marker")
// Adding the tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);

// let url = "../Data/Wards_from_2022.geojson"
let url = "../Data/Crime_Incidents_in_2021.geojson"
d3.json(url).then(function(response) {

  //console.log(response);
  features = response.features;

  //console.log(features);

  // Comment this line in to render all 80,000 markers*************we still need to change this file to match our geojsons**********************************
  // let marker_limit = features.length;
  let marker_limit= 50
  ;

  for (let i = 0; i < marker_limit; i++) {

    let location = features[i].geometry;
    if(location){
      L.marker([location.coordinates[1], location.coordinates[0]]).addTo(myMap);
    }

  }

});
