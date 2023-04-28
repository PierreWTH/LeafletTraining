var map = L.map('map').setView([48.549799005756995, 7.738005960238155], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var studentIcon = L.icon({
    iconUrl: 'icon.png',
    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [25, 50], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([48.549799005756995, 7.738005960238155], {icon: studentIcon}).addTo(map);
L.marker([48.530381394343344, 7.737110660204847], {icon: studentIcon}).addTo(map);
L.marker([48.5550762, 7.7452113], {icon: studentIcon}).addTo(map);
L.marker([48.5576525, 7.747702], {icon: studentIcon}).addTo(map);

