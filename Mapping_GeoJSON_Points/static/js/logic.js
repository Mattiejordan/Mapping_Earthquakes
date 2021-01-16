// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5, -122.5], 10);
// L.geoJSON(geojsonFeature).addTo(map); 13.5.2 GeoJSON
// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);
// Grabbing our GeoJSON data. 13.5.2
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.city + "</h2>");
//   }
// }).addTo(map);
L.geoJson(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup();
  }
}).addTo(map);
// Coordinates for each point to be used in the line. 13.4.3 LAX to SFO
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];
// Create a polyline using the line coordinates and make the line red.
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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_Key
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);