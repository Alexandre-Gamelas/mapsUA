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



//FUNÇÃO PARA OS POP UPS
function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name && feature.properties.link1_href) {
        layer.bindPopup("<p>" + feature.properties.name + "</p>" + "<br>" + "<a target='_blank' href='" + feature.properties.link1_href + "'>" + "Ver Ficha da Entidade" + "</a");
    }

}


L.geoJSON(geojson2, {

    onEachFeature: onEachFeature

}).addTo(mymap);

}
