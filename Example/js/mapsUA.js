//guarda um objeto 'mapa' dentro de uma variável para depois podermos manipular os seus atributos etc.
function setMap() {
    mymap = L.map('mapid'/*id do mapa no html*/, {zoomControl: false}).setView([39.936946, -8.142685]/*coordenadas do mapa on load*/, 7/*nivel de zoom*/);

}

//adiciona o layer (sem marcadores/pontos/localizações) de layout de mapa
function addLayer() {
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ2FtZWxhcyIsImEiOiJjam1qaHdpd2YwZXBnM2ttc2xuN2czYmhoIn0.YUFt9dn3TQCMyvqwp8YE8g', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);
}

//adiciona os marcadores/pontos/localizações. Recebe um json com as localizações e uma função para os icons. Ver ficheiro iconsUA.js para as funções de icons
function addMarkers(json, icons) {
    L.geoJSON(json, {
        pointToLayer: icons,
        onEachFeature: setUpPopUp
    }).addTo(mymap);
}

//formatação dos popUps. Não tenho muito a explicar aqui ahaha
function setUpPopUp(feature, layer) {
    if (feature.properties && feature.properties.link1_href) {
        layer.bindPopup("<p class='nome_entidade'>" + feature.properties.name + "</p>" + "<p class='link_entidade'><a href='" + feature.properties.link1_href + "' target='blank'>Ver Dados</a></p>");
    }

}

//função que simplifica o processo de trocar de mapa, ou seja de remover os marcadores que estão 'live' e adicionar um novo conjunto. Recebe um json com as novas localizações e uma função para os icons.
//switch de mapas
function makeMap(json, icon) {
    mymap.remove();

    setMap();
    addLayer();
    addMarkers(json, icon)
}

//simplificação do processo de start-up do mapa. Novamente, recebe um json com as localizações e uma função para os icons :)
function start(json, icon){
    setMap();
    addLayer();
    addMarkers(json, icon);
}

