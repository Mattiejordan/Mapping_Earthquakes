// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// Coordinates for each point to be used in the line. 13.4.3 LAX to SFO
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];
// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "yellow"
//   }).addTo(map);

//  Add a marker to the map for Los Angeles, California. 13.4.1 Mapping_Single_Points
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// An array containing each city's location, state, and population. 13.4.2 replace marker variable
// let cities = [{

// Get data from cities.js 13.4.2
// let cityData = cities;

//   L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "red",
//     fillColor: '#ffffa1'
//  }).addTo(map);
 // Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
//    });
// Loop through the cities array and create one marker for each city. 13.4.2
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// 13.2.4 update with https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/1/1/0?
// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_Key
});
// streets.addTo(map);
// We create the dark view tile layer that will be an option for our map. 13.5.4
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_Key
});
// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};
// Create the map object with center, zoom level and default layer. 13.5.4
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satelliteStreets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// // Accessing the airport GeoJSON URL 13.5.3
// let airportData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/majorAirports.json";
// let airportData = "https://raw.githubusercontent.com/Mattiejordan/Mapping_Earthquakes/main/majorAirports.json";
// Accessing the Toronto airline routes GeoJSON URL. 13.5.5
// let torontoData = "https://raw.githubusercontent.com/Mattiejordan/Mapping_Earthquakes/main/torontoRoutes.json";
// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/Mattiejordan/Mapping_Earthquakes/main/torontoNeighborhoods.json"
// Create a style for the lines.
// let myStyle = {
//   color: "#ffffa1",
//   weight: 2
// }
// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data, {
//   style: myStyle,
//   onEachFeature: function(feature, layer) {
//     layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3><hr><h3> Destination: "
//     + feature.properties.dst + "</h3>");
//   }
// }).addTo(map);
// });
  L.geoJSON(data).addTo(map);
});

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);