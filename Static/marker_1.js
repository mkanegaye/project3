//This is the center of Washington D.C.
let myMap = L.map("map", {
  center: [38.9072, 77.0369],
  zoom: 15
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let url = "https://rutvirtdatapt-nkb3044.slack.com/files/U06T9PC5T7F/F07H2EG7XMJ/crime_incidents_in_2020.geojson"

d3.json(url).then(function(response) {

  //console.log(response);
  features = response.features;

  //console.log(features);

  // Comment this line in to render all 80,000 markers
  // let marker_limit = features.length;
  let marker_limit = 1000;

  for (let i = 0; i < marker_limit; i++) {

    let location = features[i].geometry;
    if(location){
      L.marker([location.coordinates[1], location.coordinates[0]]).addTo(myMap);
    }

  }

});
