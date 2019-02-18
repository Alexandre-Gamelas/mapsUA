//LEAFTLET
var mymap = L.map('mapid').setView([39.846946, -7.500685], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ2FtZWxhcyIsImEiOiJjam1qaHdpd2YwZXBnM2ttc2xuN2czYmhoIn0.YUFt9dn3TQCMyvqwp8YE8g', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

//GeoJason

//FUNÇÃO PARA OS POP UPS
function onEachFeature(feature, layer) {
    //TESTE PARA SABER SE O MARCADOR EM QUESTÃO TEM OU NÃO CONTEUDO NO POP-UP
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }


}

L.geoJSON(teste, {

    onEachFeature: onEachFeature

}).addTo(mymap);


//PODEMOS CRIAR ESTILOS E ALOCA-LOS EM VARS QUE DEPOIS SÃO APLICADAS AO FICHEIRO INTEIRO DE GEOJASON


L.geoJSON(teste3, {

    onEachFeature: onEachFeature,

}).addTo(mymap);


//PODEMOS UTILIZAR ESTRUTURAS DE DECISÃO MULTIPLA COM COMPARAÇÕES A VALORES EM PROPRIEDADES.
/*
    style: function(feature) {
        switch (feature.properties.party) { //dar a propriedade party e atribuir ao valor aos features no geojason
            case 'Republican': return {color: "#ff0000"};
            case 'Democrat':   return {color: "#0000ff"};
          }
*/
//AS PROPRIEDADES SÃO ILIMITADAS.

