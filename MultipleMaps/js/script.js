var mymap;
var fontanaIcon;

window.onload = function () {
    setMap();
    addLayer();
    addMarkers(geojson2, icons1);


    document.getElementById("btn1").onclick = function () {
        makeMap(geojson2, icons1)
    };

    document.getElementById("btn2").onclick = function () {
        makeMap(geojson3, icons2)
    };
};

function makeMap(json, icon) {
    mymap.remove();

    setMap();
    addLayer();
    addMarkers(json, icon)
}

function addLayer() {
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ2FtZWxhcyIsImEiOiJjam1qaHdpd2YwZXBnM2ttc2xuN2czYmhoIn0.YUFt9dn3TQCMyvqwp8YE8g', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);
}

function icons1(feature, latlng) {

    fontanaIcon = new L.icon({
        iconUrl:  'img/blue.png',
        iconSize: [15, 15], // size of the icon
        iconAnchor: [22, 22], // point of the icon which will correspond to marker's location
        popupAnchor: [-13, -26] // point from which the popup should open relative to the iconAnchor
    });
    return L.marker(latlng, {icon: fontanaIcon});
}

function icons2(feature, latlng) {

    fontanaIcon = new L.icon({
        iconUrl:  'img/red.png',
        iconSize: [15, 15], // size of the icon
        iconAnchor: [22, 22], // point of the icon which will correspond to marker's location
        popupAnchor: [-13, -26] // point from which the popup should open relative to the iconAnchor
    });
    return L.marker(latlng, {icon: fontanaIcon});
}

function setUpPopUp(feature, layer) {
    if (feature.properties && feature.properties.link1_href) {
        layer.bindPopup("<p class='nome_entidade'>" + feature.properties.name + "</p>" + "<p class='link_entidade'><a href='" + feature.properties.link1_href + "' target='blank'>Ver Dados</a></p>");
    }

}

function setMap() {
    mymap = L.map('mapid', {zoomControl: false}).setView([39.936946, -8.142685], 7);

}

function addMarkers(json, icons) {
    L.geoJSON(json, {
        pointToLayer: icons,
        onEachFeature: setUpPopUp
    }).addTo(mymap);
}




