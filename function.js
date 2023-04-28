
// Définition du point sur lequel la vue de la map vas se mettre
var map = L.map('map').setView([48.549799005756995, 7.738005960238155], 13);

// Ajout de la couche de carte 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Style de l'icon
var studentIcon = L.icon({
    iconUrl: 'icon.png',
    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [25, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// Regroupement des points en clusters
var markers = new L.MarkerClusterGroup();

// Boucle pour créer des markers aléatoires a strasbourg

for(let i = 0; i < 120; i++){

longitude = Math.random() * (48.56 - 48.50) + 48.50
latitude = Math.random() * (7.76 - 7.70) + 7.70
markers.addLayer(L.marker([longitude, latitude], {icon: studentIcon}));
}

map.addLayer(markers);