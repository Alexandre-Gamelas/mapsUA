var mymap;
var fontanaIcon;

window.onload = function () {

    start(geojson2, icons1);//exemplo de mapa inicial

    document.getElementById("btn1").onclick = function () {
        makeMap(geojson2, icons1)//carrega as localizções guardadas na var geojson2 e carrega os icons1
    };

    document.getElementById("btn2").onclick = function () {
        makeMap(geojson3, icons2)//carrega as localizções guardadas na var geojson3 e carrega os icons2
    };
};





