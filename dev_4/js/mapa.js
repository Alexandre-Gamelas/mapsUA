window = onload = function (ev) {
//para gerar os pontos em geojason a partir da localização: http://geojson.io

//LEAFTLET

var mymap = L.map('mapid').setView([38.736946, -9.142685], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ2FtZWxhcyIsImEiOiJjam1qaHdpd2YwZXBnM2ttc2xuN2czYmhoIn0.YUFt9dn3TQCMyvqwp8YE8g', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);


//icons
function icons(feature, latlng){
    switch(feature.properties["type"]) {
        case "Coral/coro/grupo de cantares/grupo vocal/grupo de Cante/Orfe�o":
            var fontanaIcon = new L.icon({
                iconUrl: 'img/icon1.png',
                iconSize:     [22, 30], // size of the icon
                iconAnchor:   [22, 22], // point of the icon which will correspond to marker's location
                popupAnchor:  [-11, -26] // point from which the popup should open relative to the iconAnchor
            });
            return L.marker(latlng, {icon: fontanaIcon});
            break
        case "Adufeiras\/Bombos\/Cantares\/Cante\/Cavaquinhos\/Concertinas\/Gaiteiros\/Grupo etnogr�fico\/Grupo folcl�rico\/Grupo de m�sica tradicional\/Rancho folcl�rico\/Sarroncas":
            var fontanaIcon3 = new L.icon({
                iconUrl: 'img/icon3.png',
                iconSize:     [22, 30], // size of the icon
                iconAnchor:   [22, 22], // point of the icon which will correspond to marker's location
                popupAnchor:  [-11, -26] // point from which the popup should open relative to the iconAnchor
            });
            return L.marker(latlng, {icon: fontanaIcon3});
            break
        case "Tunas\/grupos t�picos":
            var fontanaIcon4 = new L.icon({
                iconUrl: 'img/icon4.png',
                iconSize:     [22, 30], // size of the icon
                iconAnchor:   [22, 22], // point of the icon which will correspond to marker's location
                popupAnchor:  [-11, -26] // point from which the popup should open relative to the iconAnchor
            });
            return L.marker(latlng, {icon: fontanaIcon4});
            break
        default:
            var fontanaIcon2 = new L.icon({
                iconUrl: 'img/icon2.png',
                iconSize:     [22, 30], // size of the icon
                iconAnchor:   [22, 22], // point of the icon which will correspond to marker's location
                popupAnchor:  [-11, -26] // point from which the popup should open relative to the iconAnchor
            });
            return L.marker(latlng, {icon: fontanaIcon2});
            break
    }
}


//FUNÇÃO PARA OS POP UPS
function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.link1_href && feature.properties.link2_href) {
        layer.bindPopup("<p>" + feature.properties.link1_href + "</p>" + "<br>" + "<a target='_blank' href='" + feature.properties.link2_href + "'>" + "Ver Ficha da Entidade" + "</a");
    }

}


L.geoJSON(geojson2, {
    pointToLayer: icons,
    onEachFeature: onEachFeature

}).addTo(mymap);

}
