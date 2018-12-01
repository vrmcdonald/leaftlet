var mymap = L.map('mapid').setView([40.272, -97.174], 4);
L.tileLayer('https://api.mapbox.com/styles/v1/vrmcdonald/cjp4tv4yg1q9c2rqz6ia28yli/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidnJtY2RvbmFsZCIsImEiOiJjanA0cnNoYTEwMG02M3dxc3ppaXlrZHB3In0.Ag2vI36B_m31ls99BSsofw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].description + '<p>')
  .addTo(mymap);
}
