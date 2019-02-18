//cada função corresponde a um tipo de icon novo. Este ficheiro pode funcionar como um 'banco de icons' prontos a serem utilizados nos mapas
//os nomes podiam ser mais descritivos confesso

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