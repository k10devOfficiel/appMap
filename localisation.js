let map = L.map('map')
// initialisation du map
map.setView([5.3626457879214176 , -4.090596550825054], 13);
// coordonées latitude longitude
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// afficher notre carte map avec la description de la  destination&
let marker = L.marker([5.3626457879214176, -4.090596550825054]).addTo(map);
marker.bindPopup("<b>PIGIER YOPOUGON!</b><br>Université des Metiers.").openPopup();
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);

}

map.on('click', onMapClick);
let  popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
//  au click  d'un élémént sur la carte je veux que tu affiche  les coordonnées latitude et longitude